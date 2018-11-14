import DOMComponent from "nss-domcomponent"
import API from "./../api"
import userSession from "./../sessionStorage"
import Task from "./task"
import clear from "../clear";

let taskIcon = new DOMComponent("i", { classList: "material-icons circle clear" }, "clear")
let collectonContainer = new DOMComponent("ul", { classList: "container task__list--container title" }, "My To Do List:" )
let showTaskFormBtn = new DOMComponent("button", { classList: "add-task-button btn-small waves-effect waves-light" }, "Add Task")


const taskListeners = {
  initialStatus(tasks) {
    tasks.forEach((task) => {
      let statusRadio = document.querySelectorAll(`.status-radio${task.status}`)
      statusRadio.forEach((radio) => {
        if (task.name === radio.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent) {
          radio.setAttribute("checked", "checked")
        }
      })
    })
  },

  addTaskListeners() {
    let collection = document.querySelector(".main-container")
    collection.addEventListener("click", (e) => {

      if (e.target.classList.contains("delete-button")) {
        clear(".task__list--container")
        API.deleteData("tasks", e.target.parentElement.id.split("-")[1]).then((response) => {
          taskListeners.renderTasks()
        })
      }

      if (e.target.classList.contains("save-button")) {
        clear(".task__list--container")


        e.target.classList.add("hide")
        e.target.previousSibling.classList.remove("hide")

        let taskName = e.target.previousSibling.previousSibling.previousSibling.previousSibling
        taskName.setAttribute("contenteditable", false)

        let nameObj = { name: taskName.textContent }
        let nameId = e.target.parentElement.id.split("-")[1]

        API.editData("tasks", nameObj, nameId).then((response) => {
          taskListeners.renderTasks()
        })
      }

      if (e.target.classList.contains("edit-button")) {
        e.target.classList.add("hide")
        e.target.nextSibling.classList.remove("hide")
        let title = e.target.previousSibling.previousSibling.previousSibling
        console.log(title)
        title.addEventListener("keypress", (e)=> {
          if (e.key === "Enter"){
            clear(".task__list--container")
            e.target.classList.add("hide")
            e.target.previousSibling.classList.remove("hide")
            console.log(e)
            title.setAttribute("contenteditable", false)

            let nameObj = { name: title.textContent }
            let nameId = e.target.parentElement.id.split("-")[1]

            API.editData("tasks", nameObj, nameId).then((response) => {
              taskListeners.renderTasks()
            })
          }
        })

        title.setAttribute("contenteditable", true)
        title.focus()
      }

      if (e.target.classList.contains("status__radio--container")) {
        // console.log("status", e.target.parentElement.parentElement.parentElement.parentElement.id.split("-")[1])
        if (e.target.textContent === "Done") {
          clear(".task__list--container")
          let taskId = e.target.parentElement.parentElement.parentElement.parentElement.id.split("-")[1]
          let progessObj = { status: 2 }
          API.editData("tasks", progessObj, taskId).then((response) => {
            taskListeners.renderTasks()
          })
        }
      }

      if (e.target.classList.contains("add-task-button")) {
        document.querySelector("#formContainer").classList.remove("hide")
        document.querySelector(".add-task-button").classList.add("hide")
      }

      if (e.target.classList.contains("clear")) {
        document.querySelector("#formContainer").classList.toggle("hide")
        document.querySelector(".add-task-button").classList.toggle("hide")
      }
    })
  },

  renderTasks() {
    showTaskFormBtn.render(".main-container")
    document.querySelector(".add-task-button").classList.remove("hide")

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

      // Hide everything that is marked as done
      let radios = document.querySelectorAll(".status__radio--container")
      radios.forEach((radio) => {
        if (radio.previousElementSibling.hasAttribute("checked") && radio.textContent === "Done") {
          radio.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hide")
        }
      })

      // hide all save buttons for future use
      document.querySelectorAll(".save-button").forEach((btn) => {
        btn.classList.add("hide")
      })
    })
  }
}

export default taskListeners