function x() {
  for (var i = 1; i <= 5; i++) {
    // using var output will be 5 time 6
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  //   for (var i = 1; i <= 5; i++) {
  //     // using let output will be 1 to 5
  //     setTimeout(function () {
  //       console.log(i);
  //     }, i * 1000);
  //   }

  console.log("hell0");
}

// x();

// ans

function ans() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
ans();
