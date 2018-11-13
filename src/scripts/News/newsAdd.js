import Form from "../formBuilder"
// this import can be deleted with highlighted text code (lines 13-15)
import newsInputs from "./newsInputs"

// Listener on "Add Article" button that opens form to add new article
function newArticleListener() {
  console.log("New Article Listener function called")
  let newArticleBtn = document.querySelector("button.article-button")
  newArticleBtn.addEventListener("click", () => {
    console.log("add article click")
    let newsEditor = new Form("New Article", "news-editor", newsInputs)
    let newsEdit = newsEditor.build()
    newsEdit.render("article.container")
    newArticleBtn.classList.add("hide")
  })
}

export default newArticleListener