let wordContainer = document.querySelector('.word-container'),
    send = document.querySelector('.send');
send.addEventListener('click', buttonClickHandler);

function buttonClickHandler(evt) {
    let words = wordContainer.value,
        amount = words.length,
        amountWithoutSpace = words.split('').filter((item) => item !== ' ' & item !== '\n').length;

    /*<--------Template-------->*/
    let wordAmount = `Кількість символів: ${amount} символів.<br>Без пробілів ${amountWithoutSpace} символів.`;
    /*<--------Template-------->*/

    let resultContainer = document.querySelector('.result-container').innerHTML = wordAmount;
}
/*Баг: 1 раз не спрацьовує коректно.*/