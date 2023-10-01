const carrossel = () => {
    const imagens = document.querySelectorAll(".img");
    const botoes = document.querySelectorAll(".botao");
    
    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            const botaoSelecionado = document.querySelector(".selecionado");
            botaoSelecionado.classList.remove("selecionado");
    
            botao.classList.add("selecionado");
    
            trocarImagem();
    
            mostrarImagem(indice);
        })
    })

    const trocarImagem = () => imagens.forEach((imagem) => imagem.classList.add("hidden"));

    const mostrarImagem = (indice) => imagens[indice].classList.remove("hidden");
}

carrossel();