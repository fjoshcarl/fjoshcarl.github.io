function mainMenu() {
  var hamburger = document.querySelector('.hamburger');
  var mainmenu = document.querySelector('#active-hamburger');
  var mainmenus = document.querySelectorAll('.nav-top-link');

  for(var i = 0; i < mainmenus.length; i++) {
    if (mainmenu.classList.contains('fadeOut')) {
      mainmenu.classList.remove('fadeOut');
      mainmenu.classList.add('fadeIn');
      hamburger.classList.add('rotate-90');
    }
    else {
      mainmenu.classList.remove('fadeIn');
      mainmenu.classList.add('fadeOut');
      hamburger.classList.remove('rotate-90');
    }
  }
}
