import DOMComponent from "nss-domcomponent"
import Form from "./../formBuilder"
import getFormValues from "../getFormValues"
import userSession from "../sessionStorage"
// import Form from "./formBuilder"
// let inputs = [
//   ["text", "input1", "This is Input 1"],
//   ["url", "input2", "tHis is input 2"],
//   [ "radio-group", "status", [
//     ["radio", "select1", "this is input 3"],
//     ["radio", "select2", "this is input 4"]
//     ]
//   ],
//   ["submit", "formSubmit", "submit"]
// ]
// let testForm = new Form("Test Form", "testForm", inputs)
// let form = testForm.build()
// form.render("body")

const mainContainer = document.querySelector(".main-container")

let taskInputs = [
  ["text", "name", "To Do:"],
  ["text", "dueBy", "Complete By:"],
  ["button", "saveTaskBtn", "Save Task"]
]
const taskForm = new Form("To Do List", "taskForm", taskInputs).build()


let renderTaskForm = () => {
  mainContainer.innerHTML = null
  taskForm.render(".main-container")

  let saveTaskBtn = document.querySelector("#saveTaskBtn")
  saveTaskBtn.setAttribute("formnovalidate", true)
  document.querySelector("#name").classList.add("input-field")
  document.querySelector("#dueBy").classList.add("input-field")

  saveTaskBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let taskObj = getFormValues(e.target.parentNode.parentNode.parentNode)
    taskObj.status = 0
    taskObj.userId = userSession.getUser()
    console.log(taskObj)
  })
}
export default renderTaskForm