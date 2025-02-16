module.exports = function toReadable(number) {

    let stringNumber = number.toString();
    let arrayNumber = stringNumber.split('');

    // Заменяем все цифры словами, обозначающими цифры

    arrayNumber.forEach((element, i) => {
        switch (element) {
            case '0':
                arrayNumber[i] = 'zero';
                break;
            case '1':
                arrayNumber[i] = 'one';
                break;
            case '2':
                arrayNumber[i] = 'two';
                break;
            case '3':
                arrayNumber[i] = 'three';
                break;
            case '4':
                arrayNumber[i] = 'four';
                break;
            case '5':
                arrayNumber[i] = 'five';
                break;
            case '6':
                arrayNumber[i] = 'six';
                break;
            case '7':
                arrayNumber[i] = 'seven';
                break;
            case '8':
                arrayNumber[i] = 'eight';
                break;
            case '9':
                arrayNumber[i] = 'nine';
                break;
        }
    });

    // Заменяем десятки (кроме одного десятка)

    switch (arrayNumber[arrayNumber.length - 2]) {
        case 'two':
            arrayNumber[arrayNumber.length - 2] = 'twenty';
            break;
        case 'three':
            arrayNumber[arrayNumber.length - 2] = 'thirty';
            break;
        case 'four':
            arrayNumber[arrayNumber.length - 2] = 'forty';
            break;
        case 'five':
            arrayNumber[arrayNumber.length - 2] = 'fifty';
            break;
        case 'six':
            arrayNumber[arrayNumber.length - 2] = 'sixty';
            break;
        case 'seven':
            arrayNumber[arrayNumber.length - 2] = 'seventy';
            break;
        case 'eight':
            arrayNumber[arrayNumber.length - 2] = 'eighty';
            break;
        case 'nine':
            arrayNumber[arrayNumber.length - 2] = 'ninety';
            break;
    }

    // Добавляем слово сто

    if (arrayNumber.length === 3) {
        arrayNumber.unshift(arrayNumber[0]);
        arrayNumber[1] = 'hundred';
    }

    // Заменяем один и число на десять, одиннадцать и т. д.

    if (arrayNumber[arrayNumber.length - 2] == 'one') {
        switch (arrayNumber[arrayNumber.length - 1]) {
            case 'zero':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'ten';
                break;
            case 'one':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'eleven';
                break;
            case 'two':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'twelve';
                break;
            case 'three':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'thirteen';
                break;
            case 'four':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'fourteen';
                break;
            case 'five':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'fifteen';
                break;
            case 'six':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'sixteen';
                break;
            case 'seven':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'seventeen';
                break;
            case 'eight':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'eighteen';
                break;
            case 'nine':
                arrayNumber.pop();
                arrayNumber[arrayNumber.length - 1] = 'nineteen';
                break;
        }
    }

// Убираем непроизносящиеся нули

arrayNumber.forEach((element, i) => {
    if (element === 'zero' && arrayNumber.length !== 1) {
        arrayNumber.splice(i, 1);
    }
});

arrayNumber.forEach((element, i) => {
  if (element === 'zero' && arrayNumber.length !== 1) {
      arrayNumber.splice(i, 1);
  }
});

return arrayNumber.join(' ');
}