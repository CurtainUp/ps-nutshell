/*
  author(s):
  purpose: takes individual task elements and builds output fragment for entire task section
*/
import API from "./../api.js"
import userSession from "./../sessionStorage"
import Task from "./task"
import taskListeners from "./taskListeners"
import renderTaskForm from "./taskForm"
import DOMComponent from "nss-domcomponent"

let showTaskFormBtn = new DOMComponent("button", { classList: "add-task-button btn-small waves-effect waves-light" }, "Add Task")
let taskIcon = new DOMComponent("i", { classList: "material-icons circle clear" }, "clear")



const taskPage = () => {
  renderTaskForm()
  showTaskFormBtn.render(".main-container")
  API.getData(`tasks?userId=${userSession.getUser()}`).then((tasks) => {
    let uniqueTask = 0
    tasks.forEach((task) => {
      let newTask = new Task(task)
      newTask.buildTaskElement(".main-container", uniqueTask)
      uniqueTask += 1
    })
    document.querySelector("#formContainer").classList.add("hide")
    taskIcon.render("#formContainer")
    taskListeners.initialStatus(tasks)
    taskListeners.addStatusListeners()
    taskListeners.addDeleteListener()
    taskListeners.addEditListener()
    taskListeners.addSaveListener()
    taskListeners.addAddTaskListener()
    taskListeners.addCloseFormListener()

    document.querySelectorAll(".save-button").forEach((btn) => {
      btn.classList.add("hide")
    })
  })
}

export default taskPage