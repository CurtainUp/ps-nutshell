import landingPage from "./login/landing"
import navListeners from "./listeners"
import welcomePage from "./login/welcome"
import API from "./api.js"
import userSession from "./sessionStorage"
import renderTaskForm from "./Task/taskForm"
import Task from "./Task/task"
import taskListeners from "./Task/taskListeners"

// userSession.logOutUser()


// if (window.sessionStorage.length === 0) {
//   landingPage()
// } else {
//   API.getData(`users/${userSession.getUser()}`).then((users) => {
//     welcomePage(users.displayName)
//     let navButtons = document.querySelectorAll(".hide")
//     navButtons.forEach((item) => { item.className = "" })
//   })
// }
// navListeners()

// renderTaskForm()
userSession.logInUser(1)
API.getData(`tasks?userId=${userSession.getUser()}`).then((tasks) => {
  tasks.forEach((task) => {
    let newTask = new Task(task)
    newTask.buildTaskElement(".main-container")
  })
  taskListeners.initialStatus()
})

