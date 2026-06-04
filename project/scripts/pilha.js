class Pilha {
    constructor(tamanho) {
        this.items = [];
        this.topo = 0;
        this.tamanho = tamanho;
    }

    push(e) {
        if (this.topo >= this.tamanho) {
            throw new Error("Pilha cheia");
        }

        this.items[this.topo] = e;
        this.topo++;
    }

    pop() {
        if (this.topo === 0) {
            throw new Error("Pilha vazia");
        }

        this.topo--;
        return this.items[this.topo];
    }

    size() {
        return this.topo;
    }

    isEmpty() {
        return this.topo === 0;
    }

    top() {
        if (this.topo === 0) {
            throw new Error("Pilha vazia");
        }

        return this.items[this.topo - 1];
    }

    //Este método é apenas para fins de teste e não faz parte da implementação tradicional de uma pilha
    //Método criado por Vitor!
    //Referencia do uso do push() https://www.w3schools.com/jsref/jsref_push.asp
    getItems() {
        if (this.topo === 0) {return "Pilha vazia";}
        let resultado = [];
        for (let i = 0; i < this.topo; i++) {
            resultado.push(this.items[i]);
        }
        return resultado;
    }
}

//Esta função é apenas para fins de teste e não faz parte da implementação tradicional de uma pilha
//Função criada por Vitor, sem referencia externa!
//Função para adicionar mensagens de teste na interface HTML
function adicionarMensagem(texto) {
    document.getElementById("content-pilha").innerHTML += `<p>${texto}</p>`;
}

//Função principal para testar a implementação da pilha
//Função criada por Vitor, sem referencia externa!
//Esta função é chamada quando a página é carregada para executar os testes da pilha e exibir os resultados na interface HTML
function mainpilha() {

    adicionarMensagem("=== TESTE DA PILHA ===");
    const pilha = new Pilha(3);
    adicionarMensagem("Pilha criada com tamanho 3");

    // Estado inicial
    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`);
    adicionarMensagem(`size() = ${pilha.size()}`);
    adicionarMensagem(`-----------------------------------------`);

    // Teste de push
    pilha.push(10);
    adicionarMensagem("push(10)");
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    pilha.push(20);
    adicionarMensagem("push(20)");
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    adicionarMensagem(`size() = ${pilha.size()}`);
    adicionarMensagem(`top() = ${pilha.top()}`);
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    pilha.push(30);
    adicionarMensagem("push(30)");
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);
    
    adicionarMensagem(`size() = ${pilha.size()}`);
    adicionarMensagem(`top() = ${pilha.top()}`);
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    // Teste de pilha cheia
    try {
        adicionarMensagem("Tentando push(40) em pilha cheia...");
        pilha.push(40);
    } catch (erro) {
        adicionarMensagem(`Erro esperado: ${erro.message}`);
    }
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    // Teste de pop
    adicionarMensagem(`pop() = ${pilha.pop()}`);
    adicionarMensagem(`size() = ${pilha.size()}`);
    adicionarMensagem(`-----------------------------------------`);

    adicionarMensagem(`pop() = ${pilha.pop()}`);
    adicionarMensagem(`top() = ${pilha.top()}`);
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    adicionarMensagem(`pop() = ${pilha.pop()}`);
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    adicionarMensagem(`isEmpty() = ${pilha.isEmpty()}`);
    adicionarMensagem(`size() = ${pilha.size()}`);
    adicionarMensagem(`-----------------------------------------`);

    // Teste top() em pilha vazia
    try {
        adicionarMensagem("Tentando top() em pilha vazia...");
        pilha.top();
    } catch (erro) {
        adicionarMensagem(`Erro esperado: ${erro.message}`);
    }
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    // Teste pop() em pilha vazia
    try {
        adicionarMensagem("Tentando pop() em pilha vazia...");
        pilha.pop();
    } catch (erro) {
        adicionarMensagem(`Erro esperado: ${erro.message}`);
    }
    adicionarMensagem(`getItems() = ${pilha.getItems()}`);
    adicionarMensagem(`-----------------------------------------`);

    adicionarMensagem("=== FIM DOS TESTES ===");
}