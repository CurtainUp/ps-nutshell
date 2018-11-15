import DOMComponent from "nss-domcomponent"
import API from "./../api"
import userSession from "./../sessionStorage"
import Task from "./task"
import clear from "../clear";


// author of Row extension: Elyse
class Row extends DOMComponent {
  constructor(...children) {
    super("div", { className: "row center" }, ...children)
  }
}



let taskIcon = new DOMComponent("i", { classList: "material-icons circle clear" }, "clear")
let collectonContainer = new DOMComponent("ul", { classList: "container task__list--container title" }, "My To Do List:")
let showTaskFormBtn = new DOMComponent("button", { classList: "add-task-button center btn-large waves-effect waves-light" }, "Add Task")
let taskBtnRow = new Row(showTaskFormBtn)
let toDoTitle = new DOMComponent("h2", { className: "toDoTitle title center" }, "My To Do List")


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
    const collection = document.querySelector(".main-container")
    if (!collection.hasAttribute("data-listener")) {
      collection.setAttribute("data-listener", "true")
      collection.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          clear(".task__list--container")
          API.deleteData("tasks", e.target.parentElement.parentElement.parentElement.id.split("-")[1]).then(() => {
            taskListeners.renderTasks()
          })
        }

        if (e.target.classList.contains("save-button")) {
          clear(".task__list--container")


          e.target.classList.add("hide")
          e.target.previousSibling.classList.remove("hide")
          e.target.previousSibling.parentElement.classList.remove("hide")


          let taskName = e.target.parentNode.previousSibling.previousSibling.previousSibling
          taskName.setAttribute("contenteditable", false)

          let nameObj = { name: taskName.textContent }
          let nameId = e.target.parentElement.id.split("-")[1]

          API.editData("tasks", nameObj, nameId).then(() => {
            taskListeners.renderTasks()
          })
        }

        if (e.target.classList.contains("edit")) {
          e.target.classList.add("hide")
          e.target.parentElement.classList.add("hide")
          e.target.nextSibling.classList.remove("hide")
          let title = e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling
          title.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              clear(".task__list--container")
              e.target.classList.add("hide")
              e.target.previousSibling.classList.remove("hide")
              e.target.previousSibling.parentElement.classList.remove("hide")
              title.setAttribute("contenteditable", false)

              let nameObj = { name: title.textContent }
              let nameId = e.target.parentElement.id.split("-")[1]

              API.editData("tasks", nameObj, nameId).then(() => {
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
            API.editData("tasks", progessObj, taskId).then(() => {
              taskListeners.renderTasks()
            })
          }
        }

        if (e.target.classList.contains("add-task-button")) {
          document.querySelector("#formContainer").classList.remove("hide")
          document.querySelector(".add-task-button").classList.add("hide")
          document.querySelector("#name").focus()
        }

        if (e.target.classList.contains("clear")) {
          document.querySelector("#formContainer").classList.toggle("hide")
          document.querySelector(".add-task-button").classList.toggle("hide")
        }
      })
    }
  },

  renderTasks() {
    toDoTitle.render(".main-container")
    taskBtnRow.render(".main-container")
    document.querySelector(".add-task-button").classList.remove("hide")

    collectonContainer.render(".main-container")
    API.getData(`tasks?userId=${userSession.getUser()}&status=1`).then((tasks) => {
      if (document.querySelector(".task__list--container")) {
        clear(".task__list--container")
      }
      let uniqueTask = 0
      tasks.forEach((task) => {
        let newTask = new Task(task)
        newTask.buildTaskElement(".task__list--container", uniqueTask)
        uniqueTask += 1
      })

      document.querySelector("#formContainer").classList.add("hide")
      taskIcon.render("#formContainer")
      taskListeners.initialStatus(tasks)

      // hide all save buttons for future use
      document.querySelectorAll(".save-button").forEach((btn) => {
        btn.classList.add("hide")
      })
    })
  }
}

export default taskListeners