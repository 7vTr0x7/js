class fruits {
  constructor() {
    console.log(`fruits`);
  }

  info(name) {
    console.log(`fruit name : ${name}`);
  }
}

class vegitables extends fruits {
  constructor() {
    super();
    console.log("vegies");
  }

  info(name) {
    super.info(name);
    console.log(`vegies name : ${name}`);
  }
}

let ex = new vegitables();

ex.info("apple");
