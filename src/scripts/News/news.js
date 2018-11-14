/*
  author(s): Elyse
  purpose: defines a class that builds a single news element
*/
import DOMComponent from "nss-domcomponent"
import moment from "moment"
class News {
  constructor(article) {
    this.title = article.title,
    this.summary = article.summary,
    this.timestamp = article.timestamp
    this.url = article.url
    this.id = article.id
  }

  // function within News class to create DOM component for saved news articles and renders it to the DOM.
  //TO DO: Break out render to a function that processes ALL news fetched from API
  buildNewsElement() {
    let newsIcon = new DOMComponent("i", { classList: "material-icons circle" }, "subtitles")
    // TO DO: Find a way to dynamically add link to title text
    let newsTitle = new DOMComponent("span", { classList: "title" }, `<a href=${this.url}>${this.title}</a>`)
    let newsSummary = new DOMComponent("p", { classList: "summary" }, this.summary)
    let newsTime = new DOMComponent("p", { classList: "time" }, moment(`${this.timestamp}`).format("MM-DD-YYYY"))
    // let newsEdit = new DOMComponent("button", { classList: "edit-button btn-small waves-effect waves-light"}, "Edit")
    let newsDelete = new DOMComponent("button", { classList: "delete-button btn-small waves-effect waves-light"}, "Delete")
    let newsSection = new DOMComponent("li", { classList: "collection-item avatar", id: this.id }, newsIcon, newsTitle, newsSummary, newsTime, newsDelete)
    return newsSection
  }
}

export default News