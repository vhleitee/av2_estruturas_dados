class ListaSequencial {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

//Função principal para testar a implementação da pilha
//Função criada por Vitor, sem referencia externa!
//Esta função é chamada quando a página é carregada para executar os testes da pilha e exibir os resultados na interface HTML
function mainpilha() {

    //Container onde a mensagem é escrita
    container = "content-listas-sequenciais";

    // Abre a seção da pilha para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("listas-sequenciais-section").open = true; 

    //Chama a função que esta na pasta ../scripts/utils.js para adicionar mensagens na interface HTML
    adicionarMensagem("=== TESTE DA LISTA SEQUENCIAL ===", container);
    const listaSequencial = new ListaSequencial(3);
    adicionarMensagem("Lista sequencial criada com tamanho 3", container);



    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Abre a seção da pilha para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("listas-sequenciais-section").open = false; 

}