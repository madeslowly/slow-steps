const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const navSlider = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const navBar = document.querySelector('.navbar');

  // watch for touch clicks on the whole navbar
  navBar.addEventListener('click', () => {
    // animate accordinaly
    navSlider.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
    navLinks.forEach((link, index) => {
      if ( link.style.animation ) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinksFade 0.25s ease-in forwards ${index / 50 + 0.3 }s`
      }
    });
  });
}

navSlide();
