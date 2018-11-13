/*
  author(s): Elyse
  purpose: defines a class that builds a single news element
*/
import DOMComponent from "nss-domcomponent"

class News {
  constructor(title, summary, timestamp, url) {
    this.title = title,
    this.summary = summary,
    this.timestamp = timestamp
    this.url = url
  }

  // function within News class to create DOM component for saved news articles and renders it to the DOM.
  //TO DO: Break out render to a function that processes ALL news fetched from API
  buildNewsElement() {
    let newsIcon = new DOMComponent("i", { classList: "material-icons circle" }, "subtitles")
    // TO DO: Find a way to dynamically add link to title text
    let newsTitle = new DOMComponent("span", { classList: "title" }, `<a href=${this.url}>${this.title}</a>`)
    let newsSummary = new DOMComponent("p", { classList: "summary" }, `${this.summary}`)
    let newsTime = new DOMComponent("p", { classList: "time" }, `${this.timestamp}`)
    let newsEdit = new DOMComponent("button", { classList: "edit-button btn-small waves-effect waves-light"}, "Edit")
    let newsSave = new DOMComponent("button", { classList: "save-button btn-small waves-effect waves-light"}, "Save")
    let newsDelete = new DOMComponent("button", { classList: "delete-button btn-small waves-effect waves-light"}, "Delete")

    let newsSection = new DOMComponent("li", { classList: "collection-item avatar" }, newsIcon, newsTitle, newsSummary, newsTime, newsEdit, newsSave, newsDelete)
    console.log(newsSection)
    newsSection.render("ul.collection")
  }
}

//-----TEST CODE: Copy the following to main.js test functionality------------
// import News from "./News/news"
// let testNews = new News("Nutshell News", "all the happenings at nutshell HQ", "November 10, 2018", "https://www.vox.com")
// let testNews2 = new News("Second Time Around", "People want MORE nutshell", "November 11, 2018", "https://www.vox.com")

// testNews.buildNewsElement()
// testNews2.buildNewsElement()
// -----------END TEST CODE-----------------------------

// ***Testing to add multiple instances to DOM at once for after fetch.***
// ***The following code works if buildNewsElement function is outside of News class***

// let allNews = []
// allNews.push(testNews, testNews2)
// console.log(allNews)

// function buildMultipleNewsElements(prop) {
//   prop.forEach(thing => {
//     buildNewsElement(thing)
//   })
// }

// buildMultipleNewsElements(allNews)

export default News