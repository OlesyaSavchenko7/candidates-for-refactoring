interface Modem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  send: (c: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}


/**
 * Что плохо:
 * На сколько я поняла, тут неверные типы для ассинхронных функций
 * 
 */

interface Modem {
  dial(phoneNumber: string): Promise<void>;
  disconnect(): Promise<void>;
  send(data: string): Promise<void>;
  receive(): Promise<string>;
  getConnectedPhoneNumber(): string | null;
}
