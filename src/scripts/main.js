import landingPage from "./login/landing"
import events from "./Event/eventForm"
import eventPage from "./Event/eventOutput"
import navListeners from "./listeners"
import welcomePage from "./login/welcome"
import API from "./api.js"
import userSession from "./sessionStorage"

// userSession.logOutUser()


if (window.sessionStorage.length === 0) {
  landingPage()
} else {
  API.getData(`users/${userSession.getUser()}`).then((users) => {
    welcomePage(users.displayName)
    let navButtons = document.querySelectorAll(".hide")
    navButtons.forEach((item) => { item.className = "" })
  })
}

document.addEventListener("DOMContentLoaded", function() {
  let elems = document.querySelectorAll(".datepicker");
  let instances = M.Datepicker.init(elems, {autoClose: true, format: "yyyy-mm-dd"});
});

// events.eventFormBuilder()
// events.eventFormListener()

eventPage()
navListeners()
