'use strict';

const difference = (array1, array2) => {
    const array = [];
    for (const element of array1) {
        if (!array2.includes(element)) {
            array.push(element);
        }
    }
    return array;
}

const array1 = ["Washington", "London", "Paris", "Kyiv", "Rome", "Warsaw"];
const array2 = ["Lisbon", "Rome", "Budapest", "Sofia", "London"];
const array = difference(array1, array2);
console.log(array);

