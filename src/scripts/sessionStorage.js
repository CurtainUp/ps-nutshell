
const userSession = {
  currentUser: null,

  logInUser(id) {
    window.sessionStorage.setItem("id", id)
    this.currentUser = window.sessionStorage.getItem("id")
  },

  getUser(){
    this.currentUser = window.sessionStorage.getItem("id")
    return window.sessionStorage.getItem("id")
  },

  logOutUser(){
    window.sessionStorage.clear()
    this.currentUser = null
  }
}

export default userSession
import userSession from "./sessionStorage"