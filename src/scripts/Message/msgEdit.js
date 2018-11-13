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
          message.querySelector("#message__input").remove()
        }

      })
    })
  },

  addInput(container) {
    let fragment = document.createDocumentFragment()

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "message__input")

    let submit = document.createElement("a")
    submit.classList = "btn-floating pulse waves-effect waves-light right"

    let icon = document.createElement("i")
    icon.classList = "material-icons"
    icon.textContent = "send"

    submit.appendChild(icon)

    fragment.appendChild(input)
    fragment.appendChild(submit)

    container.appendChild(fragment)
  }
}

export default editMsg