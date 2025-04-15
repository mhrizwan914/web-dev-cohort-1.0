// References
const task_inp = document.getElementById("taskInput")
const add_task_btn = document.getElementById("addButton")
const task_list = document.getElementById("taskList")
const total_task_list = document.getElementById("totalTasks")
const total_completed_task = document.getElementById("completedTasks")

add_task_btn.addEventListener("click", function () {
    // Hold task value
    let task = task_inp.value.trim()

    // Create li tag for task content
    let li_tag = document.createElement("li")

    //  Create delete button
    let delete_btn = document.createElement("button")
    delete_btn.setAttribute("type", "button")
    delete_btn.classList.add("delete-button")
    delete_btn.textContent = "❌"

    // Create complete button
    let complete_btn = document.createElement("button")
    complete_btn.setAttribute("type", "button")
    complete_btn.textContent = "✔"

    delete_btn.addEventListener("click", function () {
        if (li_tag.classList.contains("completed")) {
            let total = Array.from(task_list.children).filter((e) => e.classList.contains("completed"))
            total_completed_task.textContent = `Completed: ${total.length - 1}`
        }

        li_tag.remove()
        total_task_list.textContent = `Total tasks: ${task_list.children.length}`
        if (task_list.children.length === 0) {
            li_tag.classList.remove("task-item")
            li_tag.classList.add("empty-list")
            li_tag.textContent = "No tasks yet. Add one above!"
            task_list.append(li_tag)
        }
    })

    complete_btn.addEventListener("click", function () {
        if (li_tag.classList.contains("completed")) {
            li_tag.classList.remove("completed")
        } else {
            li_tag.classList.add("completed")
        }
        let total = Array.from(task_list.children).filter((e) => e.classList.contains("completed"))
        total_completed_task.textContent = `Completed: ${total.length}`
    })

    if (task) {
        // Append li tag
        li_tag.classList.add("task-item")
        li_tag.innerHTML = `<span class="task-text">${task}</span>`
        task_list.append(li_tag)

        // Clear input value
        task_inp.value = ""

        // Append complete button on li tag
        li_tag.append(complete_btn)

        // Append delete button on li tag
        li_tag.append(delete_btn)

        // Check is there any empty class
        Array.from(task_list.children).forEach((e) => {
            if (e.classList.contains("empty-list")) {
                e.remove()
            }
        })

        // Update total task
        total_task_list.textContent = `Total tasks: ${task_list.children.length}`
    }
})