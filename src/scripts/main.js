import landingPage from "./login/landing"
import welcomePage from "./login/welcome"

if(window.sessionStorage.length === 0) {
  landingPage()
}

welcomePage("penguin")