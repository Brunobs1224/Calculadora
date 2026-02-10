const button1 = document.querySelector(".button1");
const bigbox = document.querySelector(".bigbox");
const mediumbox = document.querySelector(".mediumbox");
const buttonx = document.querySelector(".buttonx");
const buttonclose = document.querySelector(".buttonclose");

button1.addEventListener("click", () =>{
    bigbox.classList.toggle("ativo");
});
buttonx.addEventListener("click", () =>{
    bigbox.classList.toggle("ativo");
});
buttonclose.addEventListener("click", () =>{
    bigbox.classList.toggle("ativo");
});
bigbox.addEventListener("click", (e) => {
    if ((e.target === bigbox) || (e.target === mediumbox)) {
        bigbox.classList.toggle("ativo");
    }
});
/*o que é target em js ?

Curto 👍

👉 target é o elemento exato que recebeu o clique.*/
