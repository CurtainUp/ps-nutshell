
import DOMComponent from "nss-domcomponent"
import clear from "../clear"
import loadMessages from "./../Message/msgOutput"

const mainContainer = document.querySelector(".main-container")

class Row extends DOMComponent {
  constructor(attributes, ...children) {
    super("div", attributes, ...children)
  }
}

let welcomePage = (displayName) => {
  let welcomeHeader = new DOMComponent("h1", {classList:"header center"},`Hi ${displayName}`)
  let welcomeMessage = new DOMComponent("h2", { classList: "header center" }, "Welcome to Waddle, where to?")
  let friendNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "friendsNavBtn" }, "Friends")
  let chatNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "chatNavBtn" }, "Chat")
  let toDoNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "toDoNavBtn" }, "To Do")
  let buttonRow = new Row({ classList: "row center" }, friendNavBtn, chatNavBtn, toDoNavBtn)
  let eventNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "eventsNavBtn" }, "Events")
  let newsNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "newsNavBtn", textContent: "News" }, "News")
  let buttonRow2 = new Row({ classList: "row center" }, eventNavBtn, newsNavBtn)
  let welcomeEl = new DOMComponent("section", {classList:"container landing-page",id:"landingPage" }, welcomeHeader, welcomeMessage, buttonRow, buttonRow2)
  mainContainer.innerHTML = null

  welcomeEl.render(".main-container")

  let friendsNav = document.getElementById("friendsNavBtn")
  friendsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your Friends</h>"
  })

  let chatNav = document.getElementById("chatNavBtn")
  chatNav.addEventListener("click", () => {
    clear()
    loadMessages()
  })

  let toDoNav = document.getElementById("toDoNavBtn")
  toDoNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your To Do List</h>"
  })

  let eventsNav = document.getElementById("eventsNavBtn")
  eventsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your Events</h>"
  })

  let newsNav = document.getElementById("newsNavBtn")
  newsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your News</h>"
  })
}

export default welcomePage