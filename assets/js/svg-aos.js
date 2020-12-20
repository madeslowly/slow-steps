// collect all the circles and bubbles so we can ani them in at 0%

window.addEventListener("scroll", function(e) {

  var fades = Array.from(document.getElementsByClassName('svg--markers'));

  var transLeft = Array.from(document.getElementsByClassName('svg--text trans-left'));

  var transRight = Array.from(document.getElementsByClassName('svg--text trans-right'));

  var view_height = document.documentElement.clientHeight;

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
