import landingPage from "./login/landing"
import welcomePage from "./login/welcome"
import API from "./api.js"
import userSession from "./sessionStorage"

userSession.logOutUser()
userSession.logInUser("2")

if(window.sessionStorage.length === 0) {
  landingPage()
} else {
  API.getData("users").then((users) => {
    users.forEach((user) =>{
      if(userSession.getUser() === user.id){
        welcomePage(user.displayName)
      }
    })
  })
}

