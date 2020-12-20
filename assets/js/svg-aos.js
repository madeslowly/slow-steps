// collect all the circles and bubbles so we can ani them in at 0%

window.addEventListener("scroll", function(e) {

  var fades = Array.from(document.getElementsByClassName('svg--markers'));

  var transLeft = Array.from(document.getElementsByClassName('svg--text trans-left'));

  var transRight = Array.from(document.getElementsByClassName('svg--text trans-right'));

  var view_height = document.documentElement.clientHeight;

  var paths = Array.from(document.getElementsByClassName('svg--line'));


  for (let i = 0; i < paths.length; i++) {

    var pathLength = paths[i].getTotalLength();

    // Make very long dashes (the length of the path itself)
    paths[i].style.strokeDasharray = pathLength + ' ' + pathLength;

    // Offset the dashes so the it appears hidden entirely
    paths[i].style.strokeDashoffset = - pathLength;

    var abs_path_top = paths[i].getBoundingClientRect().top;

    if (abs_path_top <= .8 * view_height) {
      paths[i].classList.add('ani-in-draw');
      //paths[i].style.strokeDashoffset = pathLength * abs_path_top / view_height / .2;
    } else {
      paths[i].classList.remove('ani-in-draw');
    }
    //console.log(abs_path_top / view_height)
  }


  for (let i = 0; i < fades.length; i++) {

    var abs_fades_top = fades[i].getBoundingClientRect().top;

    if (abs_fades_top <= .8 * view_height) {
      fades[i].classList.add('ani-in-fade');
    } else {
      fades[i].classList.remove('ani-in-fade');
    }
    //console.log(abs_fades_top)
  }

  for (let i = 0; i < transLeft.length; i++) {
    var abs_transLeft_top = transLeft[i].getBoundingClientRect().bottom;

    if (abs_transLeft_top <= .8 * view_height) {
      transLeft[i].classList.add('ani-in-trans-left');
    } else {
      transLeft[i].classList.remove('ani-in-trans-left');
    }
    //console.log(abs_trans_top)
  }

  for (let i = 0; i < transRight.length; i++) {
    var abs_transRight_top = transRight[i].getBoundingClientRect().bottom;

    if (abs_transRight_top <= .8 * view_height) {
      transRight[i].classList.add('ani-in-trans-right');
    } else {
      transRight[i].classList.remove('ani-in-trans-right');
    }
    //console.log(abs_trans_top)
  }

});
