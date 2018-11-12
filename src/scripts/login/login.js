import Form from "./../formBuilder"
import landingPage from "./landing"
import getFormValues from "../getFormValues"
import validate from "./../validate"

const mainContainer = document.querySelector(".main-container")

let loginInputs = [
  ["email", "email", "E-mail Address"],
  ["password", "password", "Password"],
  ["submit", "loginBtn", "Login"],
  ["button", "backBtn", "Back"]
]

const loginForm = new Form("Login", "loginForm", loginInputs).build()

function loginPage() {
  mainContainer.innerHTML = null
  loginForm.render(".main-container")

  /* Back Button Functionality */
  document.querySelector("#backBtn").setAttribute("formnovalidate", true)
  document.querySelector("#backBtn").addEventListener("click", e => {
    e.preventDefault()
    landingPage()
  })

  /* Submit Button Functionality */
  document.querySelector("#loginForm").addEventListener("click", e => {
    e.preventDefault()
    if(e.target.id === "loginBtn") {
      let loginValues = getFormValues(e.target.parentNode.parentNode.parentNode)
      validate.existingUser(loginValues)
    }
  })

}

export default loginPage