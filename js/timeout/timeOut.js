let tOut = setTimeout(() => {
  let target = document.getElementById("test");
  target.style.width = "200px";
}, 3000);

function stop() {
  clearTimeout(tOut);
}
