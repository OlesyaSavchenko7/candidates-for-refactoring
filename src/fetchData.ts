const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout: DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}



/**
 * 
 * Что плохо:
 * 
 * Функция fetchData тесно связана с константой DEFAULT_TIMEOUT.
 * Если значение тайм-аута по умолчанию необходимо изменить,
 * функция fetchData также должна быть обновлена.
 * В версии ниже есть возможно задавать таймаут с помощью аргументов функции,
 * но при этом сохранилось дефолтное значение
 * 
 * Отсутствие гибкости: исходный код не позволяет настраивать параметры fetch. 
 * В новой версии кода добавлен параметр options в функцию fetchData,
 * который позволяет настраивать параметры метода.
 * 
 */



interface FetchOptions {
  timeout: number;
}

const defaultFetchOptions: FetchOptions = {
  timeout: 5000,
};

function fetchData(url: string, options: FetchOptions = defaultFetchOptions) {
  fetch(url, options)
   .then((response) => console.log(response))
   .catch((error) => console.error(error));
}