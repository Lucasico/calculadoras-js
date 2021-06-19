//keys
const keys = document.querySelectorAll('.buttons .numbers button:not(#clear)');

const clearButton = document.querySelector('#clear');

//operations
const operations = document.querySelectorAll('.buttons .operators button');

//screen
const screen = document.querySelector('.screen');

clearButton.addEventListener('click', () => (screen.innerText = '0'));

//events keys
keys.forEach((key) => {
    //add event list to event onclick
    key.addEventListener('click', () => {
        // get attribute by name
        const keyValue = key.getAttribute('data-val');

        insertValue(keyValue);
    });
});

//events operations
operations.forEach((opr) => {
    opr.addEventListener('click', () => {
        if (opr.innerText === '=') {
            const isInvalid = validOperation();
            if (!isInvalid) {
                showResult(screen.innerText);
            } else {
                screen.innerText = 'Inválido dividir por zero';
            }
        } else {
            const oprValue = opr.getAttribute('data-val');
            insertValue(oprValue);
        }
    });
});

const insertValue = (value) => {
    if (screen.innerText.length > 14) return;

    replaceClearButtonValue();

    const formattedValue = value === ',' ? '.' : value;
    screen.innerText = screen.innerText + formattedValue;
};

const showResult = (operation) => (screen.innerText = eval(operation));

const validOperation = () => {
    const sizeScreenItem = screen.innerText.length;
    const penultimateItemToBeDisplay = screen.innerText[sizeScreenItem - 2];
    const lastItemToBeDisplay = screen.innerText[sizeScreenItem - 1];
    let error = false;

    if (penultimateItemToBeDisplay === '/' && lastItemToBeDisplay === '0') {
        error = true;
    }

    return error;
};

const replaceClearButtonValue = () => {
    if (screen.innerText && screen.innerText[0] === '0') {
        screen.innerText = screen.innerText.substr(1);
    }
};
