let number1 = document.getElementById('number1-input')
let number2 = document.getElementById('number2-input')

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDiversion = document.getElementById('buttonDiversion');





function sum() {
    alert(Number(number1.value) + Number(number2.value))
}
function minus() {
    alert(Number(number1.value) - Number(number2.value))
}
function multiply() {
    alert(Number(number1.value) * Number(number2.value))
}
function diversion() {
    alert(Number(number1.value) / Number(number2.value))
}

buttonPlus.addEventListener('click', sum)
buttonMinus.addEventListener('click', minus)
buttonMultiply.addEventListener('click', multiply)
buttonDiversion.addEventListener('click', diversion)
