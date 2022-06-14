function colorYellow() {
  document.body.style.backgroundColor = "yellow";
  alert("background color will change into Yellow");
}
// color blue button
const buttonBlue = document.getElementById("colorBlue");
buttonBlue.onclick = colorBlue;
function colorBlue() {
  document.body.style.backgroundColor = "blue";
  alert("background color will change into blue");
}
// hotpink color button
const hotPinkButton = document.getElementById("color-hotpink");
hotPinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});
// goldenRod color button
document
  .getElementById("color-goldenRod")
  .addEventListener("click", function() {
    document.body.style.backgroundColor = "goldenRod";
  });
