import { name as userName } from "./file1.mjs"; // we can make it an alias name
import { add } from "./file1.mjs";
import { user } from "./file1.mjs";

console.log(userName);

let value = add(10, 10);
console.log(value);

let newUser = new user();
newUser.info("vTrox", 21, 20000);
