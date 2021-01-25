let variable = 12; // this is an assignment

let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

let a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
     console.log(i);
  // here comes the code which moves the books
  // this block will be repeated bookCount times
}

for (let i = 1; i <= bookCount; i++) {
  console.log(i);
}

let bookCount1 = 20

for (let i = 0; i <= bookCount1; i++) {
  if (i % 2 === 0)
  console.log(i);
}

let add = (a, b) => {
  return a + b;  // the return keyword will give you back the result
};

console.log(add(1, 2)) // will print 3

let greeter = name => {
  console.log (`Hello, ${name}`);
}

greeter ("Mark");

let printValues = [0, 3, 6, 7, 9,];

printValues.forEach((number) => {
  console.log(number);
})

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number);
});