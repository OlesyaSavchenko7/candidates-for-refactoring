const match = rawHeaderLine.match(headerPattern);

headers.set(match[1].toLowerCase(), match[2]);


/**
 * Что плохо:
 * 
 * Предполагается, что функция match всегда будет возвращать совпадение,
 * что может быть не так. Если функция match возвращает null, то
 * при попытке получить доступ к match[1] и match[2] код выдаст ошибку.
 * 
 */


const headerMatch = rawHeaderLine.match(headerPattern);

if (headerMatch) {
  const headerName = headerMatch[1].toLowerCase();
  const headerValue = headerMatch[2];
  headers.set(headerName, headerValue);
} else {
  throw new Error(`Некорректная строка: ${rawHeaderLine}`);
}