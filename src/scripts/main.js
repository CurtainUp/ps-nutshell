import landingPage from "./login/landing"
import getFormValues from "./listeners"
import validate from "./validate"

landingPage()

validate.existingUser({
  "email": "user@penguin.com",
  "password": "penguin"
})


