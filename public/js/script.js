//Function applies event after DOM is loaded
console.log('testing script')

$(document).ready( () => {

  //Code for burger form/button
  $('#submit_burg').on('click', () => {
    event.preventDefault()
    const burgerName = $('#burger_in').val()
    console.log(burgerName)
  })
})