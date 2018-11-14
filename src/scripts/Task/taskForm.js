import DOMComponent from "nss-domcomponent"
import Form from "./../formBuilder"
import getFormValues from "../getFormValues"
import userSession from "../sessionStorage"
import clear from "../clear"
import API from "./../api"
import taskListeners from "./taskListeners"
const mainContainer = document.querySelector(".main-container")

let taskInputs = [
  ["text", "name", "To Do"],
  ["text", "dueBy", "Complete By:"],
  ["button", "saveTaskBtn", "Add"]
]

const taskForm = new Form("Add Task", "taskForm", taskInputs).build()

let renderTaskForm = () => {
  clear()
  taskForm.render(".main-container")

  let saveTaskBtn = document.querySelector("#saveTaskBtn")
  saveTaskBtn.setAttribute("formnovalidate", true)
  document.querySelector("#name").classList.add("input-field")
  let dueByDate = document.querySelector("#dueBy")

  if (!dueByDate.hasAttribute("data-listener")) {
    dueByDate.addEventListener("click", (e) => {
      dueByDate.setAttribute("data-listener", "true")
      M.Datepicker.init(dueByDate, { autoClose: true, format: "yyyy-mm-dd" })
    })
  }


  if (!saveTaskBtn.hasAttribute("data-listener")) {
    saveTaskBtn.setAttribute("data-listener", "true")
    saveTaskBtn.addEventListener("click", (e) => {
      e.preventDefault()
      let taskObj = getFormValues(e.target.parentNode.parentNode.parentNode)
      taskObj.status = 1
      taskObj.userId = userSession.getUser()
      dueByDate.classList.add("input-field")



      if (taskObj.name !== "" && taskObj.dueBy != "") {
        API.saveData("tasks", taskObj).then((response) => {
          document.querySelector("#formContainer").classList.toggle("hide")
          document.querySelector(".add-task-button").classList.toggle("hide")
          document.querySelector("#name").value = ""
          document.querySelector("#dueBy").value = ""
          clear(".task__list--container")
          taskListeners.renderTasks()
        })
      } else {
        alert("Oops! Please complete task fields")
      }
    })
  }
}

export default renderTaskForm