import landingPage from "./login/landing"
import welcomePage from "./login/welcome"
import API from "./api.js"
import userSession from "./sessionStorage"

// userSession.logOutUser()


if (window.sessionStorage.length === 0) {
  landingPage()
} else {
  API.getData(`users/${userSession.getUser()}`).then((users) => {
    welcomePage(users.displayName)
  })
}

