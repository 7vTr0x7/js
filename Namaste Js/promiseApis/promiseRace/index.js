// promise.race takes multiple promises as an array and run all of them simultaneously
// and will return data from promise
// only promise to settles first will be returned
// if the first promise fails then it will return error
// whatever the case it first promise to resolve of reject it will return it