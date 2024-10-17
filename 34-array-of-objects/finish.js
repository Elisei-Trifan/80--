/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const infoCars = [
  { carBrand: 'mers', price: 23000, isAvailableForSale: false },
  { carBrand: 'opel', price: 2000, isAvailableForSale: true },
  { carBrand: 'bmw', price: 30000, isAvailableForSale: false },
]

const newCar = { carBrand: 'aurus', price: 300000, isAvailableForSale: false }
infoCars.push(newCar)
console.log(infoCars)
