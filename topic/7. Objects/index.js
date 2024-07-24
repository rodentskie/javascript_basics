// setup
const data = {
  name: "Ben Walter",
  age: 33,
  address: "Gensan City",
  "Favorite Food": "Bulalo",
  occupation: "Programmer",
};

const getName = () => {
  const name = ""; // change this line

  return name; // do not change this line
};

const getFavoriteFood = () => {
  const favFood = ""; // change this line

  return favFood; // do not change this line
};

const deconstruct = () => {
  // get address and occupation and return through deconstruct
  return "";
};

const spread = () => {
  // copy data object to info object using spread
  const info = {};

  return info; // do not change this line
};

const updatingProperty = () => {
  // change the name property in the data

  return data.name; // do not change this line
};

const lookUp = (val) => {
  let result = "";

  // Only change code below this line
  // using the val parameter as key
  // assign the value of the key to the result variable then return
  const data = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  // Only change code above this line
  return result;
};

const testForProperty = (val) => {
  // test for any property in data that must exist
  // return boolean

  return false;
};

const accessProperty = () => {
  // setup

  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  // should return the string 'maps' from the object myStorage
  return "";
};

module.exports = {
  getName,
  getFavoriteFood,
  deconstruct,
  spread,
  updatingProperty,
  lookUp,
  testForProperty,
  accessProperty,
};
