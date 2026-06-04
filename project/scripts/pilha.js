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
}

function adicionarMensagem(texto) {
    document.getElementById("content-pilha").innerHTML += `<p>${texto}</p>`;
}


window.onload = () => {

    document.querySelector("details").open = true;

    const pilha = new Pilha(3);

    adicionarMensagem("Pilha criada (tamanho 3)");

    pilha.push(10);
    adicionarMensagem("Push(10) → [10]");

    pilha.push(20);
    adicionarMensagem("Push(20) → [10, 20]");

    adicionarMensagem(`Pop() → ${pilha.pop()}`);

    try {
        pilha.pop();
        pilha.pop();
        pilha.pop();
    } catch (erro) {
        adicionarMensagem(`Erro: ${erro.message}`);
    }
};