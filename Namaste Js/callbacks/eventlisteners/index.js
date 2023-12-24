function attachEventListener() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function ex() {
    console.log("clicked", ++count);
  });
}
attachEventListener();


// garbage collection & removeEventListeners

// event Listeners takes took much space even after execution
// when we remove an event listener all variable of it are garbage collected