if (!isEmpty(list)) {
  // код, если список не пуст
}


/**
 * 
 * Что плохо:
 * Отрицания менее читемы в условиях
 */


// Два варианта замены

if (isEmpty(list)) return; 
// код, если список не пуст


const isExsistData = !isEmpty(list)
if (isExsistData) {
  // код, если список не пуст
}