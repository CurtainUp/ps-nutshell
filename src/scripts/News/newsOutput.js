/*
  author(s): Elyse
  purpose: takes individual news elements and builds output fragment for entire news section
*/

import DOMComponent from "nss-domcomponent"
import addFunctions from "./newsAdd"
import News from "./news"
import API from "../api"
// import editFunctions from "./newsEdit"
import userSession from "../sessionStorage"
import deleteFunctions from "./newsDelete"

class Row extends DOMComponent {
  constructor(...children) {
    super("div", {className:"row"}, ...children)
  }
}

function grabUserArticles() {
  // Fetches saved articles
  API.getData(`news?userId=${userSession.getUser()}&_sort=timestamp&_order=desc`)
    // Turns saved articles into instances of News class
    .then(newsArray => {
      let savedArticles = []
      newsArray.forEach(item => {
        let article = new News(item).buildNewsElement()
        savedArticles.push(article)
      })
      let ul = new DOMComponent("ul", { classList: "collection" }, ...savedArticles)
      let section = new DOMComponent("section", { classList: "container" }, ul)
      section.render(".main-container")
      // Adds event listeners to buttons.
      // editFunctions.editListener()
      deleteFunctions.deleteListener()
    })
}

// Loads News Page
function loadNews() {
  let header = new Row(new DOMComponent("h2", {classList: "header center"}, "News Around the 'Berg"))
  let createArticleBtn = new DOMComponent("button", { classList: "article-button btn-large waves-effect waves-light" }, "Add Article")
  let buttonWrapper = new DOMComponent("div", { classList: "row center"}, createArticleBtn)
  header.render(".main-container")
  buttonWrapper.render(".main-container")

  let formContainer = new DOMComponent("section", { classList: "form-container" })
  formContainer.render(".main-container")
  grabUserArticles()
  addFunctions.newArticleListener()
}

export default loadNews