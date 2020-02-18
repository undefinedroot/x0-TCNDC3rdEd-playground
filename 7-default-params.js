const greeter = (name = 'person', age = 0) => {
  console.log(`hello ${name} age is: ${age}`);
};

greeter('x');

greeter();