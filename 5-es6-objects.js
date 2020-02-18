// object property shorthand

const name = 'Test';
const userAge = 40;

const user = {
  name, age: userAge, location: 'unknown'
};

console.log(user);

// object destructuring

const product = {
  label: 'red motebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);


const transaction = (type, { label: productLabel, stock, rating = 5 } = {}) => {
  console.log(type, productLabel, stock, rating);
};

transaction('order', product);
