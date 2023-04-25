const links = document.querySelectorAll('.header-menu a');
const parametros = new URLSearchParams(location.search);
const perguntas = document.querySelectorAll('.perguntas button');

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

links.forEach(ativarLink);
parametros.forEach(ativarProduto);
perguntas.forEach(eventosPerguntas);