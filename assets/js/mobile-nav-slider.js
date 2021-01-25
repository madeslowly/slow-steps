const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const brand = document.querySelector('.nav-brand');
  const navSlider = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const navBar = document.querySelector('.navbar');

  // watch for touch clicks on the burger
  burger.addEventListener('click', () => {
    // animate accordinaly
    navSlider.classList.toggle('nav-active');
    brand.classList.toggle('site__logo-active');
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
