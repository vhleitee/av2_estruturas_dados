class Fila{
    constructor(tamanhoM) {
        this.M = tamanhoM;          
        this.F = [];                 
        this.f = -1;                 
        this.r = -1;                 
    }

    enqueue(e){

    }

    dequeue(){

    }
}

//Função principal para testar a implementação da fila
//Função criada por Vitor, sem referencia externa!
//Esta função é chamada quando a página é carregada para executar os testes da fila e exibir os resultados na interface HTML
function mainfila() {

    //Container onde a mensagem é escrita
    container = "content-fila";

    // Abre a seção da fila para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("fila-section").open = true; 

    //Chama a função que esta na pasta ../scripts/utils.js para adicionar mensagens na interface HTML
    adicionarMensagem("=== TESTE DA FILA ===", container);

    const fila = new Fila(3);
    adicionarMensagem("Fila criada com tamanho 3", container);
    // Estado inicial
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste de enqueue
    fila.enqueue(10);
    adicionarMensagem("enqueue(10)", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.enqueue(20);
    adicionarMensagem("enqueue(20)", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.enqueue(30);
    adicionarMensagem("enqueue(30)", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste de fila cheia
    adicionarMensagem(`Teste de fila cheia`, container);
    try {
        fila.enqueue(40);
    } catch (e) {
        adicionarMensagem(`Erro esperado: ${e.message}`, container);
    }
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.dequeue();
    adicionarMensagem("dequeue()", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.dequeue();
    adicionarMensagem("dequeue()", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.enqueue(40);
    adicionarMensagem("enqueue(40)", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.dequeue();
    adicionarMensagem("dequeue()", container);
    adicionarMensagem(`front() = ${fila.front()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    fila.dequeue();
    adicionarMensagem("dequeue()", container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem(`Teste de fila vazia`, container);
    // Teste de fila vazia
    try {
        fila.dequeue();
    } catch (e) {
        adicionarMensagem(`Erro esperado: ${e.message}`, container);
    }
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`size() = ${fila.size()}`, container);
    adicionarMensagem(`isEmpty() = ${fila.isEmpty()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Fecha seção da fila após os testes para manter a interface organizada
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("fila-section").open = false; 

}