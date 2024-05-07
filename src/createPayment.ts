const createPayment = (isToken: Boolean) => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};


/**
 * 
 * Что плохо:
 * 
 * Как я поняла, в функции createPayment есть отдельная часть по
 * переподключению транзакции в целом не очень связаное с созданием платежа.
 * Лучше разделить эти части
 * 
 * Можно удобнее реализовать if с return, если ниже нет дальнейшей логики,
 * для удобства чтения кода 
 * 
 */



/**
 * 
 * Улучшения:
 * 
 * Момент с переподключение транзакции вынесен в отдельный метод.
 * Функция реализована в более удобном формате
 * 
 */


const createTransaction = () => {
  const token = getUrl().slice();
  system.createTransaction(token).setTransaction();
};


const createPayment = (isToken: Boolean) => {
  if (isToken) {
    createTransaction();
    return;
  } 
  
  const cardNumber = account.getCardNumber();
  userAccount.createCardPayment(cardNumber).postTransactionToServer();
};