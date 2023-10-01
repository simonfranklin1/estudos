/*const inputBusca = document.getElementById("busca");
const botaoBuscar = document.getElementById("btn-busca");

let valorDaBusca;


inputBusca.addEventListener("keyup", (e) => {
    const busca = e.target.value;

    if(inputBusca.value.length === 0) {
        buscar("");
    }

    valorDaBusca = busca;
});

botaoBuscar.addEventListener("click", () => {
    buscar(valorDaBusca);
})

const buscar = (busca) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const tituloCard = card.querySelector("h3").innerText.toLowerCase().normalize("NFD");

        const buscaNormal = busca.toLowerCase();
        card.style.display = "block";
        
        if(!tituloCard.includes(buscaNormal)) {
            card.style.display = "none"
        }
    });
};*/


const inputBusca = document.getElementById("busca");


const buscar = (busca) => {
    const cards = document.querySelectorAll(".card");
    const buscanormalizada = busca.toLowerCase();

    cards.forEach((card) => {
        const titulo = card.querySelector("h3").innerText.toLowerCase(); // normalize("NFD") para retirar os acentos

        card.style.display = 'block';

        if(!titulo.includes(buscanormalizada)) {
            card.style.display = 'none';
        }
    })

}

inputBusca.addEventListener("keyup", (e) => {
    const busca = e.target.value;

    buscar(busca);
});