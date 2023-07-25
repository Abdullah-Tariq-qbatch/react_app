const positiveNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      setTimeout( () => resolve(number + ' is a Positive Number'), 5000);
    } else {
      setTimeout( () => reject(number + ' is a Negative Number'), 5000);
    }
  })
}

function functionA() {
  positiveNumber(10).then((res) => console.log(res)).catch((res) => console.log(res));
  console.log('Independent Piece of Code in promise function');
  return;
}

console.log('test code before promise call')
functionA();
console.log('test code after promise call')

async function functionB() {
  try {
    await positiveNumber(-10);
  } catch (error) {
    console.log(error);
  }
  console.log('Independent Piece of Code in async/await')
}

console.log('test code before async/await call')
functionB();
console.log('test code after async/await call') // use await
