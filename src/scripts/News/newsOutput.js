/*
  author(s): Elyse
  purpose: takes individual news elements and builds output fragment for entire news section
*/

import Form from "./formBuilder"
import getFormValues from "./listeners"



let newsInputs = [
    ["text", "input1", `${this.title}`],
    ["text", "input2", `${this.summary}`],
    ["url", "input3", `${this.url}`],
    ["text", "timestamp", `${this.timestamp}`]
    ["submit", "formSubmit", "submit"]]

// Edit

function editNews() {
  // Opens edit fields FORM
  let newsEditor = new Form(title, htmlId, newsInputs)
  let newsEdit = newsEditor.build()
  newsEdit.render("ul.collection")
}

let editButton = document.querySelector(".edit-button")

editButton.addEventListener(e => {
  editNews()
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