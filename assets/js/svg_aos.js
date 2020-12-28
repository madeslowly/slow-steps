// collect all the circles and bubbles so we can ani them in at 20%
var view_height = document.documentElement.clientHeight;

var svg_aos = function(e) {

  var svgs = Array.from(document.getElementsByClassName("svg__labels"));

  for (let i = 0; i < svgs.length; i++) {

    var abs_path_top = svgs[i].getBoundingClientRect().top;

    if (abs_path_top <= .8 * view_height) {
      svgs[i].classList.remove('hidden');
      svgs[i].classList.add('not-hidden');
    } else {
      svgs[i].classList.add('hidden');
      svgs[i].classList.remove('not-hidden');
    }


  }

};

window.addEventListener('scroll', _.throttle(svg_aos, 500, { leading: true, trailing: true}));
