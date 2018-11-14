import Form from "./../formBuilder"
import landingPage from "./landing"
import getFormValues from "../getFormValues"
import validate from "./../validate"
import clear from "./../clear"

let loginInputs = [
  ["email", "email", "E-mail Address"],
  ["password", "password", "Password"],
  ["submit", "loginBtn", "Login"],
  ["button", "backBtn", "Back"]
]

const loginForm = new Form("Login", "loginForm", loginInputs).build()

function loginPage() {
  clear()
  loginForm.render(".main-container")
  let backBtn = document.querySelector("#backBtn")
  let loginClick = document.querySelector("#loginForm")
  /* Back Button Functionality */
  backBtn.setAttribute("formnovalidate", true)

  if (!backBtn.hasAttribute("data-listener")) {
    backBtn.addEventListener("click", e => {
      e.preventDefault()
      landingPage()
    })
    backBtn.setAttribute("data-listener", "true")
  }
  /* Submit Button Functionality */

  if (!loginClick.hasAttribute("data-listener")) {
    loginClick.addEventListener("click", e => {
      e.preventDefault()
      if (e.target.id === "loginBtn") {
        let loginValues = getFormValues(e.target.parentNode.parentNode.parentNode)
        validate.existingUser(loginValues)
        let navButtons = document.querySelectorAll(".hide")
        navButtons.forEach((item) => { item.classList.remove("hide") })
        loginClick.reset()
      }
    })
    loginClick.setAttribute("data-listener", "true")
  }
}

export default loginPage