/*
  author(s):
  purpose: takes individual task elements and builds output fragment for entire task section
*/
import API from "./../api.js"
import userSession from "./../sessionStorage"
import Task from "./task"
import taskListeners from "./taskListeners"
import renderTaskForm from "./taskForm"


const taskPage = () => {
  renderTaskForm()
  API.getData(`tasks?userId=${userSession.getUser()}`).then((tasks) => {
    let uniqueTask = 0
    tasks.forEach((task) => {
      let newTask = new Task(task)
      newTask.buildTaskElement(".main-container", uniqueTask)
      uniqueTask += 1
    })
    taskListeners.initialStatus(tasks)
    taskListeners.addStatusListeners()
    taskListeners.addDeleteListener()
    taskListeners.addEditListener()
    taskListeners.addSaveListener()
  })
}

export default taskPage