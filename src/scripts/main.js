// import getFormValues from "./listeners"
import News from "./News/news"
import loadNews from "./News/newsOutput"

// --
let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
let testNews2 = new News("Second Time Around", "People want MORE Waddle", "November 11, 2018", "https://www.vox.com")

testNews.buildNewsElement()
testNews2.buildNewsElement()
// ---

loadNews()

// import landingPage from "./login/landing"

// if(window.sessionStorage.length === 0) {
//   landingPage()
// }
