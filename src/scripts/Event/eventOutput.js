/*
  author(s): Rachel
  purpose: takes individual event elements and builds output fragment for entire event section
*/

import eventFormBuilder from "./eventForm"
import domEvents from "./event"



const mainContainer = document.querySelector(".main-container")



const eventPage = () => {
  //clear all contents, render add new event button to first section render existing events to second section, add event listener
  mainContainer.innerHTML = ""
  eventFormBuilder.eventFormRender()
  let elems = document.querySelectorAll(".datepicker");
  let instances = M.Datepicker.init(elems, { autoClose: true, format: "yyyy-mm-dd" });
  document.querySelector("#formContainer").setAttribute("class", "hide")
  domEvents.renderEvents().then(() => {domEvents.editListeners()})
  // eventFormBuilder.eventFormListener()
  eventFormBuilder.eventButtonRender()
  eventFormBuilder.eventButtonListener()
}

export default eventPage