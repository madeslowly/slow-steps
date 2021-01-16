navbar = document.querySelector('nav');

function navBarScroll() {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset != 0) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
};

/* load nav color if reloading and pageYOffset != 0 */
/* moved to scripts to avoid conflicts with other onloads */
/*window.onload = function() { navBarScroll() };*/

window.onscroll = function() { navBarScroll() };
