//asynchronous js and xml (AJAX)
const set = function () {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //   document.getElementById("demo").innerHTML = this.responseText;
      //   console.log(this.responseText);
    } else if (this.readyState === 4 && this.status === 404) {
      console.log("file not found");
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
};
