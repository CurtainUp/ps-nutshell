
const userSession = {
  currentUser: null,
  currentPage: null,

  logInUser(id) {
    window.sessionStorage.setItem("id", id)
    this.currentUser = window.sessionStorage.getItem("id")
  },

  getUser() {
    this.currentUser = window.sessionStorage.getItem("id")
    return window.sessionStorage.getItem("id")
  },

  logOutUser() {
    window.sessionStorage.clear()
    this.currentUser = null
    this.currentPage = null
  },

  setCurrentPage(pageId) {
    window.sessionStorage.setItem("currentPage", pageId)
    this.currentPage = window.sessionStorage.getItem("currentPage")
  },

  getCurrentPage() {
    this.currentPage = window.sessionStorage.getItem("currentPage")
    return window.sessionStorage.getItem("currentPage")
  }
}

export default userSession
