/*
  author(s): Elyse
  purpose: Clears the main container before loading each section.
*/

function clear(element) {
  if (element) {
    document.querySelector(element).innerHTML = null
  } else {
    document.querySelector(".main-container").innerHTML = null
  }
}


export default clear