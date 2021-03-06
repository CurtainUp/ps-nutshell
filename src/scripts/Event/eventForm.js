/*
  author(s): Rachel
  purpose: object contains methods to build button that reveals form, build form, and add listeners to add button and save button
*/

import Form from "./../formBuilder"
import API from "./../api"
import DOMComponent from "nss-domcomponent"
import eventPage from "./eventOutput"
import userSession from "./../sessionStorage"

//Row class by Elyse
class Row extends DOMComponent {
  constructor(...children) {
    super("div", { className: "row center" }, ...children)
  }
}


let inputs = [
  ["text", "name", "Event Name"], ["text", "location", "Location"], ["text", "datepicker-main", "Date"], ["submit", "saveBtn", "Save"]
]

let editInputs = [
  ["text", "name-edit", "Event Name"], ["text", "location-edit", "Location"], ["text", "datepicker-edit", "Date"], ["submit", "saveBtn-edit", "Save"]
]

const EventForm = new Form("Add an Event", "formContainer", inputs).build()
const editEventForm = new Form("", "editFormContainer", editInputs).build()

const mainContainer = document.querySelector(".main-container")

let Header = new DOMComponent("h2", { classList: "header center" }, "Egg-citing Events!")






const eventFormBuilder = {
  eventButtonRender() {
    const Anchor = new DOMComponent("a", { className: "waves-effect waves-light btn-large center", textContent: "Add New Event", id: "addEvent" })
    const HeadRow = new Row(Anchor)
    HeadRow.render(".main-container")
  },
  eventButtonListener() {
    let button = document.querySelector("#addEvent")
    button.addEventListener("click", e => {
      document.querySelector("#formContainer").classList.remove("hide")
      document.querySelector("#addEvent").classList.add("hide")
    })
  },
  eventFormRender() {
    mainContainer.innerHTML = null
    Header.render(".main-container")
    EventForm.render(".main-container")
    document.getElementById("datepicker-main").setAttribute("class", "datepicker")
    document.querySelector(".header").classList.add("center")
  },
  eventFormListener() {
    let button = document.querySelector("#saveBtn")
    if (!button.hasAttribute("data-listener")) {
      button.setAttribute("data-listener", "true")
      button.addEventListener("click", e => {
        if (button.parentNode.parentNode.parentNode.checkValidity()) {
          e.preventDefault()
          let eventObject = this.formInput()
          API.saveData("events", eventObject).then(() => { eventPage() })
          document.querySelector("#formContainer").classList.add("hide")
          document.querySelector("#addEvent").classList.remove("hide")
          this.resetForm()
        }
      })
    }
  },
  formInput() {
    const currentUser = userSession.getUser()
    const dateValue = document.getElementById("datepicker-main").value
    const nameValue = document.getElementById("name").value
    const locationValue = document.getElementById("location").value
    let eventObject = {
      name: nameValue,
      userId: currentUser,
      location: locationValue,
      date: dateValue
    }
    return eventObject
  },
  resetForm() {
    document.getElementById("datepicker-main").value = ""
    document.getElementById("name").value = ""
    document.getElementById("location").value = ""
  },
  editFormRender(container) {
    editEventForm.render(container)
    document.getElementById("datepicker-edit").setAttribute("class", "datepicker")
  },
  editFormInput() {
    const currentUser = userSession.getUser()
    const dateValue = document.getElementById("datepicker-edit").value
    const nameValue = document.getElementById("name-edit").value
    const locationValue = document.getElementById("location-edit").value
    let eventObject = {
      name: nameValue,
      userId: currentUser,
      location: locationValue,
      date: dateValue
    }
    return eventObject
  }
}


export default eventFormBuilder






