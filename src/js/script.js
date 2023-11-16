document.addEventListener("DOMContentLoaded", function () {

    const listaImagens = [
        {
            nome: "1.png",
        },
        {
            nome: "2.png",
        },
        {
            nome: "3.png",
        },
        {
            nome: "4.png",
        },
        {
            nome: "5.png",
        },
        {
            nome: "6.png",
        },
        {
            nome: "7.png",
        },
        {
            nome: "8.png",
        },
        {
            nome: "9.png",
        },
        {
            nome: "10.png",
        },
        {
            nome: "11.png",
        },
        {
            nome: "12.png",
        },
        {
            nome: "13.png",
        },
        {
            nome: "14.png",
        },
        {
            nome: "15.png",
        },
        {
            nome: "16.png",
        },
        {
            nome: "17.png",
        },
        {
            nome: "18.png",
        },
        {
            nome: "19.png",
        },
        {
            nome: "20.png",
        },
    ];


    const container = document.getElementById("galeria");
    const verMaisBotao = document.getElementById("verMais");

    let indiceInicial = 0;

    const adicionarImagens = (quantidade) => {
        const indiceFinal = indiceInicial + quantidade;

        for (let i = indiceInicial; i < indiceFinal && i < listaImagens.length; i++) {
            const imagem = document.createElement("img");
            imagem.className = "imagem mb-3 w-full aspect-square object-cover";
            imagem.src = `./src/assets/img/${listaImagens[i].nome}`;
            imagem.alt = "foto da galeria";
            container.appendChild(imagem);
        }

        // Atualiza o índice inicial para a próxima chamada.
        indiceInicial += quantidade;

        // Verifica se todas as fotos foram adicionadas e oculta o botão se necessário.
        if (indiceInicial >= listaImagens.length) {
            verMaisBotao.style.display = "none";
        }
    };

    adicionarImagens(8);

    verMaisBotao.addEventListener("click", function () {
        adicionarImagens(4);
    });
});