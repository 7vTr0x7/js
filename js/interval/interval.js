let a = 0;
let id = setInterval(animaton, 100);

function animaton() {
  a = a + 10;
  if (a === 200) {
    clearInterval(id);
  }
  let target = document.getElementById("test");
  target.style.width = a + "px";
}
