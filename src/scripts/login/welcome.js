
import DOMComponent from "nss-domcomponent"

const mainContainer = document.querySelector(".main-container")

class Row extends DOMComponent {
  constructor(attributes, ...children) {
    super("div", attributes, ...children)
  }
}

// TODO:display name will be set from session storage
let displayName

const welcomeHeader = new DOMComponent("h1", {classList:"header center"},`Hi ${displayName}`)
const welcomeMessage = new DOMComponent("h2", { classList: "header center" }, "Welcome to Waddle, where to?")
const friendNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "friendNavBtn" }, "Friends")
const toDoNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "toDoNavBtn" }, "To Do")
const chatNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "chatNavBtn" }, "Chat")
const buttonRow = new Row({ classList: "row center" }, friendNavBtn, toDoNavBtn, chatNavBtn)
const eventNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "eventNavBtn" }, "Events")
const newsNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "newsNavBtn", textContent: "News" }, "News")
const buttonRow2 = new Row({ classList: "row center" }, eventNavBtn, newsNavBtn)
const welcomeEl = new DOMComponent("section", {classList:"container landing-page",id:"landingPage" }, welcomeHeader, welcomeMessage, buttonRow, buttonRow2)


let welcomePage = () => {
  mainContainer.innerHTML = null
  welcomeEl.render(".main-container")
}

export default welcomePage