/*
  author(s): Elyse
  purpose: Functions related to adding articles to the database.
*/

import Form from "../formBuilder"
import newsInputs from "./newsInputs"
import API from "../api";
import getFormValues from "../getFormValues"
import loadNews from "./newsOutput";

function addNewArticle() {
  let saveArticleBtn = document.querySelector("#formSubmit")
  saveArticleBtn.addEventListener("click", () => {
    // ADD TIMESTAMP & USER ID ON CLICK
    let articleInfo = getFormValues(document.querySelector("form"))
    API.saveData("news", articleInfo)
  })
}

const addFunctions = {
  // Listener on "Add Article" button that opens form to add new article
  newArticleListener() {
    let newArticleBtn = document.querySelector("button.article-button")
    newArticleBtn.addEventListener("click", () => {
      let newsEditor = new Form("Add Article", "news-editor", newsInputs.articleInputs)
      let newsEdit = newsEditor.build()
      newsEdit.render("article.container")
      newArticleBtn.classList.add("hide")
      addNewArticle()
      loadNews()
    })
  }
}

export default addFunctions