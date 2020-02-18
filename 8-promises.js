const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

// add(1, 2)
//   .then(sum => {
//     console.log(sum);
//     add(sum, 1).then(sum2 => {
//       console.log(sum2);
//     }).catch(e => {
//       console.log('error', e);
//     });
//   }).catch(e => {
//     console.log('error', e);
//   });

// promise chaining
add(1, 1)
  .then(sum => {
    console.log(sum);
    return add(sum, 1);
  })
  .then(sum2 => {
    console.log(sum2);
  })
  .catch(e => {
    console.log('error', e);
  });










// const isFail = true;

// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (!isFail) {
//       resolve([4, 5, 3]);
//     } else {
//       reject('failed');
//     }
//   }, 1000);
// });

// doWorkPromise.then(result => {
//   console.log(result);
// }).catch(e => {
//   console.log(e);
// });

/**
 *       pending
 *          ||
 *          /\
 *fulfilled   rejected
 */