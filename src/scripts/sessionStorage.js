
const userSession = {
  logInUser(id) {
    window.sessionStorage.setItem("id", id)
  },

  getUser() {
    return Number(window.sessionStorage.getItem("id"))
  },

  logOutUser() {
    window.sessionStorage.clear()
  }
}

export default userSession
