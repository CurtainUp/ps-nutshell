
import DOMComponent from "nss-domcomponent"

const mainContainer = document.querySelector(".main-container")

class Row extends DOMComponent {
  constructor(attributes, ...children) {
    super("div", attributes, ...children)
  }
}

let welcomePage = (displayName) => {
  let welcomeHeader = new DOMComponent("h1", {classList:"header center"},`Hi ${displayName}`)
  let welcomeMessage = new DOMComponent("h2", { classList: "header center" }, "Welcome to Waddle, where to?")
  let friendNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "friendNavBtn" }, "Friends")
  let toDoNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "toDoNavBtn" }, "To Do")
  let chatNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "chatNavBtn" }, "Chat")
  let buttonRow = new Row({ classList: "row center" }, friendNavBtn, toDoNavBtn, chatNavBtn)
  let eventNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "eventNavBtn" }, "Events")
  let newsNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "newsNavBtn", textContent: "News" }, "News")
  let buttonRow2 = new Row({ classList: "row center" }, eventNavBtn, newsNavBtn)
  let welcomeEl = new DOMComponent("section", {classList:"container landing-page",id:"landingPage" }, welcomeHeader, welcomeMessage, buttonRow, buttonRow2)
  mainContainer.innerHTML = null

  welcomeEl.render(".main-container")
}

export default welcomePage