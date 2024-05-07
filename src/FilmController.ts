class FilmController {
  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}


/**
 * 
 * Проблемы:
 * 
 * Примитивный булев флаг. Булев флаг popupOpened используется для
 * отслеживания того, открыто всплывающее окно или нет.
 * Такой подход чреват ошибками, так как опирается на ручное управление состоянием.
 * 
 * Жесткая связь. Метод openDetails() создает новый экземпляр Popup и
 * устанавливает флаг popupOpened, который жестко привязан к классу Popup.
 * 
 * Отсутствие инкапсуляции. Флаг popupOpened открыт как публичное
 * свойство, которое может быть изменено извне класса.
 * Это нарушает инкапсуляцию и делает класс более уязвимым к внешнему вмешательству.
 * 
 */


class FilmController {
  private popup: Popup | null = null;

  openDetails() {
    this.popup = new Popup();
  }

  get isPopupOpened() {
    return!!this.popup;
  }
}