/*
  author(s): Sebastian
  purpose: takes individual message elements and builds output fragment for entire message section
*/

import DOMComponent from "nss-domcomponent"
import Message from "./msg"


function messages(messagesArray) {
  let messagesBuilt = []

  messagesArray.forEach(messageObj => {
    let message = new Message(messageObj)
    messagesBuilt.push(message.build())
  })
  let messagesElement = new DOMComponent("ul", {classList:"collection"}, ...messagesBuilt)

  return messagesElement
}

export default messages