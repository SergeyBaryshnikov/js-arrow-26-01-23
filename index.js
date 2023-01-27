"use strict";

// 1)написати фукцію стрілку, яка приймає джерельний масив
// і повертає масив з двох значень,
// які є мінімальним і максимальним значенням джерельного масиву
// якщо джерельний масив порожній, то функція повертає порожній масив

/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const getMinMaxWay1 = (arr) => {
  arr.sort().splice(1, arr.length - 2);
  return arr;
};

/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const getMinMaxWay2 = (arr) => {
  const resultArr = [];
  arr.length === 0
    ? resultArr
    : resultArr.push(Math.min(...arr), Math.max(...arr));
  return resultArr;
};

const numbersArray = [2, 44, 5, 6, 7, 999, 0, -6];
const emptyArray = [];

console.log(getMinMaxWay1(numbersArray));
console.log(getMinMaxWay2(numbersArray));
console.log(getMinMaxWay1(emptyArray));
console.log(getMinMaxWay2(emptyArray));

// 2)написати функцію стрілку, яка приймає безліч аргументів
// і повертає результат їх множення, якщо аргументів не має - повертає null

/**
 *
 * @param  {...number} rest
 * @returns {number | null}
 */
const getMultiplicationOfValues = (...rest) =>
  rest.length === 0 ? null : rest.reduce((acc, elem) => acc * elem);

console.log(getMultiplicationOfValues(1, 2, 3));
console.log(getMultiplicationOfValues());

// 3)переписати функцію, що нижче на функцію стрілку

function askUser(question) {
  const userInput = confirm(question);
  if (userInput) {
    return "ok";
  }
  return "error";
}

/**
 *
 * @param {string} question
 * @returns {string}
 */
const askUserArrow = (question) => (confirm(question) ? "ok" : "error");

console.log(askUser("?"));
console.log(askUserArrow("?"));

// const getSumm = (...rest) =>
//   rest.length === 0 ? null : rest.reduce((acc, element) => acc + element);

// const getAverage = (...rest) =>
//   rest.length === 0
//     ? null
//     : rest.reduce((acc, element) => acc + element) / rest.length;

// console.log(getSumm(5, 10, 15));

// console.log(getAverage(5, 10, 15));
