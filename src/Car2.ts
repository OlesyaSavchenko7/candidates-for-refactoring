class Car2 {
  public static readonly COLORS = ['red', 'blue', 'green'];

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.includes(color);
  }
}


/**
 * 
 * Предложения, что можно улучшить:
 * 
 * Заменить COLORS с массива на Set, если бы у нас был например какой-то большой массив.
 * Т.к. Set обеспечивает более быстрое время поиска для проверки наличия элемента.
 * 
 */