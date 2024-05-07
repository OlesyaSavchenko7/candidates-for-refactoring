enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;

  switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
  }

  return area;
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54


/**
 * 
 * Что плохо:
 * 
 * Функция использует параметр radiusOrSide, который может быть либо радиусом,
 * либо длиной стороны. Это может запутать и привести к ошибкам.
 * 
 * В функции есть избыточный код. Например, дефолтный вариант можно ретернить в switch
 * 
 */


/**
 * 
 * Улучшения:
 * 
 * Определены отдельные интерфейсы Circle и Square, специфичные для конкретной фигуры.
 * 
 * Функция calculateArea теперь принимает единственный аргумент Shape, который
 * может быть либо кругом, либо квадратом.
 * 
 * Код в функции более удобный для понимания
 * 
 */

enum ElementType {
  circle = 'circle',
  square = 'square',
}

interface Circle {
  type: ElementType.circle;
  radius: number;
}

interface Square {
  type: ElementType.square;
  sideLength: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case ElementType.circle:
      return Math.PI * Math.pow(shape.radius, 2);
    case ElementType.square:
      return Math.pow(shape.sideLength, 2);
    default:
      return 0;
  }
}

const circle: Circle = {
  type: ElementType.circle,
  radius: 5,
};

console.log(calculateArea(circle)); // Output: 78.54
