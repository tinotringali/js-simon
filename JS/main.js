'use strict';

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

setTimeout(htmlElement, 3000);
function htmlElement() {
    number.innerHTML = '';
}

function NumberFor() {
    for (let i = 0; i < 5; i++) {
        let numbers = randomNumber(100);
        randomArray.push(numbers);
        console.log(numbers);
    }
}

setTimeout(inputUser, 3100);
function inputUser() {
    const correct = [];
    const wrong = [];
    let arrayUser = [];
    for (let i = 0; i < 5; i++) {
        let inputPlayer = Number(prompt('Quanti numeri ricordi? Inseriscili:'));
        arrayUser.push(inputPlayer);
        console.log(arrayUser);
    }

    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray.includes(arrayUser[i])) {
            correct.push(arrayUser[i]);
        } else {
            wrong.push(arrayUser[i]);
        }
    }
    result.innerHTML = `Hai inserito correttamente ${correct.length} numeri, eccoli: ${correct}`;
    return correct;
}

const randomArray = [];
const number = document.getElementById('number');
const result = document.getElementById('result');
NumberFor()
number.innerHTML = randomArray;