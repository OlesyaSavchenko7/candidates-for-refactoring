function calculateArea2(radius: number): number {
  return 3.14 * radius * radius; // "волшебное число" 3.14
}

/**
 * 
 * Что плохо:
 * 
 * Жестко закодированное значение 3.14, лучше вынести в константу
 * 
 */

const PI = 3.14;

function calculateArea2(radius: number): number {
  return PI * radius * radius;
}