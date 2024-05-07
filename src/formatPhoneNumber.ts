function calculateTotalPrice(quantity, price) {
  return quantity * price;
}

function formatPhoneNumber(number) {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}


/**
 * 
 * Что плохо:
 * Отсутствие описания типов. Если функция будет использована ссо строковыми например значениями,
 * то резальтаты будет некорректным
 * 
 * Некорректное название аргумента в функции formatPhoneNumber.
 * Она имеет входной параметр под названием number,  что затрудняет понимание функции,
 * ведь функция ожидает строковое значение. Что может привести к путанице и усложнению понимания
 * 
 */

function calculateTotalPrice(quantity: number, price: number): number {
  return quantity * price;
}

function formatPhoneNumber(phone: string) {
  const codeCity = `${phone.slice(0, 3)}`;
  return `(${codeCity}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
}