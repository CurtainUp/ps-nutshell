import landingPage from "./login/landing"
import userSession from "./sessionStorage"
if(window.sessionStorage.length === 0) {
  landingPage()
}

userSession.setCurrentPage("landingPage")