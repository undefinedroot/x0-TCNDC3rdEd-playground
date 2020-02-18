// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(3));


const event = {
  name: 'Click',
  list: ['1', '2', '3'],
  printText() {
    console.log(`Priting for ${this.name}`);
    // arrow functions don't bind their own 'this' value, good for callbacks,
    // if you use a function() at .forEach as callback, this.name will be 'undefined'
    this.list.forEach(item => {
      console.log(`Item: ${item} for ${this.name}`);
      //this.name refers to event object and not the 'this' inside this forEach.
    });
  }
  // arrow functions doesn't bind to 'this', bad for methods.. this.name will be 'undefined'
  // printText: () => {
  //   console.log(`Priting for ${this.name}`);
  // }
};


event.printText();