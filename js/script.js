const links = document.querySelectorAll('.header-menu a');
const parametros = new URLSearchParams(location.search);
const perguntas = document.querySelectorAll('.perguntas button');
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add('ativo');
    }
}

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);

    if(elemento){
    elemento.checked = true;
    }
}

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', 'true');

}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;

    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

links.forEach(ativarLink);
parametros.forEach(ativarProduto);
perguntas.forEach(eventosPerguntas);
galeria.forEach(eventosGaleria);