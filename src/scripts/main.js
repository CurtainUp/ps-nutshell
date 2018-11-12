import landingPage from "./login/landing"
import navListeners from "./listeners"

if (window.sessionStorage.length === 0) {
  landingPage()
} else {
  // reveals navigation buttons to logged in user
  let navButtons = document.querySelectorAll(".hide")
  navButtons.forEach((item) => { item.className = "" })
}

navListeners()