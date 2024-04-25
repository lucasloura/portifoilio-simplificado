const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoMeusProjetos = document.querySelector('.btn-meus-projetos');
const secaoProjetos = document.querySelector('.projetos');

botaoMostrarProjetos.addEventListener('click', () => {
    esconderBotao();
    mostrarMaisProjetos();
    rolarParaMaisProjetos();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
    });
}

botaoMeusProjetos.addEventListener('click', () => {
    removerDestaque();
    rolarParaProjetos();
});

function removerDestaque() {
    botaoMeusProjetos.classList.remove('destaque');
}

function rolarParaProjetos() {
    window.scrollBy(0, secaoProjetos.getBoundingClientRect().top);
}

function rolarParaMaisProjetos(){
    window.scrollBy(0, 350);
}
