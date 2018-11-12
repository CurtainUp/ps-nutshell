import getFormValues from "./listeners"

import News from "./News/news"
import Form from "./formBuilder"

let testNews = new News("Nutshell News", "all the happenings at nutshell HQ", "November 10, 2018", "https://www.vox.com")
let testNews2 = new News("Second Time Around", "People want MORE nutshell", "November 11, 2018", "https://www.vox.com")

testNews.buildNewsElement()
testNews2.buildNewsElement()

let newsInputs = [
  ["text", "input1", "Title"],
  ["text", "input2", "Summary"],
  ["url", "input3", "URL"],
  ["text", "timestamp", "Timestamp"],
  ["submit", "formSubmit", "submit"]]

// Edit

function editNews() {
  // Opens edit fields FORM
  let newsEditor = new Form("Edit", "news-editor", newsInputs)
  let newsEdit = newsEditor.build()
  newsEdit.render("body")
}

let editButton = document.querySelector(".edit-button")

editButton.addEventListener("click", function () {
  editNews()
  console.log("Edit button clicked")
})