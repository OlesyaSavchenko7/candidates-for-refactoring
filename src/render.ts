const render = (size: number) => {
  const html = new StringBuffer('<hr');

  if (size > 0) {
    html
      .append(' size="')
      .append(size + 1)
      .append('"');
  }

  html.append('>');

  return html.toString();
};

/**
 * 
 * Что плохо:
 * Число 1. Лучше определить его в константу, чтобы код
 * стал более читаемым и удобным для сопровождения.
 * 
 * Код можно написать проще и лаконичней
 * (Как я поняла StringBuffer это класс из Java, с ней уже давно не работала.
 * В решении ипользовала только js)
 * 
 */

const SIZE_ATTRIBUTE_INCREMENT = 1;

const render = (size: number) => {
  const html = `<hr${size > 0? ` size="${size + SIZE_ATTRIBUTE_INCREMENT}"` : ''}>`;
  return html;
};