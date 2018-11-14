/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/
import clear from "./clear"
import eventPage from "./Event/eventOutput"
import eventFormBuilder from "./Event/eventForm"
import loadMessages from "./Message/msgOutput"
import welcomePage from "./login/welcome"
import userSession from "./sessionStorage"
import landingPage from "./login/landing";

// Grab nav elements

const chatNav = document.getElementById("chat")
const todoNav = document.getElementById("todo")
const eventsNav = document.getElementById("events")
const newsNav = document.getElementById("news")
const logoutNav = document.getElementById("logout")
const logo = document.querySelector(".brand-logo")

const mainContainer = document.querySelector(".main-container")

// adds event listeners to each nav element
let navListeners = () => {

  chatNav.addEventListener("click", () => {
    clear()
    loadMessages()
  })
  todoNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your To Do List</h>"
  })
  eventsNav.addEventListener("click", () => {
    clear()
    eventPage()
    eventFormBuilder.eventFormListener()
  })
  newsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your News</h>"
  })
  logoutNav.addEventListener("click", () => {
    clear()
    userSession.logOutUser()
    landingPage()
  })
  logo.addEventListener("click", () => {
    // Only load welcome page if a user is logged in.
    if(userSession.getUser()) {
      clear()
      welcomePage()
    }
  })
}

export default navListeners
