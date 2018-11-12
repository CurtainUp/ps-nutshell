/*
  author(s): Sebastian
  purpose: defines a class that builds a single message element
*/
import DOMComponent from "nss-domcomponent"

{
  "id": 2,
  "userId": 2,
  "text": "Don't be that kind of penguin!",
  "timestamp": "2018-11-08",
  "isEdited": true
}
class Message {
  constructor(msgObj) {
    this.id = msgObj.id
    this.userId = msgObj.userId
    this.text = msgObj.text
    this.timestamp = msgObj.timestamp
    this.isEdited = msgObj.isEdited
  }

  build() {
    const msgAttr = {
      classList: "collection-item valign-wrapper message"
    }
    const thisUserMsgAttr = {
      classList: "collectin-item valign-wrapper message message--currentUser right-align"
    }

    const userName = new DOMComponent("span", {classList:"message__username"}, `${this.userId} `)
    const msgTime = new DOMComponent("span", {classList:"message__time grey-text text-lighten-1"}, this.timestamp)
    const msgInfo = new DOMComponent("p", {classList: "message__info"}, this.timestamp, userName, msgTime)

    const msgText = new DOMComponent("p", {classList: "message__text"}, this.text)
    const mainCol = new DOMComponent("div", {classList: "col s12"}, msgInfo, msgText)
    const message = new DOMComponent("li", msgAttr, mainCol)

    return message
  }
}

export default Message