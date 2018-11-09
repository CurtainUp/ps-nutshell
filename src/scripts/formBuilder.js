/*
  Author(s): Sebastian
  Purpose: formBuilder is responsible for building the DOM components for all forms in Nutshell. Imports DOMComponent and returns methods for build, getValues, and reset.

  TODO: Add the rest of the wrapper elements that Materialize requires for output of a form.

  Usage: Paste this into main.js if you want to test it out.
  let inputs = [
    ["text", "input1", "This is Input 1"],
    ["url", "input2", "tHis is input 2"]
  ]
  let testForm = new Form("Test Form", "testForm", inputs)
  let form = testForm.build()
  form.render("body")
*/

import DOMComponent from "nss-domcomponent"


// buildFormElement creates the input and label group for a single input. It is used by Form to build each element in a form.
function buildFormElement(inputType, id, labelText) {
  let label = new DOMComponent("label", {for: id}, labelText)
  let input
  if (inputType === "select") {
    input = new DOMComponent("select", {name: id, id: id, required: true})
  } else if (inputType === "textarea") {
    input = new DOMComponent("textarea", {name: id, id: id, required: true})
  } else if (inputType === "submit") {
    input = new DOMComponent("button", {type: "submit", required: true})
  } else {
    input = new DOMComponent("input", {type: inputType, id: id, name: id, required: true})
  }

  let formElement = new DOMComponent("div", {classList: "test"}, label, input)
  return formElement
}
class Form {
  constructor(title, htmlId, inputsArr) {
    this.title = title,
    this.id = htmlId,
    this.inputs = inputsArr
  }
  // TODO: Implement form header output
  build() {
    let formElements = []
    this.inputs.forEach(input => {
      let formElement = buildFormElement(...input)
      formElements.push(formElement)
    })
    let section = new DOMComponent("section", {classList: "container", id: "formContainer"}, ...formElements)
    return section
  }

}

export default Form