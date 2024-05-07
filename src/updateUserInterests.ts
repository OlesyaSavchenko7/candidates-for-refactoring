const updateUserHandle = (handle) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      handle,
    }),
  });
};

const updateUserInterests = (interestUUIDs) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/interests`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      interestUUIDs,
    }),
  });
};


/**
 * 
 * Что плохо:
 * Дублируйщися код в функциях, связанный с токеном и авторизацией
 * 
 * Смешивание разных зон ответственности в одно функции: и проверка залогинен ли пользователь и
 * вызов метода
 */



// Вариант 1
/**
 * В этом варианте выделила отдельную функцию authenticate,
 * которая проверяет, вошел ли пользователь в систему, и возвращает
 * заголовки аутентификации и токен, если это так.
 * Таким образом, мы можем повторно использовать логику аутентификации в обеих функциях.
 */
const authenticate = () => {
  if (!isLoggedIn()) {
    toLoginPage();
    return {};
  }
  const token = getToken();
  const headers = getHeaders(token);
  return { headers, token };
};


const updateUserHandle = (handle) => {
  const { headers } = authenticate();
  if (!headers.token) return;
  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ handle }),
  });
};

const updateUserInterests = (interestUUIDs) => {
  const { headers } = authenticate();
  if (!headers.token) return;
  return fetch(`${domain}/v1/users/interests`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ interestUUIDs }),
  });
};


/**
 * 
 * Вариант 2: Использовать функцию высшего порядка (HOF)
 * 
 * В этом варианте определяем функцию withAuthentication,
 * которая принимает функцию в качестве аргумента и возвращает новую функцию,
 * которая оборачивает исходную функцию логикой аутентификации
 * 
 * Затем используем эту HOF для создания функций updateUserHandle и updateUserInterests.
 */

const withAuthentication = (fn) => {
  return (...args) => {
    if (!isLoggedIn()) {
      toLoginPage();
      return;
    }
    const token = getToken();
    const headers = getHeaders(token);
    return fn(headers,...args);
  };
};

const updateUserHandle = withAuthentication((headers, handle) => {
  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ handle }),
  });
});

const updateUserInterests = withAuthentication((headers, interestUUIDs) => {
  return fetch(`${domain}/v1/users/interests`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ interestUUIDs }),
  });
});
