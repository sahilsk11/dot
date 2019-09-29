var radius = 30;

function setPosition(index) {
  document.getElementById(index).style.transform = "rotate(" + 24 * (index - 1) + "deg)";
}