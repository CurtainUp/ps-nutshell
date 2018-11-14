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
let collectonContainer = new DOMComponent("div", { classList: "container task__list--container" })


const taskPage = () => {
  renderTaskForm()
  showTaskFormBtn.render(".main-container")
  collectonContainer.render(".main-container")
  API.getData(`tasks?userId=${userSession.getUser()}`).then((tasks) => {
    let uniqueTask = 0
    tasks.forEach((task) => {
      let newTask = new Task(task)
      newTask.buildTaskElement(".task__list--container", uniqueTask)
      uniqueTask += 1
    })
    document.querySelector("#formContainer").classList.add("hide")
    taskIcon.render("#formContainer")
    taskListeners.initialStatus(tasks)
    taskListeners.addTaskListeners()
    // taskListeners.addStatusListeners()
    // taskListeners.addDeleteListener()
    // taskListeners.addEditListener()
    // taskListeners.addSaveListener()
    taskListeners.addAddTaskListener()
    taskListeners.addCloseFormListener()

    document.querySelectorAll(".save-button").forEach((btn) => {
      btn.classList.add("hide")
    })
  })
}

export default taskPage