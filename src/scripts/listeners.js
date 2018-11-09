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
    formValuesObj[input.firstElementChild.id] = input.firstElementChild.value
  })
  return formValuesObj
}


/*
example of how we would attach the event listener to a form and pass the current target of the event to
the getFormValues function. This example consoles the object that would be returned from the function
*/
let form = document.querySelector("form").addEventListener("click", (e) => {
  let newsValues = getFormValues(e.currentTarget)
  console.log("object to post", newsValues)
})

export default getFormValues