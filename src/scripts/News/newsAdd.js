/*
  author(s): Elyse
  purpose: Functions related to adding articles to the database.
*/

import Form from "../formBuilder"
import newsInputs from "./newsInputs"
import API from "../api"
import getFormValues from "../getFormValues"
import loadNews from "./newsOutput"
import clear from "../clear"
import userSession from "../sessionStorage"


function addNewArticle() {
  // Add Button Functionality - Posts entry to database and reload page with fresh article list
  let saveArticleBtn = document.querySelector("#formSubmit")
  saveArticleBtn.addEventListener("click", (e) => {
    e.preventDefault()
    // ADD TIMESTAMP
    let timeSaved = Date.now()
    // ADD USER ID ON CLICK
    let id = userSession.getUser()
    let articleInfo = getFormValues(document.querySelector("form"))
    articleInfo.userId = id
    articleInfo.timestamp = timeSaved
    console.log(articleInfo)
    API.saveData("news", articleInfo)
      .then(() => {    // Clears main container and pulls new news dashboard with additional article.
        clear()
        loadNews()
      })
  })
  // Back Button Functionality - Hides form and shows Add Article button
  let backBtn = document.querySelector("#back-button")
  backBtn.addEventListener("click", (e) => {
    e.preventDefault()
    clear()
    loadNews()
  })
}

const addFunctions = {
  // Listener on "Add Article" button that opens form to add new article
  newArticleListener() {
    let newArticleBtn = document.querySelector("button.article-button")
    newArticleBtn.addEventListener("click", () => {
      let newsCreator = new Form("Add Article", "news-editor", newsInputs.articleInputs)
      let newsCreate = newsCreator.build()
      newsCreate.render(".form-container")
      newArticleBtn.classList.add("hide")
      addNewArticle()
    })
  }
}

export default addFunctions