let target = document.getElementById("container");
function colorChanger(color,targetId) {
  target.style.backgroundColor = color;
  let m=document.getElementById(targetId);
  let y = document.getElementsByClassName("content");
  
  if (color == "#0a0a0a") {
    for (let d of y) {
      d.style.color = "white";
    }
  } else {
    for (let d of y) {
      d.style.color = "black";
    }
  }
}


