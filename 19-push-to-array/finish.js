/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
const array = ['hello', 1, 2, null]
array.push(6, 8, { name: 5, age: 29 })
console.log(array.length)
