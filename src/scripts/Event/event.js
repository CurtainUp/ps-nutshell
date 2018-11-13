/*
  author(s): Rachel
  purpose: defines a function that builds a single event element
*/
import DOMComponent from "nss-domcomponent"





const buildEvent = (object) => {
  const IconMain = new DOMComponent("i", { className: "material-icons circle", textContent: "date_range" })
  const Span = new DOMComponent("span", { className: "event grey-text text-darken-1", textContent: `${object.date}` })
  const H5 = new DOMComponent("h5", { textContent: `${object.name}` })
  const P = new DOMComponent("p", { textContent: `${object.location}` })

  const IconEdit = new DOMComponent("i", { className: "material-icons", textContent: "edit" })
  const IconDelete = new DOMComponent("i", { className: "material-icons", textContent: "delete_forever" })
  const EditLink1 = new DOMComponent("a", { className: "btn-floating btn-small waves-effect waves-light" }, IconEdit)
  const EditLink2 = new DOMComponent("a", { className: "btn-floating btn-small waves-effect waves-light" }, IconDelete)
  const Div = new DOMComponent("div", { className: "secondary-content" }, EditLink1, EditLink2)

  const Event = new DOMComponent("li", { className: "collection-item avatar" }, IconMain, Span, H5, P, Div)
  return Event
}

export default buildEvent