window.onload = function display_core() {

  var member = document.getElementById('teamMember');
  var core = member.classList.contains('team--core');
  core.classList.toggle('.d-none');

  console.log("hello");
};
