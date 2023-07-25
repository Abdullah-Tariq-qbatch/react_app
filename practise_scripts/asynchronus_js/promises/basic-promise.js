// some basic promises

const promiseFunction = (resolve, reject) => {
  let number = -1;
  if (number > 0) {
    resolve(number + ' is a Positive Number')
  } else {
    reject(number + ' is a Negative Number')
  }
}

const positiveNumber = new Promise(promiseFunction);


positiveNumber.then((res) => console.log(res)).catch((res) => console.log(res))
