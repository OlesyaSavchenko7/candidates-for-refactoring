function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (userData.age >= 18) {
    // Обрабатываем данные
    processUser(user);
  } else {
    // Выводим ошибку
    console.error('User is under 18');
  }
}

/**
 * 
 * Что плохо:
 * Число 18. Лучше определить в константу, чтобы код
 * стал более читаемым и удобным для сопровождения.
 * 
 * Обработка ошибок не является надежной. Простого вывода сообщения
 * об ошибке в консоль недостаточно. Лучше бросать ошибку или возвращать
 * объект ошибки.
 * 
 */

const MIN_AGE = 18;

function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (userData.age < MIN_AGE) {
    throw new Error(`User is under ${MIN_AGE}`);
  }

  // Обрабатываем данные
  processUser(user);
}