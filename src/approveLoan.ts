if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false
) {
  approveLoan();
}


/**
 * 
 * Что плохо:
 * 
 * Нагромаждение с несколькими условиями. Данный код трудно читать и поддерживать,
 * особенно если условия усложнятся со временем.
 * 
 * Логика проверки соответствия требованиям для выдачи кредита
 * смешивается с логикой одобрения кредита. Это может затруднить
 * понимание потока кода и самостоятельное тестирование
 * логики проверки соответствия требованиям.
 * 
 */


/**
 * 
 * Улучшения:
 * 
 * Создана функция isEligibleForLoan, которая инкапсулирует логику проверки того,
 * имеет ли пользователь право на получение займа. Это делает
 * код более читабельным и удобным для сопровождения. И если данную проверку
 * нужно будет использвовать в другом месте, то данную функцию легко заюзать,
 * без дублирования портянки кода
 * 
 * Строку 'employed' заменила на enum. Для удобства поддержания кода 
 * фиксированные строковые значения лучше задавать в константах
 * или например в enum, а не использовать использовать напрямую
 * 
 */

enum TEmploymentStatus {
  employed = 'employed',
}

const isEligibleForLoan  = (user: User) => {
  const isAvaibaleAge = user.age >= 18 && user.age <= 65;
  const isEmployed = user.employmentStatus === TEmploymentStatus.employed;
  const isGoodMan = user.criminalRecord === false;

  return isAvaibaleAge && isEmployed && isGoodMan;
}

if (isEligibleForLoan(user)) {
  approveLoan();
}
