/*  Last full read through 27/12/2020
 *
 *##############################################
 *# svg label calc  /assets/js/svg_text_width.js
 *##############################################
 *
 */

 // Get the svg text elemnets inside .svg__labels, calulate their length and position with 768 clientWidth condition.

function svg_text_width() {
  // scren width
  const view_width = document.documentElement.clientWidth;
  // Get svg text and lines contained by .svg__labels
  const text = document.querySelectorAll('.svg__labels > .svg--text');
  const lines = document.querySelectorAll('.svg__labels > .svg--line');

  for (let i = 0; i < text.length; i++) {
    // get width of all the text labels
    const width = text[i].getComputedTextLength();
    // set up vars depending on 768 breakpoint
    if(view_width > 768 ){
      var lineLength = 100 ; // length in pixels of the drawn line
      var x_offset = 10 + width ; // offset the text label s.t. last character sits 10 px from end of line
      var y_offset = 5 ;
    } else {
      var lineLength = 70 ;
      var x_offset = 0 ; // offset the text label s.t. first character sits inline with end of line
      var y_offset = -8 ;}
      lines[i].setAttribute("stroke-dashoffset", lineLength + 'px')
      lines[i].setAttribute("stroke-dasharray", lineLength + 'px')
    if( text[i].classList.contains('trans-left')){
      lines[i].setAttribute("x2", -lineLength + 'px')
      text[i].setAttribute("x", - lineLength - x_offset + 'px');
      text[i].setAttribute("y", y_offset + 'px');
    } else {
      lines[i].setAttribute("x2", lineLength + 'px')
      text[i].setAttribute("x", lineLength + x_offset - width + 'px');
      text[i].setAttribute("y", y_offset + 'px');
    };
  };
}

svg_text_width()
