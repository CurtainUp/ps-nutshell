// import getFormValues from "./listeners"
import News from "./News/news"
import loadNews from "./News/newsOutput"
import Form from "./formBuilder"

// Skeleton used to create all News related forms
let newsInputs = [
  ["text", "title", "Title"],
  ["text", "summary", "Summary"],
  ["url", "url", "URL"],
  ["text", "timestamp", "Timestamp"],
  ["submit", "formSubmit", "submit"]]

// --
let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
let testNews2 = new News("Second Time Around", "People want MORE Waddle", "November 11, 2018", "https://www.vox.com")

testNews.buildNewsElement()
testNews2.buildNewsElement()
// ---

loadNews()
editListener()

// Function to that creates article editor element

function editNews(x) {
  // Opens edit fields FORM
  let newsEditor = new Form("Edit", "news-editor", newsInputs)
  let newsEdit = newsEditor.build()
  newsEdit.render("body")
  // populates inputs with values from News instance
  let titleVal = document.querySelector("input#title")
  console.log(titleVal)
  titleVal.value = x.title
  let summaryVal = document.querySelector("input#summary")
  summaryVal.value = x.summary
  let urlVal = document.querySelector("input#url")
  urlVal.value = x.url
  let timestampVal = document.querySelector("input#timestamp")
  timestampVal.value = x.timestamp
}

// Event listener that opens pre-loaded form when "Edit" is clicked **Currently can only take specific array**
function editListener() {
  let editButton = document.querySelector(".edit-button")
  editButton.addEventListener("click", function () {
    editNews(testNews)
    console.log("Edit button clicked")
  })
}

// import landingPage from "./login/landing"

// if(window.sessionStorage.length === 0) {
//   landingPage()
// }
