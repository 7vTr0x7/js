const API_URL = "https://api.github.com/user/7vTr0x7";

// fetch() => is a promise which returns ---> response Object
// response body is a readable stream
// to convert this stream to json ( response.json() )
// response.json() is a promise when is resolves it gives us a json value

const getUserData = async () => {
  const userData = await fetch(API_URL); // fetch returns promise
  const data = await userData.json();

  console.log(data);
};

getUserData();
