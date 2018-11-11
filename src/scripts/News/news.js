/*
  author(s): Elyse
  purpose: defines a class that builds a single news element
*/

class News {
  constructor(title, summary, timestamp, url) {
    this.title = title,
    this.summary = summary,
    this.timestamp = timestamp
    this.url = url
  }

  newsBundler() {
    let newsSection = document.querySelector("ul.collection")
    newsSection.innerHTML = `<li class="collection-item avatar">
    <i class="material-icons circle">subtitles</i>
    <span class="title"><a href=${this.url}>${this.title}</a></span>
    <p>${this.summary}</p>
    <p>${this.timestamp}</p>
    </li>`
  }
}

// let testNews = new News("Nutshell News", "all the happenings at nutshell HQ",
// "RIGHT NOW", "https://www.vox.com")

// testNews.newsBundler()
export default News