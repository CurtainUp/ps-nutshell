/*
  Author(s): Sebastian
  Purpose: formBuilder is responsible for building the DOM components for all forms in Nutshell. Imports DOMComponent and returns methods for build, getValues, and reset.
*/
import DOMComponent from "nss-domcomponent"

/*
  To use Form, create an array with the inputs you want.
  Each input is an array with [inputType, id, and labelText].
  For radio groups: ["radio-group", name, arrOfInputsArrays]

  Sample code below can be added to main.js to test
*/
// import Form from "./formBuilder"
// let inputs = [
//   ["text", "input1", "This is Input 1"],
//   ["url", "input2", "tHis is input 2"],
//   [ "radio-group", "status", [
//     ["radio", "select1", "this is input 3"],
//     ["radio", "select2", "this is input 4"]
//     ]
//   ],
//   ["submit", "formSubmit", "submit"]
// ]
// let testForm = new Form("Test Form", "testForm", inputs)
// let form = testForm.build()
// form.render("body")

class Row extends DOMComponent {
  constructor(...children) {
    super("div", {className:"row"}, ...children)
  }
}

class H extends DOMComponent {
  constructor(type, ...children) {
    super(type, {className: "header"}, ...children)
  }
}

/*
  buildFormElement creates the input and label group for a single input.
  It is used by Form to build the elements in a form.
*/
function buildFormElement(inputType, id, labelText) {
  // If radio group. Use an array of radio button elements in labelText
  if (inputType === "radio-group" && Array.isArray(labelText)) {
    let name = id
    let radios = labelText
    let radiosArr = []
    radios.forEach(radio => {
      let type = radio[0]
      let radioId = radio[1]
      let text = radio[2]
      let button = new DOMComponent("input", {type: type, name: name, id: radioId})
      let span = new DOMComponent("span", text)
      let label = new DOMComponent("label", {for: id, className: "input-field col s6 m4 l3"}, button, span)
      radiosArr.push(label)
    })

    return new Row(...radiosArr)

  } else {

    //Build the other types of inputs
    let label = new DOMComponent("label", {for: id}, labelText)
    let input

    if (inputType === "select") {
      input = new DOMComponent("select", {name: id, id: id, required: true})
    } else if (inputType === "textarea") {
      input = new DOMComponent("textarea", {name: id, id: id, required: true})
    } else if (inputType === "submit") {
      input = new DOMComponent("button", {type: inputType, className: "btn-large waves-effect waves-light"}, labelText)
    } else {
      input = new DOMComponent("input", {type: inputType, id: id, name: id, required: true})
    }

    // Combine the label and input into a single component and return it in a div.row
    let formElement = new DOMComponent("div", {className: "input-field col s12"}, label, input)
    if (inputType === "submit") {
      formElement = new DOMComponent("div", {className:"input-field col s4"}, input)
    }
    return new Row(formElement)
  }
}

class Form {
  constructor(title, htmlId, inputsArr) {
    this.title = title,
    this.id = htmlId,
    this.inputs = inputsArr
  }

  build() {
    let formElements = []
    this.inputs.forEach(input => {
      let formElement = buildFormElement(...input)
      formElements.push(formElement)
    })

    let header = new H("h3", this.title)
    let form = new DOMComponent("form", {id: this.id, className: "col s10 push-s1"}, header, ...formElements)
    let row = new Row(form)
    let section = new DOMComponent("section", {className: "container grey lighten-4", id: "formContainer"}, row)
    return section
  }

}

export default Form