/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

const c = Object.keys(myObject)

console.log(c)

c.forEach((item) => {
  if (item === 'key1' || item === 'key3') {
    console.log(myObject[item])
  }
})

console.log(myObject['key10'])
