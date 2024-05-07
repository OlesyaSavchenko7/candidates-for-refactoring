function processOrder(item: unknown, isExpress: boolean) {
  // Логика обработки заказа с учетом экспресс-доставки
  if (isExpress) {
    // Логика для экспресс-доставки
  } else {
    // Логика для стандартной доставки
  }
}


/**
 * 
 * Что плохо:
 * unknown тип. Параметр item имеет тип unknown, что затрудняет понимание и поддержание кода.
 * 
 * Не маштабируемость кода. Если появится какой-то третий тип доставки (на дом, самовывоз и тд),
 * локигу кода придется менять
 * 
 */

/**
 * 
 * Улучшения:
 * 
 * Сделанe enum для видов доставки, который в последствии может легко и быстро
 * расширяться
 * 
 * Определен тип заказа
 * 
 * Теперь функция processOrder легко расширить при появлении нового вида доставки
 * 
 */

enum DeliveryType {
  EXPRESS,
  STANDARD
}

interface OrderItem {
  id: number;
  name: string;
  //...
}

function processOrder(item: OrderItem, deliveryType: DeliveryType): void {
  switch (deliveryType) {
    case DeliveryType.EXPRESS:
      processExpressOrder(item);
      break;
    case DeliveryType.STANDARD:
      processStandardOrder(item);
      break;
    default:
      throw new Error(`Неподдерживаемый тип доставки: ${deliveryType}`);
  }
}

function processExpressOrder(item: OrderItem): void {
  // логика для экспресс-доставки
}

function processStandardOrder(item: OrderItem): void {
  // логика для стандартной доставки
}