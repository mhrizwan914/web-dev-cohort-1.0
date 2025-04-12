// Input references
const name_inp = document.getElementById("nameInput")
const job_inp = document.getElementById("jobInput")
const age_inp = document.getElementById("ageInput")
const bio_inp = document.getElementById("bioInput")
// Render elements display
const name_elem = document.getElementById("nameDisplay")
const job_elem = document.getElementById("jobDisplay")
const age_elem = document.getElementById("ageDisplay")
const bio_elem = document.getElementById("bioDisplay")

const inp_arr = [name_inp, job_inp, age_inp, bio_inp]
const elem_arr = [name_elem, job_elem, age_elem, bio_elem]

inp_arr.forEach((e, i) => {
    e.addEventListener("input", () => input_render(elem_arr[i], e))
})

function input_render(elem, target) {
    if (String(target.value.trim()).length > 0) {
        elem.textContent = target.value
    } else {
        elem.textContent = "Not provided"
    }
}