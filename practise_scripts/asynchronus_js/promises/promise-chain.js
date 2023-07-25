const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b)
  })
}

sum(1,2)
.then((sum1) => {
  return sum(3, sum1)
})
.then((sum2) => {
  return sum(4, sum2)
})
.then((sum3) => {
  return sum(5, sum3)
})
.then((sum4) => {
  return sum(6, sum4)
})
.then((sum5) => {
  console.log(sum5)
})
