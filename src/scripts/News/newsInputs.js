// Skeleton used to create all News related forms
let newsInputs = {
  // Array used to build Add Article form
  articleInputs: [
    ["text", "title", "Title"],
    ["text", "summary", "Summary"],
    ["url", "url", "URL"],
    ["submit", "formSubmit", "submit"],
    ["button", "back-button", "back"]
  ],
  // Array used to build Edit form
  editInputs: [
    ["text", "edit-title", "Title"],
    ["text", "edit-summary", "Summary"],
    ["url", "edit-url", "URL"],
    ["submit", "edit-formSubmit", "submit"],
    ["button", "edit-back-button", "back"]]
}

export default newsInputs