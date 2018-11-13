import landingPage from "./login/landing"
import loadMessages from "./Message/msgOutput"

if(window.sessionStorage.length === 0) {
  landingPage()
}

loadMessages()