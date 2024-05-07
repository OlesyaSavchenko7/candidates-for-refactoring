function add(a, b) {
  return a + b;
}

class Calculator2 {
  multiply(a, b) {
    return a * b;
  }
}


/**
 *
 * Что плохо:
 * 
 * Нет типов
 * Есть более короткие варианты записи функции
 * Думала, еще внести функцию add в класс, так как имееют общую сферу применения - вычесления
 * 
 */


type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;

class Calculator2 {
  multiply: Operation = (a, b) => a * b;
}