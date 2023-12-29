// promise.race takes array of promises and run all of them simultaneously
// and will return data from promise
// it wil wait for the first success/resolves then only it will return data of that promise
// if all of them fails then it will return aggregate error which is array of all errors