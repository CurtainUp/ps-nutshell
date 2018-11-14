import DOMComponent from "nss-domcomponent"
import API from "./../api"
import userSession from "./../sessionStorage"
import Task from "./task"
import clear from "../clear";

let taskIcon = new DOMComponent("i", { classList: "material-icons circle clear" }, "clear")
let collectonContainer = new DOMComponent("div", { classList: "container task__list--container" })
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
      console.log(e.target)

      if (e.target.classList.contains("delete-button")) {
        console.log("delete")
        clear(".task__list--container")
        API.deleteData("tasks", e.target.parentElement.id.split("-")[1]).then((response) => {
          console.log(response)
          taskListeners.renderTasks()
        })
      }

      if (e.target.classList.contains("save-button")) {
        console.log("save")
      }

      if (e.target.classList.contains("edit-button")) {
        console.log("edit")
      }

      if (e.target.classList.contains("status__radio--container")) {
        // console.log("status", e.target.parentElement.parentElement.parentElement.parentElement.id.split("-")[1])
        if (e.target.textContent === "Done") {
          clear(".task__list--container")
          let taskId = e.target.parentElement.parentElement.parentElement.parentElement.id.split("-")[1]
          let progessObj = { status: 2 }
          console.log("IM THE ID", taskId)
          API.editData("tasks", progessObj, taskId).then((response) => {
            taskListeners.renderTasks()
          })
        }
      }

      if (e.target.classList.contains("add-task-button")) {
        console.log("add task")
        document.querySelector("#formContainer").classList.remove("hide")
        document.querySelector(".add-task-button").classList.add("hide")
      }

      if (e.target.classList.contains("clear")) {
        console.log("close form")
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