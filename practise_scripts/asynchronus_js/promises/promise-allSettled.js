const sum1 = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => resolve(a + b), 3000)
  })
}

const sum2 = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => resolve(a + b), 4000)
  })
}

const sum3 = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => resolve(a + b), 6000)
  })
}

let s1 = sum1(1, 2);
let s2 = sum2(3, 4);
let s3 = sum3(9, 7);

Promise.allSettled([s1, s2, s3]).then((results) => results.forEach((result) => console.log(result.status)));
