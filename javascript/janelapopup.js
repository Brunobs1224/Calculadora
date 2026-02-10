const button = document.querySelector(".button2");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");
const buttonx = document.querySelector(".botaox");
const buttonclose = document.querySelector(".botaofechar");
const caixinha = document.querySelector(".caixinha");

button.addEventListener("click", () =>{
    popup.classList.toggle("ativo");
});

buttonx.addEventListener("click", () => {
    popup.classList.toggle("ativo");
});

buttonclose.addEventListener("click", () => {
    popup.classList.toggle("ativo");
});