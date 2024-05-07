type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY
}

type TWarning = {
  type: WarningType
};

const Warning = (type: WarningType): TWarning => {
  return {
    type
  };
};


const addError = (errors: TMutableList<TWarning>) => {
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};

/**
 * 
 * Что плохо:
 * 
 * Тип TMutableList<T> выглядит избыточным, а запись TWarning[] выглядит намного лаконичней
 * 
 * Функция Warning выглядит избыточной
 * 
 * Функция addError имеет побочный эффект и в данном контексте от
 * него лучше избавиться и сделать функцию чистой
 * 
 */


/**
 * 
 * Улучшения:
 * 
 * Удалены избыточные моменты: тип TMutableList<T> и функция Warning (оборачивание в
 * объект происходит сразу в функции addError).
 * 
 * Функция addError теперь является чистой и возвращает новое
 * значение, а не мутирует переданный в неё массив
 * 
 */

enum WarningType {
  LEGACY_CODE_DEPENDENCY
}

type Warning = {
  type: WarningType;
};

const addError = (errors: Warning[] = []): Warning[] => {
  return [...errors, { type: WarningType.LEGACY_CODE_DEPENDENCY }];
};