/*
  author(s): Elyse
  purpose: Functions related to editing articles in the database.
*/

import Form from "../formBuilder"
// this import can be deleted with highlighted text code (lines 13-15)
import newsInputs from "./newsInputs"
import API from "../api"

const editFunctions = {
  // Function that creates article editor element
  editNews(x) {
    // Opens edit fields FORM
    let newsEditor = new Form("Edit", "news-editor", newsInputs.editInputs)
    let newsEdit = newsEditor.build()
    newsEdit.render("ul.collection")
    // populates inputs with values from News instance
    let titleVal = document.querySelector("input#edit-title")
    titleVal.value = x[0].title
    let summaryVal = document.querySelector("input#edit-summary")
    summaryVal.value = x[0].summary
    let urlVal = document.querySelector("input#edit-url")
    urlVal.value = x[0].url
  },

  // Event listener that opens pre-loaded form when "Edit" is clicked
  editListener() {
    let editButton = document.querySelectorAll(".edit-button")
    editButton.forEach(button => {
      button.addEventListener("click", function () {
        // Uses id of database article to fetch information
        API.getData(`news?id=${event.currentTarget.parentNode.id}`)
          .then(article => {
            editFunctions.editNews(article)
          })
      })
    })
  }
}

export default editFunctions