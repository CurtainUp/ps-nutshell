import Form from ".././formBuilder"
// this import can be deleted with highlighted text code (lines 13-15)
import News from "./news"
import newsInputs from "./newsInputs"

// TO BE DELETED. Currently used as proof of concept for editListener()
let testNews = new News("Waddle News", "all the happenings at Waddle HQ", "November 10, 2018", "https://www.vox.com")
// ----------

// Function to that creates article editor element

function editNews(x) {
  // Opens edit fields FORM
  let newsEditor = new Form("Edit", "news-editor", newsInputs.editInputs)
  let newsEdit = newsEditor.build()
  newsEdit.render("ul.collection")
  // populates inputs with values from News instance
  let titleVal = document.querySelector("input#edit-title")
  console.log(titleVal)
  titleVal.value = x.title
  let summaryVal = document.querySelector("input#edit-summary")
  summaryVal.value = x.summary
  let urlVal = document.querySelector("input#edit-url")
  urlVal.value = x.url
}

// Event listener that opens pre-loaded form when "Edit" is clicked **Currently can only take specific array**
function editListener() {
  let editButton = document.querySelector(".edit-button")
  editButton.addEventListener("click", function () {
    editNews(testNews)
    console.log("Edit button clicked")
  })
}

export default editListener