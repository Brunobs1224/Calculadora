const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

const button00 = document.getElementById("00");
const button01 = document.getElementById("01");
const button02 = document.getElementById("02");
const button03 = document.getElementById("03");
const button04 = document.getElementById("04");
const button05 = document.getElementById("05");
const button06 = document.getElementById("06");
const button07 = document.getElementById("07");
const button08 = document.getElementById("08");
const button09 = document.getElementById("09");

const buttonmais = document.getElementById("+");
const buttonmenos = document.getElementById("-");
const buttonmultiplicacao = document.getElementById("*");
const buttondivisao = document.getElementById("/");


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

const buttonlimpar1 = document.getElementById("limpar1");
const buttonlimpar2 = document.getElementById("limpar2");

let operation = document.getElementById("operation")

const buttongo = document.getElementById("=")

let operacao = "";
let result = 0;

button0.addEventListener("click", () => {
    input1.value = input1.value + 0;
});

button1.addEventListener("click", () => {
    input1.value = input1.value + 1;
});

button2.addEventListener("click", () => {
    input1.value = input1.value + 2;
});

button3.addEventListener("click", () => {
    input1.value = input1.value + 3;
});

button4.addEventListener("click", () => {
    input1.value = input1.value + 4;
});

button5.addEventListener("click", () => {
    input1.value = input1.value + 5;
});

button6.addEventListener("click", () => {
    input1.value = input1.value + 6;
});

button7.addEventListener("click", () => {
    input1.value = input1.value + 7;
});

button8.addEventListener("click", () => {
    input1.value = input1.value + 8;
});

button9.addEventListener("click", () => {
    input1.value = input1.value + 9;
});





button00.addEventListener("click", () => {
    input2.value = input2.value + 0;
});

button01.addEventListener("click", () => {
    input2.value = input2.value + 1;
});

button02.addEventListener("click", () => {
    input2.value = input2.value + 2;
});

button03.addEventListener("click", () => {
    input2.value = input2.value + 3;
});

button04.addEventListener("click", () => {
    input2.value = input2.value + 4;
});

button05.addEventListener("click", () => {
    input2.value = input2.value + 5;
});

button06.addEventListener("click", () => {
    input2.value = input2.value + 6;
});

button07.addEventListener("click", () => {
    input2.value = input2.value + 7;
});

button08.addEventListener("click", () => {
    input2.value = input2.value + 8;
});

button09.addEventListener("click", () => {
    input2.value = input2.value + 9;
});




buttonmais.addEventListener("click", () => {
    operacao = "+"
    operation.innerText = "+"

});
buttonmenos.addEventListener("click", () => {
    operacao = "-"
    operation.innerText = "-"
});
buttonmultiplicacao.addEventListener("click", () => {
    operacao = "*"
    operation.innerText = "*"
});
buttondivisao.addEventListener("click", () => {
    operacao = "/"
    operation.innerText = "/"
});



buttonlimpar1.addEventListener("click", () => {
    input1.value = "";
});
buttonlimpar2.addEventListener("click", () => {
    input2.value = "";
});




buttongo.addEventListener("click",() => {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    if (operacao === "+") result = number1 + number2
    if (operacao === "-") result = number1 - number2
    if (operacao === "*") result = number1 * number2
    if (operacao === "/") result = number1 / number2
    document.getElementById("resultado").innerText = result;
    });





