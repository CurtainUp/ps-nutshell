/*
  author(s): Sebastian
  purpose: takes individual message elements and builds output fragment for entire message section
*/

import DOMComponent from "nss-domcomponent"
import API from "./../api"
import Message from "./msg"
import msgFormListener from "./msgNew"
import editMsg from "./msgEdit"

class Row extends DOMComponent {
  constructor(...children) {
    super("div", {className:"row"}, ...children)
  }
}

function messages(messagesArray) {
  let messagesBuilt = []
  // Loop through the messages and build the element for each message
  messagesArray.forEach(messageObj => {
    let message = new Message(messageObj)
    messagesBuilt.push(message.build())
  })
  let messagesElement = new DOMComponent("ul", {classList:"collection"}, ...messagesBuilt)

  return messagesElement
}

function loadMessages() {
  return API.getData("messages?_expand=user")
    .then(messagesArray => {
      const header = new Row(new DOMComponent("h2", {classList: "header"}, "Chat with your Waddle"))

      const collection = messages(messagesArray)
      const msgsRow = new Row(collection)
      const icon = new DOMComponent("i", {classList: "material-icons prefix"}, "message")
      const textField = new DOMComponent("input", {type: "text", id: "text", classList: "validate", required: "true"})
      const label = new DOMComponent("label", {htmlFor: "text"}, "Send a Message")
      const inputField = new DOMComponent("div", {classList: "input-field col s11"}, icon, textField, label)

      const submitIcon = new DOMComponent("i", {classList: "material-icons", id:"saveMsg"}, "send")
      const submit = new DOMComponent("a", {classList:"btn-floating pulse waves-effect waves-light right"}, submitIcon)
      const submitWrap = new DOMComponent("div", {classList: "col s1"}, submit)
      const msgForm = new DOMComponent("form", {classList: "row valign-wrapper", id: "msgForm"}, inputField, submitWrap)

      const section = new DOMComponent("section", {classList: "messages container"}, header, msgsRow, msgForm)

      //Output Messages Section
      section.render(".main-container")

      //Set scroll to bottom of message window
      let scrollBox = document.querySelector(".messages .collection")
      scrollBox.scrollTop = scrollBox.scrollHeight;

      //Add Event listeners for adding and editing messages
      msgFormListener()
      editMsg.addListeners()
    })
}

export default loadMessages