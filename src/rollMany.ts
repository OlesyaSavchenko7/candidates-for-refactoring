const rollMany = (n: number, pins: number) => {
  for (let rollCount = 0; rollCount < n; rollCount++) {
     console.log(pins);
  }
};


/**
 * 
 * Что плохо:
 * Код можно сделать более читаемым, если вместо rollCount
 * использовать переменную i, например.
 * 
 * Название первого аргумент функции не сожедрижит смысла этой переменной.
 * Лучше переименовать с 'n' на более развернутой обозначение, например, operationCount
 */


const rollMany = (operationCount: number, pins: number) => {
  for (let i = 0; i < operationCount; i++) {
    console.log(pins);
  }
};