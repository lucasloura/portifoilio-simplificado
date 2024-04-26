const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoMeusProjetos = document.querySelector('.btn-meus-projetos');
const secaoProjetos = document.querySelector('.projetos');
const combobox = document.getElementById('cmb-seletor-idiomas');

botaoMostrarProjetos.addEventListener('click', () => {
    esconder(botaoMostrarProjetos);
    mostrarMaisProjetos();
    rolarParaMaisProjetos();
});

function esconder(elemento) {
    elemento.classList.add('remover');
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
    window.scrollBy(0, 425);
}

window.onload = function() {
    const combobox = document.getElementById('cmb-seletor-idiomas');
    
    // Carregar a tradução previamente selecionada (se existir)
    const idiomaSelecionado = localStorage.getItem('idiomaSelecionado');
    if (idiomaSelecionado) {
        combobox.value = idiomaSelecionado; // Define o valor da combobox como o idioma selecionado
        carregarTraducao(idiomaSelecionado); // Carrega a tradução correspondente ao idioma selecionado
    }

    // Adicionar um evento para detectar mudanças na combobox e carregar as traduções correspondentes
    combobox.addEventListener('change', function() {
        const idiomaSelecionado = combobox.value; // Obtém o idioma selecionado na combobox
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado); // Armazena o idioma selecionado localmente
        carregarTraducao(idiomaSelecionado); // Chama a função para carregar as traduções
    });
};