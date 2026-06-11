class Pilha {
    constructor(M) {
        this.P = [];
        this.topo = 0;
        this.M = M;
    }

    push(e) {
        if (this.topo != this.M){
            this.topo++;
            this.P[this.topo] = e
        }else{
            throw new Error("Pilha cheia");
        }
    }

    pop() {
        if (this.topo != this.size){
            let valorRetorno = this.P[this.topo];
            this.topo--;
            return valorRetorno;
        }else{
            throw new Error("Pilha vazia");
        }
    }

    //Implementado de acordo com o livro, como métodos adicional
    //Livro: Estruturas de Dados e Algoritmos em Java Michael T. Goodrich; Roberto Tamassia, Capítulo 5
    size() {
        return this.topo;
    }

    //Implementado de acordo com o livro, como métodos adicional
    //Livro: Estruturas de Dados e Algoritmos em Java Michael T. Goodrich; Roberto Tamassia, Capítulo 5
    isEmpty() {
        return this.topo === 0;
    }

    //Implementado de acordo com o livro, como métodos adicional
    //Livro: Estruturas de Dados e Algoritmos em Java Michael T. Goodrich; Roberto Tamassia, Capítulo 5
    top() {
        if (!this.isEmpty) {
            throw new Error("Pilha vazia");
        }
        return this.P[this.topo];
    }
}

//Função principal para testar a implementação da pilha
//Função criada por Vitor, sem referencia externa!
//Esta função é chamada quando a página é carregada para executar os testes da pilha e exibir os resultados na interface HTML
function mainpilha() {

    //Container onde a mensagem é escrita
    container = "content-pilha";

    // Abre a seção da pilha para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("pilha-section").open = true; 

    //Chama a função que esta na pasta ../scripts/utils.js para adicionar mensagens na interface HTML
    adicionarMensagem("=== TESTE DA PILHA ===", container);
    const pilha = new Pilha(3);
    adicionarMensagem("Pilha criada com M 3", container);

    // Estado inicial
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste de push
    pilha.push(10);
    adicionarMensagem("push(10)", container);
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    pilha.push(20);
    adicionarMensagem("push(20)", container);
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    pilha.push(30);
    adicionarMensagem("push(30)", container);
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste de pilha cheia
    try {
        adicionarMensagem("Tentando push(40) em pilha cheia...", container);
        pilha.push(40);
    } catch (e) {
        adicionarMensagem(`Erro esperado: ${e.message}`, container);
    }
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste de pop
    adicionarMensagem(`pop() = ${pilha.pop()}`, container);
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem(`pop() = ${pilha.pop()}`, container);
    adicionarMensagem(`top() = ${pilha.top()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem(`pop() = ${pilha.pop()}`, container);
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste top() em pilha vazia
    try {
        adicionarMensagem("Tentando top() em pilha vazia...", container);
        pilha.top();
    } catch (e) {
        adicionarMensagem(`Erro esperado: ${e.message}`, container);
    }
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    // Teste pop() em pilha vazia
    try {
        adicionarMensagem("Tentando pop() em pilha vazia...", container);
        pilha.pop();
    } catch (e) {
        adicionarMensagem(`Erro esperado: ${e.message}`, container);
    }
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`, container);
    adicionarMensagem(`size() = ${pilha.size()}`, container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Abre a seção da pilha para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("pilha-section").open = false; 

}