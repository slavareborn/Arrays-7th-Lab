'use strict';

const unique = (array) => {
    const result = [];
    for (const element of array) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }
    return result;
}

const array = ["Washington", "Washington", "Washington",  "London", "London",  "Paris", "Kyiv", "Kyiv", "Kyiv", "Rome", "Warsaw"];
const result = unique(array);
console.log(result);
console.log(array);
