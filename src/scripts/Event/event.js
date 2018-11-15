/*
  author(s): Rachel
  purpose: defines an object that contains methods that build a single event element, render all to the page, and add edit, save and delete functionality
*/
import DOMComponent from "nss-domcomponent"
import API from "./../api"
import userSession from "./../sessionStorage"
import eventFormBuilder from "./eventForm"
import eventPage from "./eventOutput"





const domEvents = {
  //build object builds a single event object and its children
  buildEvent(object) {
    const IconMain = new DOMComponent("i", { className: "material-icons circle", textContent: "date_range" })
    const Span = new DOMComponent("span", { className: "event grey-text text-darken-1 dateText", textContent: `${object.date}` })
    const H5 = new DOMComponent("h5", { className: "grey-text nameText", textContent: `${object.name}` })
    const P = new DOMComponent("p", { className: "grey-text locationText", textContent: `${object.location}` })

    const IconEdit = new DOMComponent("i", { className: "material-icons edit", textContent: "edit" })
    const IconDelete = new DOMComponent("i", { className: "material-icons delete", textContent: "delete_forever" })
    const EditLink = new DOMComponent("a", { className: "btn-floating btn-small waves-effect waves-light" }, IconEdit)
    const DeleteLink = new DOMComponent("a", { className: "btn-floating btn-small waves-effect waves-light " }, IconDelete)
    const Div = new DOMComponent("div", { className: "secondary-content" }, EditLink, DeleteLink)

    const Event = new DOMComponent("li", { className: "collection-item avatar", id: `${object.id}` }, IconMain, Span, H5, P, Div)
    return Event
  },
  //renderEvents takes an array of event objects (from the API) and outputs to the DOM with styling for upcoming event
  renderEvents() {
    const currentUser = userSession.getUser()
    return API.getData(`events?userId=${currentUser}&_sort=date&_order=asc`).then((eventList) => {
      let events = []
      eventList.forEach((event) => {
        let eventDOM = this.buildEvent(event)
        events.push(eventDOM)
      })
      const Ul = new DOMComponent("ul", { className: "collection" }, ...events)
      const BottomSection = new DOMComponent("section", { className: "container events" }, Ul)

      BottomSection.render(".main-container")
      document.querySelectorAll(".collection-item")[0].classList.add("teal")
      document.querySelectorAll(".collection-item")[0].classList.add("lighten-4")
      document.querySelectorAll(".dateText")[0].classList.remove("grey-text")
      document.querySelectorAll(".nameText")[0].classList.remove("grey-text")
      document.querySelectorAll(".locationText")[0].classList.remove("grey-text")

    })
  },
  //edit listeners adds event listeners to the edit and delete buttons, renders a form for edit and saves edits
  editListeners() {
    const ul = document.querySelector(".collection")
    ul.addEventListener("click", (e) => {
      const button = e.target
      if (e.target.classList.contains("edit")) {
        const li = button.parentNode.parentNode.parentNode;
        const date = li.children[1]
        const name = li.children[2]
        const location = li.children[3]
        const div = document.createElement("div")
        div.setAttribute("class", "editForm")
        ul.insertBefore(div, li.nextElementSibling)
        eventFormBuilder.editFormRender(".editForm")
        const dateInput = document.querySelector("#datepicker-edit")
        const nameInput = document.querySelector("#name-edit")
        const locationInput = document.querySelector("#location-edit")
        let elems = document.querySelectorAll(".datepicker");
        let instances = M.Datepicker.init(elems, { autoClose: true, format: "yyyy-mm-dd" });
        dateInput.nextElementSibling.classList.add("active")
        nameInput.nextElementSibling.classList.add("active")
        locationInput.nextElementSibling.classList.add("active")
        dateInput.value = date.textContent
        nameInput.value = name.textContent
        locationInput.value = location.textContent
      } else if (e.target.getAttribute("id") === "saveBtn-edit") {
        e.preventDefault()
        if (button.parentNode.parentNode.parentNode.checkValidity()) {
          let editedInput = eventFormBuilder.editFormInput()
          let eventId = button.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.getAttribute("id")
          API.editData("events", editedInput, eventId)
            .then(() => eventPage())
        }
      } else if (e.target.classList.contains("delete")) {
        let eventId = button.parentNode.parentNode.parentNode.getAttribute("id")
        API.deleteData("events", eventId)
          .then(() => eventPage())
      }
    });

  }


}

export default domEvents