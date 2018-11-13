import Form from ".././formBuilder"
// this import can be deleted with highlighted text code (lines 13-15)
import News from "./news"

// Skeleton used to create all News related forms
let newsInputs = [
  ["text", "input1", "Title"],
  ["text", "input2", "Summary"],
  ["url", "input3", "URL"],
  ["text", "timestamp", "Timestamp"],
  ["submit", "formSubmit", "submit"]]

// TO BE DELETED. Currently used as proof of concept for editListener()
let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
// ----------

// Listener on "Add Article" button that opens form to add new article
function newArticleListener() {
  let newArticleBtn = document.querySelector("button.article-button")
  newArticleBtn.addEventListener("click", () => {
    let newsEditor = new Form("New Article", "news-editor", newsInputs)
    let newsEdit = newsEditor.build()
    newsEdit.render("article.container")
    newArticleBtn.classList.add("hide")
  })
}



export default newArticleListener