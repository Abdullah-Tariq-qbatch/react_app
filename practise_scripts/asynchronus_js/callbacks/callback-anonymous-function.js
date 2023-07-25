// instead of creating a named function we can use anonymous function

function functionA(userName, sayHello) {
  sayHello();
  console.log(userName);
}


functionA("Abdullah", () => {console.log('Hello')});

functionA("Abdullah", function() {console.log('Hello')});
