const doWorkCallback = callback => {
  setTimeout(() => {
    //callback('error', undefined);
    callback(undefined, [4, 5, 3]);
  }, 1000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});










// #region old code

// setTimeout(() => {
//   console.log('Two seconds are up');
// }, 2000);

// const names = ['12345', '123', '1234'];
// const shortNames = names.filter(name => name.length <= 4);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 1,
//       longitude: 2
//     };
//     callback(data);
//   }, 2000);
// };

// geocode('Test', data => {
//   console.log(data);
// });

// const add = (n1, n2, callback) => {
//   setTimeout(() => {
//     callback(n1 + n2);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });

// #endregion