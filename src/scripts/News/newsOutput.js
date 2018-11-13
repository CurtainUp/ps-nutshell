/*
  author(s): Elyse
  purpose: takes individual news elements and builds output fragment for entire news section
*/

import DOMComponent from "nss-domcomponent"
import newArticleListener from "./newsAdd"
import News from "./news"
import editListener from "./newsEditor"

// Loads News Page
function loadNews() {
  let createArticleBtn = new DOMComponent("button", { classList: "article-button btn-large waves-effect waves-light" }, "Add Article")
  createArticleBtn.render("article.container")
  newArticleListener()
  // --
  let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
  let testNews2 = new News("Second Time Around", "People want MORE Waddle", "November 11, 2018", "https://www.vox.com")

  testNews.buildNewsElement()
  testNews2.buildNewsElement()
  // ---
  editListener()
  // add code that fetches user's articles, then creates an instance of News class for each, then run buildNewsElement on each
}

export default loadNews

// function saveNews() {
//   // If no existing id, POST to database
// API.getData(`news?id=${entryObject.id}`)
//   .then((news) => {
//     if (news.id === true) {
//       API.editData(resource, entryObject, id)
//       return fetch(`http://localhost:8088/${resource}/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(entryObject)
//       })
//         .then(response => response.json())
//     } else {
//       API.saveData("news", entryObject)
//         .then(response => response.json())
//     }
//   }

//   // If already existing, PATCH updated fields to database
//   // then
//   // GET all news items
//   // Render dom
// }

// function deleteNews() {
//   // DELETE instance (id)
//   // GET all news items
//   // Render dom
// }

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