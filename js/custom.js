// Forgive me father for I have sinned

$(document).ready(changeColor);
$(window).on('hashchange', changeColor)

function changeColor() {
  var hash = window.location.hash;
  switch (hash) {
    case '#speakers':
    case '#schedule':
      $('ul.menu').css('color', '#000');
      break;
    default:
      $('ul.menu').css('color', '#fff');
  }
}
