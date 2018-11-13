import api from "./../api"

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

  addStatusListeners() {
    document.querySelectorAll(".status-radio").forEach((radio) => {
      radio.addEventListener("click", (e) => {
        console.log("change status", e)
      })
    })
  },

  addDeleteListener() {
    document.querySelectorAll(".delete-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log("delete",e)
      })
    })
  },

  addEditListener() {
    document.querySelectorAll(".edit-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log("edit", e)
      })
    })
  },

  addSaveListener() {
    document.querySelectorAll(".save-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log("save", e)
      })
    })
  }
}

export default taskListeners