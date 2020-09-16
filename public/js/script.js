//Function applies event after DOM is loaded
$(document).ready( () => {
  //Code for burger form/button
  $('#submit_burg').on('click', (event) => {
    event.preventDefault();
    //Get new burger from text input
    const burgerName = {value: $('#burger_in').val()}
    //Display error if text is empty
    if($('#burger_in').val().replace(/ /g, '') === ''){
      alert('Please enter a burger!');
      return;
    }
    //Send request to DB
    $.ajax('/api/burg', {
      type: "POST",
      data: burgerName
    }).then(
      //Reload page to display new burger
      location.reload()
    );
  });

  //Code for devour button
  $('.devour').on('click', function(event) {
    //Get burger id from button data attr
    id = $(this).data('id')
    //Send request to db
    $.ajax('/api/burg/' + id, {
      type: "PUT"
    }).then(
      location.reload()
    )
  });
});