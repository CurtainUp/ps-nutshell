import landingPage from "./login/landing"
import events from "./Event/eventForm"
import navListeners from "./listeners"
import welcomePage from "./login/welcome"

// userSession.logOutUser()


if (window.sessionStorage.length === 0) {
  landingPage()
} else {
  welcomePage()
  let navButtons = document.querySelectorAll(".hide")
  navButtons.forEach((item) => { item.classList.remove("hide")})
}

navListeners()
