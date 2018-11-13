/*
  author: Sebastian
  Purpose: This module is in charge of taking the input from the new message field and posting it to the database. Calls loadMessages() to reload the page.
*/

import API from "./../api"
import loadMessages from "./msgOutput"
import userSession from "./../sessionStorage"
import clear from "../clear";

function newMessage(msgObj) {
  return API.saveData("messages", msgObj)
    .then(() => {
      clear()
      loadMessages()
    })
}

function msgFormListener() {
  document.querySelector("#saveMsg").addEventListener("click", e => {
    e.preventDefault()

    let msgObj = {
      text: document.querySelector("input#text").value,
      userId: userSession.getUser(),
      isEdited: false,
      timestamp: new Date()
    }
    newMessage(msgObj)
  })
}

export default msgFormListener

