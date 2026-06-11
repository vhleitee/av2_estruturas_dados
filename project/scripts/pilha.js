/*
O ponteiro sempre aponta para o topo da pilha, ou seja, o último elemento inserido.
Quando a pilha está vazia, o ponteiro é -1. Quando um elemento é inserido,
o ponteiro é incrementado e aponta para o novo topo da pilha. Quando um elemento é removido,
o ponteiro é decrementado, apontando para o novo topo da pilha após a remoção.
*/

class Pilha {
    constructor(quantidadeMaxima) {
        this.M = quantidadeMaxima;
        this.topo = -1;
        this.lista = new Array();
    }

    push(e) {
        if(this.topo != (this.M - 1)){
            this.topo = this.topo + 1;
            this.lista[this.topo] = e;
        }
        else{
            throw new Error("overflow");
        }
    }

    pop() {
        if(this.topo != -1){
            let valor_recuperado = this.lista[this.topo];
            this.topo = this.topo - 1;
            return valor_recuperado;
        }
        else{
            throw new Error("underflow");
        }
    }

    //Implementação de um método para retornar a lista atual da pilha, mostrando os elementos do topo até o fundo da pilha
    getLista(){
        let str  = "";
        for( let i = 0; i <= this.topo; i++ ){
            str = str + " " + this.lista[i] + " ";
        }
        return "[" + str + "]";
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
    adicionarMensagem("Pilha criada com tamanho 3", container);

    adicionarMensagem(`-----------------------------------------`, container);
    adicionarMensagem("Inserindo elementos na pilha:", container);
    try {
        pilha.push(10);
        adicionarMensagem("Elemento 10 inserido", container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  
        pilha.push(20);
        adicionarMensagem("Elemento 20 inserido", container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  
        pilha.push(30);
        adicionarMensagem("Elemento 30 inserido", container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  

        adicionarMensagem("Tentando inserir o elemento 40 na pilha (deve causar overflow)", container);
        pilha.push(40); // Este push deve causar overflow
    }    catch (error) {
        adicionarMensagem(`Erro: ${error.message} (overflow)`, container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  
    }

    adicionarMensagem("Removendo elementos da pilha:", container);
    try {
        let valor1 = pilha.pop();   
        adicionarMensagem(`Elemento ${valor1} removido`, container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  

        let valor2 = pilha.pop();
        adicionarMensagem(`Elemento ${valor2} removido`, container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  

        let valor3 = pilha.pop();
        adicionarMensagem(`Elemento ${valor3} removido`, container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);  

        adicionarMensagem("Tentando remover um elemento da pilha vazia (deve causar underflow)", container);
        pilha.pop(); // Este pop deve causar underflow
    } catch (error) {
        adicionarMensagem(`Erro: ${error.message} (underflow)`, container);
        adicionarMensagem(pilha.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);
    }

    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Abre a seção da pilha para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("pilha-section").open = false; 

}