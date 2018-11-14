/*
  author(s): Nolan
  purpose: defines a class that builds a single task element
*/
import DOMComponent from "nss-domcomponent"

class Task {
  constructor(props) {
    this.name = props.name
    this.dueBy = props.dueBy
    this.status = props.status
    this.id = props.id
  }

  //   <p>
  //   <label>
  //     <input name="group1" type="radio" checked />
  //     <span>Red</span>
  //   </label>
  // </p>

  buildTaskElement(targetContainer, uniqueTaskStatus) {
    let taskIcon = new DOMComponent("i", { classList: "material-icons circle" }, "storage")
    let taskTitle = new DOMComponent("span", { classList: "title" }, `${this.name}`)
    let taskDueBy = new DOMComponent("p", { classList: "time" }, `${this.dueBy}`)

    let statusInput2 = new DOMComponent("input", {
      classList: "container status-radio status-radio1",
      name: `statusRadio${uniqueTaskStatus}`,
      type: "radio"
    })
    let statusSpan2 = new DOMComponent("span", { classList: "status__radio--container container" }, "In Progress")
    let statusLabel2 = new DOMComponent("label", { classList: "container" }, statusInput2, statusSpan2)
    let statusRadioContainer2 = new DOMComponent("p", { classList: "container" }, statusLabel2)

    let statusInput3 = new DOMComponent("input", {
      classList: "container status-radio status-radio2",
      name: `statusRadio${uniqueTaskStatus}`,
      type: "radio"
    })
    let statusSpan3 = new DOMComponent("span", { classList: "status__radio--container container" }, "Done")
    let statusLabel3 = new DOMComponent("label", { classList: "container" }, statusInput3, statusSpan3)
    let statusRadioContainer3 = new DOMComponent("p", { classList: "container" }, statusLabel3)

    let statusRadioCollection = new DOMComponent("div", { classList: "container" }, statusRadioContainer2, statusRadioContainer3)

    let taskEdit = new DOMComponent("i", { classList: "edit small material-icons" }, "edit")
    let editContainer = new DOMComponent("a", { classList: " edit btn-floating btn-small waves-effect waves-light" }, taskEdit)

    let taskSave = new DOMComponent("button", { classList: "save-button btn-small waves-effect waves-light" }, "Save")

    let taskDelete = new DOMComponent("i", { classList: " delete small material-icons" }, "delete_forever")
    let deleteContainer = new DOMComponent("a", { classList: " delete btn-floating btn-small waves-effect waves-light" }, taskDelete)

    let buttonContainer = new DOMComponent("div", { classList: "secondary-content" }, editContainer, taskSave, deleteContainer)
    let taskSection = new DOMComponent("li", {
      classList: "collection-item avatar container",
      id: `task-${this.id}`
    }, taskIcon, taskTitle, taskDueBy, statusRadioCollection, buttonContainer)
    let taskCollection = new DOMComponent("ul", { classList: "collection task-collection" }, taskSection)
    taskCollection.render(targetContainer)
  }
}

export default Task