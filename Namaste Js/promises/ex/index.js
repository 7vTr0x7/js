const user = fetch("https://api.github.com/user/7vTr0x7");

// there are two things in promise
// 1 . state of promise - status {pending } {fulfilled} {rejected}
// 2 . result of promise - the data promise returned

console.log(user);

user.then((data) => {
  console.log(data);
});
