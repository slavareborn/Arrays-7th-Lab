'use strict';

const removeElement = (array, item) => {
  for (let x in array) {
    if(array[x] === item) {
      array.splice(x, 1)
    }
  }
};

const array = ["Washington", "London", "Paris", "Kyiv", "Rome", "Warsaw"];
removeElement(array, "Warsaw");
removeElement(array, "Washington");
console.log(array);