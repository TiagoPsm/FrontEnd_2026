function revelar() {
    var imagem = document.querySelector(".card-img-top");

    var nome = document.querySelector("#Nome span");
    var rank = document.getElementById("Rank");
    var dataNascimento = document.getElementById("Data_Nas");
    var altura = document.getElementById("Alutra");
    var posicao = document.getElementById("Posição ");

    imagem.setAttribute("src", "_vinicius_junior.png");

    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    rank.innerHTML = "9,5";
    dataNascimento.innerHTML = "Data de Nascimento: 12/07/2000 (25 anos)";
    altura.innerHTML = "Altura: 1,76 m";
    posicao.innerHTML = "Posição: Ponta-esquerda / Atacante";

    nome.classList.remove("placeholder", "col-6");
    dataNascimento.classList.remove("placeholder", "col-4");
    altura.classList.remove("placeholder", "col-4");
    posicao.classList.remove("placeholder", "col-6");

    nome.classList.add("card-text");
    dataNascimento.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");

    document.getElementById("Nome").classList.remove("placeholder-glow");
    document.querySelector("p").classList.remove("placeholder-glow");
}