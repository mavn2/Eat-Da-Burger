//Function applies event after DOM is loaded
$(document).ready( () => {
  //Code for burger form/button
  $('#submit_burg').on('click', () => {
    event.preventDefault();
    //Get new burger from text input
    const burgerName = {value: $('#burger_in').val()}
    //Send request to DB
    $.ajax('/api/burg', {
      type: "POST",
      data: burgerName
    }).then(
      location.reload()
    )
  })
})