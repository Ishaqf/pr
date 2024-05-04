function imagetopage(){
    documen.getElemntByID("slide1")
}

// Get the link element by its ID
var alertLink1 = document.getElementById('offercon');
var alertLink2 = document.getElementById('supcon');
// Add a click event listener to the link
alertLink1.addEventListener('click', function(event) {
  
    // Prevent the default action of the link
  event.preventDefault();

  // Show an alert when the link is clicked
  alert('this page is under construction!!!');
});
alertLink2.addEventListener('click', function(event) {
  
    // Prevent the default action of the link
  event.preventDefault();

  // Show an alert when the link is clicked
  alert('this page is under construction!!!');
});