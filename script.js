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

function scrollArrow() {
  var y = document.querySelector('#works').getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}

var Parallax = document.querySelector(".about-row");
window.addEventListener('scroll', function() {
    var offset = window.pageYOffset;
    Parallax.style.backgroundPositionY = offset * 0.14 + "px";
})

var typed = new Typed("#typewriter", {
  strings: ["", "Web Developer ^1650", "Web Designer ^1650", "Student ^1650", "Web Developer | Web Designer | Student "],
  typeSpeed: 50,
  backSpeed: 60,
  startDelay: 500,
  smartBackspace: false
});
