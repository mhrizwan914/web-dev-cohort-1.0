let todo_input = document.getElementById("todo_input")
let todo_btn = document.getElementById("todo_btn")
let todo_items_wrapper = document.querySelector(".todo_items_wrapper")

todo_btn.addEventListener("click", function () {
    let input_val = todo_input.value
    let li_tag = document.createElement("li")
    let del_btn = document.createElement("button")
    del_btn.setAttribute("type", "button")
    del_btn.innerText = "❌"
    del_btn.style.display = "inline-block"
    del_btn.style.marginLeft = "0.5em"

    if (!input_val) {
        alert("Please enter your todo")
    } else {
        li_tag.innerText = input_val
        li_tag.append(del_btn)
        todo_items_wrapper.append(li_tag)
        todo_input.value = ""
    }

    del_btn.addEventListener('click', function () {
        li_tag.remove()
    })
})