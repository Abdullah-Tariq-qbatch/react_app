// Basic example of Callback function

let functionA = (name) => {
  console.log("Hello " + name);
};

function functionB(name, functionA) {
  console.log("Welcome to Callback World");
  functionA(name);
};

functionB("Abdullah", functionA);
