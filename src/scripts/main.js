import landingPage from "./login/landing"
import navListeners from "./listeners"
import welcomePage from "./login/welcome"
import API from "./api.js"
import userSession from "./sessionStorage"
import News from "./News/news"

// userSession.logOutUser()

if (window.sessionStorage.length === 0) {
  landingPage()
} else {
  API.getData(`users/${userSession.getUser()}`).then((users) => {
    welcomePage(users.displayName)
    let navButtons = document.querySelectorAll(".hide")
    navButtons.forEach((item) => { item.className = "" })
  })
}

// // --
// let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
// let testNews2 = new News("Second Time Around", "People want MORE Waddle", "November 11, 2018", "https://www.vox.com")

// testNews.buildNewsElement()
// testNews2.buildNewsElement()
// // ---

navListeners()
