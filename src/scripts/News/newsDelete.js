/*
  author(s): Elyse
  purpose: Functions related to deleting articles in the database.
*/
import API from "../api"
import clear from "../clear"
import loadNews from "./newsOutput"

const deleteFunctions = {
  deleteListener() {
    let deleteButton = document.querySelectorAll(".delete")
    deleteButton.forEach(button => {
      button.addEventListener("click", function () {
        // Uses id of database article to fetch information
        API.deleteData("news", `${event.currentTarget.parentNode.id}`)
          .then(() => {    // Clears main container and pulls new news dashboard with additional article.
            clear()
            loadNews()
          })
      })
    })
  }
}

  export default deleteFunctions