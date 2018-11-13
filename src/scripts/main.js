import landingPage from "./login/landing"
import messages from "./Message/msgOutput"
import API from "./api"

if(window.sessionStorage.length === 0) {
  landingPage()
}

API.getData("messages?_expand=user")
  .then(messagesArray => messages(messagesArray).render(".main-container"))