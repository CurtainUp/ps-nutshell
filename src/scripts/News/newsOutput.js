/*
  author(s): Elyse
  purpose: takes individual news elements and builds output fragment for entire news section
*/

import Form from "./formBuilder"
import getFormValues from "./listeners"

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


function saveNews() {
  // If no existing id, POST to database
  // If already existing, PATCH updated fields to database
  // then
  // GET all news items
  // Render dom
}

function deleteNews() {
  // DELETE instance (id)
  // GET all news items
  // Render dom
}

// ***Testing to add multiple instances to DOM at once for after fetch.***
// ***The following code works if buildNewsElement function is outside of News class***

// let allNews = []
// allNews.push(testNews, testNews2)
// console.log(allNews)

// function buildMultipleNewsElements(prop) {
//   prop.forEach(thing => {
//     buildNewsElement(thing)
//   })
// }

// buildMultipleNewsElements(allNews)