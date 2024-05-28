function imagetopage(){
    documen.getElemntByID("slide1")
}

// Get the link element by its ID
var alertLink1 = document.getElementById('offercon');
var alertLink2 = document.getElementById('supcon');
var alertLink3 = document.getElementById('multi');
var alertLink4 = document.getElementById('playstation');
var alertLink5 = document.getElementById('xbox');
var alertLink6 = document.getElementById('pc');
var alertLink7 = document.getElementById('rules');
var alertLink8 = document.getElementById('news');
var alertLink9 = document.getElementById('privace');



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
alertLink3.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink4.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink5.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink6.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink7.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink8.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});
alertLink9.addEventListener('click', function(event) {
  
  // Prevent the default action of the link
event.preventDefault();

// Show an alert when the link is clicked
alert('this page is under construction!!!');
});






document.addEventListener('DOMContentLoaded', function() {
  var openNewWindowLinks = document.querySelectorAll('.open-new-window');

  openNewWindowLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      var url = this.getAttribute("contact.html"); // Get the URL from the href attribute
      window.open(url, '_blank'); // Open URL in a new window
    });
  });
});