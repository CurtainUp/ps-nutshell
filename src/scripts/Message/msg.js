/*
  author(s): Sebastian
  purpose: defines a class that builds a single message element
*/
import DOMComponent from "nss-domcomponent"
import userSession from "./../sessionStorage"
import moment from "moment"

class Message {
  constructor(msgObj) {
    this.id = msgObj.id
    this.userId = msgObj.userId
    this.text = msgObj.text
    this.timestamp = msgObj.timestamp
    this.isEdited = msgObj.isEdited
    this.displayName = msgObj.user.displayName
  }

  build() {

    let msgAttr = {
      classList: "collection-item valign-wrapper message test",
      id: `message-${this.id}`
    }
    let textAttr = {
      classList: "message__text chip"
    }
    if (userSession.getUser() === this.userId) {
      msgAttr = {
        classList: "collection-item valign-wrapper message message--currentUser right-align",
        id: `message-${this.id}`
      }
      textAttr = {
        classList: "message__text chip teal lighten-1 white-text"
      }
    }

    const userName = new DOMComponent("span", {classList:"message__username"}, `${this.displayName} `)
    const msgTime = new DOMComponent("span", {classList:"message__time grey-text text-lighten-1"}, moment(this.timestamp).fromNow())
    const msgInfo = new DOMComponent("p", {classList: "message__info"}, userName, msgTime)
    const editBtn = new DOMComponent("a", {classList:"message__edit"}, "Edit")
    const edited = new DOMComponent("span", {classList: "message__edited"}, "(edited)")
    let msgText = new DOMComponent("p", textAttr, this.text)
    if (this.isEdited) {
      msgText = new DOMComponent("p", textAttr, this.text, edited)
    }
    let mainCol = new DOMComponent("div", {classList: "col s12"}, msgInfo, msgText)

    if(userSession.getUser() === this.userId) {
      mainCol = new DOMComponent("div", {classList: "col s12"}, msgInfo, editBtn, msgText)
    }
    const message = new DOMComponent("li", msgAttr, mainCol)

    return message
  }
}

export default Message