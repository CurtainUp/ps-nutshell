
import API from "./../api"

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
      }
      if (e.target.classList.contains("save-button")) {
        console.log("save")
      }
      if (e.target.classList.contains("edit-button")) {
        console.log("edit")
      }
      if (e.target.classList.contains("status__radio--container")) {
        console.log("status")
      }
      if (e.target.classList.contains("add-task-button")) {
        console.log("add task")
      }
      if (e.target.classList.contains("clear")) {
        console.log("close form")
      }
    })
  },

  // addStatusListeners() {
  //   document.querySelectorAll(".status-radio").forEach((radio) => {
  //     radio.addEventListener("click", (e) => {
  //       console.log("change status", e)
  //       // TODO: patch
  //     })
  //   })
  // },

  // addDeleteListener() {
  //   document.querySelectorAll(".delete-button").forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       API.deleteData("tasks", e.target.parentElement.id.split("-")[1]).then((response) => {
  //         console.log(response)
  //       })
  //     })
  //   })
  // },

  // addEditListener() {
  //   document.querySelectorAll(".edit-button").forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       console.log("edit", e)
  //       // TODO: edit in place
  //     })
  //   })
  // },

  // addSaveListener() {
  //   document.querySelectorAll(".save-button").forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       console.log("save", e)
  //       // TODO: patch
  //     })
  //   })
  // },

  // addAddTaskListener() {
  //   document.querySelector(".add-task-button").addEventListener("click", (e) => {
  //     document.querySelector("#formContainer").classList.toggle("hide")
  //     document.querySelector(".add-task-button").classList.add("hide")
  //   })
  // },

  // addCloseFormListener() {
  //   document.querySelector(".clear").addEventListener("click", () => {
  //     document.querySelector("#formContainer").classList.toggle("hide")
  //     document.querySelector(".add-task-button").classList.toggle("hide")
  //   })
  // }
}

export default taskListeners