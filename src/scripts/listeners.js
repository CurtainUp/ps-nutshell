/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/
import loadNews from "./News/newsOutput"

// Grab nav elements
const friendsNav = document.getElementById("friends")
const chatNav = document.getElementById("chat")
const todoNav = document.getElementById("todo")
const eventsNav = document.getElementById("events")
const newsNav = document.getElementById("news")
const logoutNav = document.getElementById("logout")

const mainContainer = document.querySelector(".main-container")

// adds event listeners to each nav element
let navListeners = () => {
  friendsNav.addEventListener("click", () => {
    mainContainer.innerHTML = "<h>Your Friends</h>"
  })
  chatNav.addEventListener("click", () => {
    mainContainer.innerHTML = "<h>Your Chat</h>"
  })
  todoNav.addEventListener("click", () => {
    mainContainer.innerHTML = "<h>Your To Do List</h>"
  })
  eventsNav.addEventListener("click", () => {
    mainContainer.innerHTML = "<h>Your Events</h>"
  })
  newsNav.addEventListener("click", () => {
    loadNews()
  })
  logoutNav.addEventListener("click", () => {
    mainContainer.innerHTML = "<h>GET OUT WE DON'T WANT YOU ANYWAY!</h>"
  })
}

export default navListeners
