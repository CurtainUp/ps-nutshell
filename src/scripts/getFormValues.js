/*
  author(s): Nolan
  purpose: module contains a function for adding event listeners
*/

// callback function for form submit event listeners
let getFormValues = (target) => {
  /*
  target = current target(form which contains the button being clicked/submitted)
  set value of formDivs to an iterable node list of all input fields
  */
  let formDivs = target.querySelectorAll(".input-field")
  // create object to return
  let formValuesObj = {}

  // iterate through nodelist and assign each input id as the key and the input value as the value in the object
  formDivs.forEach((input) => {
    let element = input.querySelector("input")
    if(element) {
      formValuesObj[element.id] = element.value
    }
  })
  return formValuesObj
}

export default getFormValues