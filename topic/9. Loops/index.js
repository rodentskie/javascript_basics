const whileLoop = () => {
  // use while loop to populate the array
  // arr should have value of [5,4,3,2,1]

  const arr = [];
  // change code below this line

  // change code above this line

  return arr;
};

const doWhileLoop = () => {
  // use do while loop to populate the array
  // arr should have value of [5,4,3,2,1,0]

  const arr = [];
  // change code below this line

  // change code above this line

  return arr;
};

const forLoop = () => {
  // loop thru arr using for loop and concatenate it into a string all elements of the array
  // comma separated
  // expected result is "5, 4, 3, 2, 1, 0"
  const arr = [5, 4, 3, 2, 1, 0];
  let str = "";

  // change code below this line

  // change code above this line

  return str;
};

const recursion = (arr, n) => {
  // loop thru arr using recursion
  // n is the counter
  // n should not exceed the length of the array
  // when n is 0 return the last element of the array
  /*
    ([1], 0) = 1;
    ([2, 3, 4], 1) = 6;
    ([2, 3, 4, 5], 3) = 14;
    
    */
  let result = 0;

  // Only change code below this line

  // Only change code above this line

  return result;
};

module.exports = {
  whileLoop,
  doWhileLoop,
  forLoop,
  recursion,
};
