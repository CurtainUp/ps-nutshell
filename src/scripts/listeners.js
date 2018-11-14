/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/
import loadNews from "./News/newsOutput"
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
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))
    chatNav.parentNode.classList.add("teal")
  })
  todoNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your To Do List</h>"
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))
    todoNav.parentNode.classList.add("teal")
  })
  eventsNav.addEventListener("click", () => {
    clear()
    eventPage()
    eventFormBuilder.eventFormListener()
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))
    eventsNav.parentNode.classList.add("teal")
  })
  newsNav.addEventListener("click", () => {
    clear()
    loadNews()
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))
    newsNav.parentNode.classList.add("teal")
  })
  logoutNav.addEventListener("click", () => {
    clear()
    userSession.logOutUser()
    landingPage()
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))

  })
  logo.addEventListener("click", () => {
    // Only load welcome page if a user is logged in.
    if(userSession.getUser()) {
      clear()
      welcomePage()
    }
    document.querySelectorAll("nav li").forEach(el => el.classList.remove("teal"))

  })
}

export default navListeners
