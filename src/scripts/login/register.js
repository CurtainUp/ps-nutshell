import Form from "./../formBuilder"
import landingPage from "./landing"
import getFormValues from "../getFormValues"
import validate from "./../validate"

const mainContainer = document.querySelector(".main-container")

let registerInputs = [
  ["text", "displayName", "Display Name"],
  ["email", "email", "E-mail Address"],
  ["password", "password", "Password"],
  ["submit", "registerBtn", "Register"],
  ["button", "backBtn", "Back"]
]

const registerForm = new Form("Register", "registerForm", registerInputs).build()

function registerPage() {
  mainContainer.innerHTML = null
  registerForm.render(".main-container")
  let backBtn = document.querySelector("#backBtn")
  let registerClick = document.querySelector("#registerForm")

  /* Back Button Functionality */
  if(!backBtn.hasAttribute("data-listener")) {
    backBtn.setAttribute("formnovalidate", true)
    backBtn.addEventListener("click", e => {
      e.preventDefault()
      landingPage()
    })
    backBtn.setAttribute("data-listener", "true")
  }

  /* Submit Button Functionality */
  if (!registerClick.hasAttribute("data-listener")) {
    document.querySelector("#registerForm").addEventListener("click", e => {
      e.preventDefault()
      if(e.target.id === "registerBtn" && registerClick.checkValidity()) {
        let loginValues = getFormValues(e.target.parentNode.parentNode.parentNode)
        validate.newUser(loginValues)
        registerClick.reset()
      }
    })
    registerClick.setAttribute("data-listener", "true")
  }

}

export default registerPage