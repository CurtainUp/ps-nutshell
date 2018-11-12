import Form from "./../formBuilder"
import landingPage from "./landing"
import getFormValues from "./../listeners"

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

  /* Back Button Functionality */
  document.querySelector("#backBtn").setAttribute("formnovalidate", true)
  document.querySelector("#backBtn").addEventListener("click", e => {
    e.preventDefault()
    landingPage()
  })

  /* Submit Button Functionality */
  document.querySelector("#registerForm").addEventListener("click", e => {
    e.preventDefault()
    console.log(e)
    if(e.target.id === "registerBtn") {
      let loginValues = getFormValues(e.target.parentNode.parentNode.parentNode)
      console.log("object to post", loginValues)
    }
  })

}

export default registerPage