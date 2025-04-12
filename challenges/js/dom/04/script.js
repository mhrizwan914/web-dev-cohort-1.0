const task_inp = document.getElementById("taskInput")
const add_task_btn = document.getElementById("addButton")
const task_list = document.getElementById("taskList")
const task_arr = Array.from(task_list.children)

add_task_btn.addEventListener("click", function () {
    let task = task_inp.value.trim()
    let li_tag = document.createElement("li")
    li_tag.textContent = task
    task_list.append(li_tag)
})