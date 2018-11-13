
const taskListeners = {
  initialStatus() {
    let statusRadio = document.querySelectorAll(".status-radio")
    statusRadio.forEach((radio) => {
      console.log(radio)
    })
  }
}

export default taskListeners