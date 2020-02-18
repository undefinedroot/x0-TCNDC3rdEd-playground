const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }
      resolve(a + b);
    }, 1000);
  });
};

// async-await simplifies,
// instead of using promise-chaining
// you still have to use promises in
// creating your own functions,
// and such methods used by async-await
// async returns a promise
// await executes a function that returns a promise
// await requires to have async
// use of async-await eliminates
// promise chaining.
const doWork = async () => {
  const sum1 = await add(1, 99);
  const sum2 = await add(sum1, 50);
  const sum3 = await add(sum2, -3);
  return sum3;
};

doWork()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });