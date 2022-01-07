module.exports = function toReadable(number) {

    let stringNumber = number.toString();
    let arrayNumber = stringNumber.split('');

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

    return arrayNumber.join(' ');

}
