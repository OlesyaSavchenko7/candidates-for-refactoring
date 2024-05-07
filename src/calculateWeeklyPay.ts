function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 : 1.0 * tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);
  return straightPay + overtimePay;
}


/**
 * 
 * Что плохо:
 * 
 * Очень сложночитаемый код, нагроможденный. Нужно поразбивать над под функции
 * и затем их использовать в итоговой ф. calculateWeeklyPay
 * 
 * Жестко указаны значения 400, 1.5 и тд, лучше вынести в константу
 * 
 */

/**
 * Улучшения:
 * 
 * Принцип единой ответственности: каждая функция несет единую ответственность,
 * что делает код более модульным и легким для понимания.
 * 
 * Повысилась читаемость кода
 * 
 * Возможность повторного использования функций. Отдельные функции легче тестировать
 */


const MAX_TENTHS = 400;
const OVERTIME_RATE = 1.5;

function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate = getTenthRate();
  const tenthsWorked = getTenthsWorked();
  const { straightTime, overTime } = calculateTime(tenthsWorked);
  const straightPay = calculateStraightPay(straightTime, tenthRate);
  const overtimePay = calculateOvertimePay(overTime, tenthRate, overtime);
  return straightPay + overtimePay;
}

function calculateTime(tenthsWorked: number): { straightTime: number, overTime: number } {
  const straightTime = Math.min(MAX_TENTHS, tenthsWorked);
  const overTime = Math.max(0, tenthsWorked - straightTime);
  return { straightTime, overTime };
}

function calculateStraightPay(straightTime: number, tenthRate: number): number {
  return straightTime * tenthRate;
}

function calculateOvertimePay(overTime: number, tenthRate: number, overtime: boolean): number {
  const overtimeRate = overtime ? OVERTIME_RATE : 1.0;
  return Math.round(overTime * overtimeRate * tenthRate);
}
