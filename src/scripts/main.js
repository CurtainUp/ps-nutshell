import landingPage from "./login/landing"

if(window.sessionStorage.length === 0) {
  landingPage()
}
