"use strict";

//Реализовать возведение в степень

/**
 * Function calculates the basse value to the power exponent
 * @param {number} base any number
 * @param {number} exponent integer
 * @returns bass values to the power exponent
 */

function pow(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / pow(base, -exponent);
  else return base * pow(base, exponent - 1);
}

console.log(pow(5, -2));

//Реализовать вывод в консоль скобок

let brackets = [];

function bracketWrapper(n) {
  if (n === 0) {
    return;
  }
  brackets.push("(");
  bracketWrapper(n - 1);
  brackets.push(")");
  return brackets;
}
bracketWrapper(3);
console.log(brackets.join("\n"));
