import DOMComponent from "nss-domcomponent"
import Form from "./../formBuilder"

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

let taskInputs = [
  ["text", "task-name", "To Do:"],
  ["text", "datepicker", "Complete By:"]
]
