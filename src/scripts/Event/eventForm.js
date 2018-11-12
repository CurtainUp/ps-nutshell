import Form from "./../formBuilder"

let inputs = [
  ["text", "name", "Event Name"],["text", "location", "Location"],["date", "date", "Date"]
]

const EventForm = new Form("Save an Event", "formContainer", inputs)


export default EventForm