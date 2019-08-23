console.log("Hello! Welcome to my portfolio site");

// hamburger menu
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
function closeMenu() {
  var x = document.getElementById('myNavtoggle');
  x.className = 'navtoggle';
}
