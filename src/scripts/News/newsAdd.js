import Form from "../formBuilder"
// this import can be deleted with highlighted text code (lines 13-15)
import newsInputs from "./newsInputs"

const addFunctions = {
  // Listener on "Add Article" button that opens form to add new article
  newArticleListener() {
    let newArticleBtn = document.querySelector("button.article-button")
    newArticleBtn.addEventListener("click", () => {
      let newsEditor = new Form("Add Article", "news-editor", newsInputs.articleInputs)
      let newsEdit = newsEditor.build()
      newsEdit.render("article.container")
      newArticleBtn.classList.add("hide")
    })
  }

}

export default addFunctions