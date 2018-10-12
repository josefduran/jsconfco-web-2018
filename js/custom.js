// Forgive me father for I have sinned

$(document).ready(changeColor);
$(window).on('hashchange', changeColor)
$('html,body').on('DOMMouseScroll mousewheel scroll touchmove', function (event) {
  var scroll = $('.slide.selected .content').scrollTop();
  console.log('sara', scroll);
  if (scroll >= 200) {
    $("nav.top").removeClass("transparent").addClass("blue-panel");
  } else {
    $("nav.top").removeClass("blue-panel").addClass("transparent");;
  }
});

function changeColor() {
  var hash = window.location.hash;
  switch (hash) {
    case '#speakers':
    case '#schedule':
    case '#organizers':
      $('ul.menu').css('color', '#000');
      $('blue-panel').css('background', '#ea5c5c8f')
      break;
    default:
      $('ul.menu').css('color', '#fff');
  }
}
