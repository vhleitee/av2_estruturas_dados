//Esta função é apenas para fins de teste
//Função criada por Vitor, sem referencia externa!
//Função para adicionar mensagens de teste na interface HTML
function adicionarMensagem(texto, conteudoId) {
    document.getElementById(conteudoId).innerHTML += `<p>${texto}</p>`;
}
