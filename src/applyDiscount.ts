
// Модуль 1
function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100);
}

/**
 * 
 * Что плохо:
 * 
 * Функцию calculateTotalPrice можно написать намного проще, здесь есть избыточность кода
 * 
 * Еще функции имеют одну сферу общую - операции с деньгами
 * Можно разместить функции в одном модуле
 * 
 */



/**
 * 
 * Улучшения:
 *  
 * Функция calculateTotalPrice использует reduce для получения итоговой суммы,
 * код стал короче. Теперь функция написана с использованием декларативного подхода
 * 
 * Ниже представила два варинта объеденения функций: либо в один модуль, либо в общий класс.
 * Так будет удобней, когда функции с одной сферой применения (деньги) хранятся в одном месте,
 * проще искать и тд
 */


// Общий модуль для работы с вычеслением денежных операций
const calculateTotalPrice = (items) =>
  items.reduce((totalPrice, item) => totalPrice + item.price, 0);

const applyDiscount = (totalPrice, discountPercentage) =>
  totalPrice * (1 - discountPercentage / 100);


// Или например такой вариант объединения
export default class PriceHelper {
  static calculateTotalPrice(items) {
    return items.reduce((totalPrice, item) => totalPrice + item.price, 0);
  }

  static applyDiscount(totalPrice, discountPercentage) {
    return  totalPrice * (1 - discountPercentage / 100);
  }
}
