
import DOMComponent from "nss-domcomponent"
import clear from "../clear"
import loadMessages from "./../Message/msgOutput"
import userSession from "./../sessionStorage"
import API from "./../api"
import eventPage from "./../Event/eventOutput"
import eventFormBuilder from "./../Event/eventForm"
import loadNews from "../News/newsOutput";
import taskPage from "../Task/taskOutput";

const mainContainer = document.querySelector(".main-container")

class Row extends DOMComponent {
  constructor(attributes, ...children) {
    super("div", attributes, ...children)
  }
}

let welcomePage = () => {

  API.getData(`users/${userSession.getUser()}`).then(user => {
    let welcomeHeader = new DOMComponent("h1", {classList:"header center"},`Hi ${user.displayName}!`)
    let welcomeMessage = new DOMComponent("h2", { classList: "header center" }, "Welcome to Waddle, where would you like to go?")
    let chatNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "chatNavBtn" }, "Chat")
    let toDoNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "toDoNavBtn" }, "To Do")
    let eventNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "eventsNavBtn" }, "Events")
    let newsNavBtn = new DOMComponent("a", { classList: "btn-large waves-effect waves-light", id: "newsNavBtn", textContent: "News" }, "News")
    let buttonRow = new Row({ classList: "row center" }, chatNavBtn, toDoNavBtn, eventNavBtn, newsNavBtn)
    let welcomeEl = new DOMComponent("section", {classList:"container landing-page",id:"landingPage" }, welcomeHeader, welcomeMessage, buttonRow)
    mainContainer.innerHTML = null

    welcomeEl.render(".main-container")

    let chatNav = document.getElementById("chatNavBtn")
    chatNav.addEventListener("click", () => {
      clear()
      document.querySelector("nav #chat").parentNode.classList.add("teal")
      loadMessages()
    })

    let toDoNav = document.getElementById("toDoNavBtn")
    toDoNav.addEventListener("click", () => {
      clear()
      taskPage()
      document.querySelector("nav #todo").parentNode.classList.add("teal")
    })

    let eventsNav = document.getElementById("eventsNavBtn")
    eventsNav.addEventListener("click", () => {
      clear()
      document.querySelector("nav #events").parentNode.classList.add("teal")
      eventPage()
      eventFormBuilder.eventFormListener()
    })

    let newsNav = document.getElementById("newsNavBtn")
    newsNav.addEventListener("click", () => {
      clear()
      document.querySelector("nav #news").parentNode.classList.add("teal")
      loadNews()
    })
  })
}

export default welcomePage