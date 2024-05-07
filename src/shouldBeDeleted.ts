if (timer.hasExpired() && !timer.isRecurrent()) {
}


/**
 * 
 * Что плохо:
 * Отрицание в условиях менее читабельны. Лучше заменить на положительный аналог
 * или задать в константе до условия и в условии использовать определенную выше константу
 */

const isOneTimer = !timer.isRecurrent();
if (timer.hasExpired() && isOneTimer) {
}