/*
  author: Sebastian
  purpose: displays the landing page with register and login buttons
*/

import DOMComponent from "nss-domcomponent"
import loginPage from "./login"
import registerPage from "./register"

const mainContainer = document.querySelector(".main-container")

class Row extends DOMComponent {
  constructor(attributes, ...children) {
    super("div", attributes, ...children)
  }
}

const header = new DOMComponent("h1", {classList: "header"}, "Welcome to Penguin Nutshell")
const headerRow = new Row({classList: "row center"}, header)
const registerBtn = new DOMComponent("a", {classList: "btn-large waves-effect waves-light", id: "welcomeRegisterBtn"}, "Register")
const saveBtn = new DOMComponent("a", {classList: "btn-large waves-effect waves-light", id: "welcomeLoginBtn"}, "Login")
const buttonRow = new Row({classList: "row center"}, registerBtn, saveBtn)
const landingPageEl = new DOMComponent("section", {classList: "container landing-page", id: "landingPage"}, headerRow, buttonRow)


function landingPage() {
  mainContainer.innerHTML = null
  landingPageEl.render(".main-container")

  document.querySelector("#welcomeLoginBtn").addEventListener("click", e => {
    e.preventDefault()
    loginPage()
  })

  document.querySelector("#welcomeRegisterBtn").addEventListener("click", e => {
    e.preventDefault()
    registerPage()
  })
}

export default landingPage