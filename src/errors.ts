const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  return response.status === 503;
};


/**
 * 
 * Что полохо:
 * 
 * Статус 503 указывается напрямую, а не задан в константах
 * как, например, HttpStatusCode.FORBIDDEN_403
 * 
 * В функцию передаются значения, которые не используется целиком (response).
 * А используется только поле status. По принципам SOLID это не лучшее решение.
 * Функция должна зависеть только от параметров, которые она действительно использует
 * 
 */


/**
 * 
 * Улучшения:
 * 
 * Вместо 503 используется константа HttpStatusCode.UNAVAILABLE_503
 * 
 * Передается только поле status, которое явно используется в функциях
 */

const hasNotFoundStatus = (status: number) => status === HttpStatusCode.NOT_FOUND_404;

const hasForbiddenStatus = (status: number) => status === HttpStatusCode.FORBIDDEN_403;

const hasServiceUnavailableStatus = (status: number) => status === HttpStatusCode.UNAVAILABLE_503;
