

type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  payment.rcCode = rcCode;
};

/**
 * 
 * Что плохо:
 * Мутация исходного объекта. Функция auth мутирует объект payment,
 * Это может привести к неожиданному поведению и усложнить понимание кода.
 * 
 */

/**
 * 
 * Улучшения:
 * Иммутабельность. Функция auth возвращает новый объект TPayment
 * с обновленным свойством rcCode, оставляя исходный объект неизменным.
 * 
 */


type TPayment = {
  amount: number;
  rcCode?: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService): TPayment => {
  const rcCode = gateway.sendAuth(payment);
  return {...payment, rcCode };
};
