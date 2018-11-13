/*
  author(s): Rachel
  purpose: object contains methods to build form and add listener that saves input and fetches all events
*/

import Form from "./../formBuilder"
import API from "./../api"
import DOMComponent from "nss-domcomponent"


let inputs = [
  ["text", "name", "Event Name"], ["text", "location", "Location"], ["text", "datepicker", "Date"], ["submit", "saveBtn", "Save"]
]

const EventForm = new Form("Save an Event", "formContainer", inputs).build()

const mainContainer = document.querySelector(".main-container")



const eventFormBuilder = {
  eventButtonRender() {
    const Icon = new DOMComponent("i", { className: "material-icons", textContent: "add", id: "addEvent" })
    const Anchor = new DOMComponent("a", { className: "btn-floating btn-large waves-effect waves-light red" }, Icon)
    const H6 = new DOMComponent("h6", { id: "addEvent", textContent: "Add New Event" }, Anchor)
    H6.render(".main-container")
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
    EventForm.render(".main-container")
    document.getElementById("datepicker").setAttribute("class", "datepicker")
    document.querySelector(".header").setAttribute("class", "center")
  },
  eventFormListener() {
    let button = document.querySelector("#saveBtn")
    button.addEventListener("click", e => {
      e.preventDefault()
      let eventObject = this.formInput()
      API.saveData("events", eventObject)
      // .then(()=> {API.getData("events")}).then(()=> {/*render*/})
      document.querySelector("#formContainer").classList.add("hide")
      document.querySelector("#addEvent").classList.remove("hide")
    })
  },
  formInput() {
    let dateValue = document.getElementById("datepicker").value
    let nameValue = document.getElementById("name").value
    let locationValue = document.getElementById("location").value
    let eventObject = {
      name: nameValue,
      location: locationValue,
      date: dateValue
    }
    return eventObject
  }
}


export default eventFormBuilder






