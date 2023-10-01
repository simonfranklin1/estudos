const filtro = document.getElementById("filtro");

const opcaoMasculina = document.querySelector("#masc");
const opcaoFeminina = document.querySelector("#fem");
const opcaoTodos = document.querySelector("#todos");



opcaoMasculina.addEventListener("click", () => {
    const selecionado = document.querySelector(".selecionado");
    selecionado.classList.remove("selecionado");

    opcaoMasculina.classList.add("selecionado");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.style.display = "block";

        if(!card.classList.contains("masculino")) {
            card.style.display = "none";
        }
    })
})

opcaoFeminina.addEventListener("click", (e) => {
    const selecionado = document.querySelector(".selecionado");
    selecionado.classList.remove("selecionado");

    opcaoFeminina.classList.add("selecionado");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.style.display = "block";

        if(!card.classList.contains("feminino")) {
            card.style.display = "none";
        }
    })
})

opcaoTodos.addEventListener("click", (e) => {
    const selecionado = document.querySelector(".selecionado");
    selecionado.classList.remove("selecionado");

    opcaoTodos.classList.add("selecionado");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.style.display = "block";
    })   
})