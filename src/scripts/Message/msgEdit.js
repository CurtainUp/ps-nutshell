import API from "../api";
import clear from "../clear"
import loadMessages from "./msgOutput"
/*
  author: Sebastian
  purpose: Contains methods that are in charge of letting the active user edit their messages.
*/

const editMsg = {

  addListeners() {
    let userMessages = document.querySelectorAll(".message--currentUser")

    userMessages.forEach(message => {
      message.querySelector(".message__edit").addEventListener("click", () => {
        let editToggle = message.querySelector(".message__edit")
        let textEl = message.querySelector("p.message__text")

        if(editToggle.textContent === "Edit") {
          editMsg.addInput(message.querySelector(".col"))
          editToggle.textContent = "Cancel"
          message.querySelector("#message__input").value = textEl.textContent
          textEl.classList.add("hide")
        } else {
          editToggle.textContent = "Edit"
          textEl.classList.remove("hide")
          message.querySelector(".edit-message__wrapper").remove()
        }

      })
    })
  },

  addInput(container) {
    let wrapper = document.createElement("div")
    wrapper.classList = "edit-message__wrapper"

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "message__input")

    let submit = document.createElement("a")
    submit.classList = "btn-floating pulse waves-effect waves-light right"

    let icon = document.createElement("i")
    icon.classList = "material-icons"
    icon.textContent = "send"
    icon.addEventListener("click", e => {
      editMsg.saveEdit(e)

    })

    submit.appendChild(icon)

    wrapper.appendChild(input)
    wrapper.appendChild(submit)

    container.appendChild(wrapper)
  },

  saveEdit(e) {
    let message = e.target.parentNode.parentNode.parentNode.parentNode
    let id = message.id.split("-")[1]
    let messageObj = {
      text: message.querySelector("#message__input").value,
      isEdited: true
    }

    API.editData("messages", messageObj, id)
      .then(() => {
        clear()
        loadMessages()
      })
  }
}

export default editMsg