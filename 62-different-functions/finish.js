/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// // We can assign new value
// firstFunction = '123'
// console.log(firstFunction)

// // Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)

function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}

console.log(firstFunction(1, 5))
console.log(secondFunction(1, 5))
