/*
  author(s): Rachel
  purpose: takes individual event elements and builds output fragment for entire event section
*/

import eventFormBuilder from "./eventForm"
import buildEvent from "./event"
import DOMComponent from "nss-domcomponent"
import API from "./../api"

const mainContainer = document.querySelector(".main-container")

const eventPage = () => {
  //clear all contents, render add new event button to first section render existing events to second section, add event listener
  mainContainer.innerHTML = ""
  eventFormBuilder.eventFormRender()
  document.querySelector("#formContainer").setAttribute("class", "hide")
  eventFormBuilder.eventFormListener()
  eventFormBuilder.eventButtonRender()
  eventFormBuilder.eventButtonListener()

  API.getData("events").then((eventList)=> {
    let events = []
    eventList.forEach((event)=> {
      let eventDOM = buildEvent(event)
      events.push(eventDOM)
    })
    const Ul = new DOMComponent("ul", {className: "collection"}, ...events)
    const BottomSection = new DOMComponent("section", {className: "container events"}, Ul)

    BottomSection.render(".main-container")
  })




}

export default eventPage

