class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return a / b;
  }
}


/**
 * 
 * Что плохо:
 * 
 * Жесткая связь: Класс не является гибким и не может быть легко
 * расширен для поддержки новых операций или различных типов вычислений.
 * 
 */



/**
 * 
 * Улучшения
 *
 * Класс Calculator отделен от конкретных арифметических операций, что
 * позволяет добавлять или удалять операции, не изменяя класс.
 * 
 * Обработка ошибок: Класс обеспечивает лучшую обработку ошибок,
 * выбрасывая ошибку при попытке выполнить неподдерживаемую операцию.
 * 
 */

interface Operation {
  (a: number, b: number): number;
}

class Calculator {
  private operations: { [key: string]: Operation } = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  public calculate(operation: string, a: number, b: number): number {
    if (!this.operations[operation]) {
      throw new Error(`Неподдерживаемая операция: ${operation}`);
    }
    return this.operations[operation](a, b);
  }
}


/**
 * 
 * Еще вариант
 * 
 * Если хотелось просто объеденить функции в одном классе,
 * то можно сделать все функции статичными.
 * 
 * Как результат, функции объеденены в класе,
 * имеем к ним достпуп без создания нового экземпляра
 * 
 */

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    return a / b;
  }
}