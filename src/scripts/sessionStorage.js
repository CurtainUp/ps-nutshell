import clear from "./clear"
import welcomePage from "./login/welcome"

const userSession = {
  logInUser(id) {
    window.sessionStorage.setItem("id", id)
    clear()
    welcomePage()
  },

  getUser() {
    return Number(window.sessionStorage.getItem("id"))
  },

  logOutUser() {
    window.sessionStorage.clear()
  }
}

export default userSession
