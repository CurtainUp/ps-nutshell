
import Form from "./../formBuilder"
import userSession from "../sessionStorage"
import clear from "../clear"
import API from "./../api"
import taskListeners from "./taskListeners"

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
  saveTaskBtn.nextElementSibling.classList.add("hide")
  saveTaskBtn.setAttribute("formnovalidate", true)
  document.querySelector("#name").classList.add("input-field")
  let dueByDate = document.querySelector("#dueBy")

  if (!dueByDate.hasAttribute("data-listener")) {
    dueByDate.setAttribute("data-listener", "true")
    let pickDueDate = M.Datepicker.init(dueByDate, { autoClose: true, format: "yyyy-mm-dd" })
  }


  if (!saveTaskBtn.hasAttribute("data-listener")) {
    saveTaskBtn.setAttribute("data-listener", "true")
    saveTaskBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (document.querySelector("#name").checkValidity() && dueByDate.checkValidity()) {
        let taskObj = {
          name: document.querySelector("#name").value,
          dueBy: dueByDate.value,
          status: 1,
          userId: userSession.getUser()
        }
        dueByDate.classList.add("input-field")

        if (taskObj.name !== "" && taskObj.dueBy != "") {
          API.saveData("tasks", taskObj).then(() => {
            document.querySelector("#formContainer").classList.toggle("hide")
            document.querySelector(".add-task-button").classList.toggle("hide")
            document.querySelector("#name").value = ""
            document.querySelector("#dueBy").value = ""
            clear(".task__list--container")
            taskListeners.renderTasks()
          })
        }
      }
    })
  }
}

export default renderTaskForm