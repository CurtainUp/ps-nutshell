import landingPage from "./login/landing"
import EventForm from "./Event/eventForm"

if(window.sessionStorage.length === 0) {
  landingPage()
}

const mainContainer = document.querySelector(".main-container")
EventForm.build().render(mainContainer)
