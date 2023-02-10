"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payPerMonth =
    creditBody *
    (percentPerMonth +
      percentPerMonth / ((1 + percentPerMonth) ** countMonths - 1));
  let totalTest = payPerMonth * countMonths;
  let result = Number(totalTest.toFixed(2));
  if (isNaN(percent)) {
    return (result = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (isNaN(Number(contribution))) {
    return (result = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  // if (isNaN(Number(amount))) {
  //   return (result = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  // }

  return result;
}
