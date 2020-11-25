function myFunction() {
  var color = document.body.style.background;
  if (color === "rgb(52, 58, 64)") {
    document.body.style.background = "#f4f4f4";
    document.body.style.color = "#000";
    document.body.style.transition = "all 1s";
} else {
    document.body.style.background = "#343a40";
    document.body.style.color = "#fff";
    document.body.style.transition = "all 1s";
    console.log(color);
  }
}
