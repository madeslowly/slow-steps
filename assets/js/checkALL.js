// Check other options if all is checked
// This needs to be made more generic
function checkAll() {
  var videoCall = document.getElementById("Video-call");
  var phone = document.getElementById("phone");
  var any = document.getElementById("Any");
  if (any.checked == true ) {
    videoCall.checked = true;
    phone.checked = true;
  } else {
    videoCall.checked = false;
    phone.checked = false;
  }
}
