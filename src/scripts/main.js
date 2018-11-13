import landingPage from "./login/landing"
import navListeners from "./listeners"
import welcomePage from "./login/welcome"
import API from "./api"
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
navListeners()