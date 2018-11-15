/*
  author(s):
  purpose: takes individual task elements and builds output fragment for entire task section
*/
import taskListeners from "./taskListeners"
import renderTaskForm from "./taskForm"
import clear from "../clear";






const taskPage = () => {
  clear()
  renderTaskForm()

  taskListeners.renderTasks()
  taskListeners.addTaskListeners()
}

export default taskPage