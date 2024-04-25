function carregarTraducao(idioma) {
    const arquivosTraducao = {
        'en': 'en.json',
        'pt-BR': 'pt-BR.json',
        'es': 'es.json'
    };

    const arquivoTraducao = './src/lng/' + arquivosTraducao[idioma];

    if (!arquivosTraducao[idioma]) {
        console.error('Idioma "' + idioma + '" não encontrado ou não suportado');
        return;
    }

    fetch(arquivoTraducao)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao carregar traduções');
            }
            return response.json();
        })
        .then(translations => {
            // Aplica as traduções aos elementos na página com base na tag de linguagem
            const elementosTraduzidos = document.querySelectorAll('[lng-tag]');

            elementosTraduzidos.forEach(elemento => {
                const chaveTraducao = elemento.getAttribute('lng-tag');
                if (chaveTraducao && translations[chaveTraducao]) {
                    elemento.textContent = translations[chaveTraducao];
                } else {
                    console.warn(`Tradução para "${chaveTraducao}" não encontrada`);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar traduções:', error);
        });
}

// Exemplo de uso: carrega traduções para o idioma "en" (inglês) com tag de linguagem "lng-tag"
