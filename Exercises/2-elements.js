'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

const array = ["Washington", "London", "Paris", "Kyiv", "Rome", "Warsaw"];
removeElements(array, "Warsaw", "Rome");
console.log(array);
