export let name = "vtrox";

export const add = (num1, num2) => {
  return num1 + num2;
};

export class user {
  constructor() {
    console.log("info");
  }

  info(name, age, salary) {
    console.log(`${name} ${age} ${salary}`);
  }
}
