const fs = require("fs")
const fs_v2 = require("fs/promises")

console.log("Staring Code")

// ---------------------- Promises Code -----------------------
// fs_v2.readFile("./backup.txt", "utf-8")
//     .then((content) => fs_v2.writeFile("hello.txt", content))
//     .then(() => fs_v2.unlink("./backup.txt"))
//     .catch((error) => {
//         console.log(error)
//     })
// ---------------------- Legacy Code -----------------------
// fs.readFile("./hello.txt", "utf-8", (error, content) => {
//     if (!error) {
//         console.log("File reading is complete", content)
//         fs.writeFile("backup.txt", content, (error) => {
//             if (!error) {
//                 fs.unlink("./hello.txt", (error) => {
//                     if (!error) {
//                         console.log("File deleting successfully")
//                     } else {
//                         console.log("File deleting", error)
//                     }
//                 })
//             }
//         })
//     } else {
//         console.log(error)
//     }
// })

// ---------------------- Promisification Code -----------------------

function read_file_promise(file_path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(file_path, encoding, (error, content) => {
            if (!error) {
                resolve(content)
            } else {
                reject(error)
            }
        })
    })
}

function write_file_promise(file_path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file_path, content, (error) => {
            if (!error) {
                resolve()
            } else {
                reject(error)
            }
        })
    })
}

function unlink_file_promise(file_path) {
    return new Promise((resolve, reject) => {
        fs.unlink(file_path, (error) => {
            if (!error) {
                resolve()
            } else {
                reject(error)
            }
        })
    })
}

// read_file_promise("./hello.txt", "utf-8")
//     .then((content) => write_file_promise("./backup.txt"))
//     .then(() => unlink_file_promise("./backup.txt"))
//     .then(() => console.log("File deleted"))
//     .catch((error) => console.log(error))

function after_some_time(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds && typeof seconds === "number") {
            setTimeout(() => {
                resolve()
            }, seconds * 1000);
        } else {
            reject()
        }
    })
}

async function do_task() {
    try {
        const content = await read_file_promise("./hello.txt", "utf-8")
        await write_file_promise("./backup.txt", content)
        await after_some_time(10)
        await unlink_file_promise("./hello.txt")
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Setteled")
    }
}
do_task()


// console.log("File reading is complete", content)

// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b)
//     }, 5000);
// }

// sum(2, 3, (value) => console.log(value))

console.log("Ending Code")