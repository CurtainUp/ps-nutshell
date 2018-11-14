import landingPage from "./login/landing"
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