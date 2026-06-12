class ListaSequencial {
    constructor(capacidade) {
        this.M = capacidade;
        this.L = new Array(capacidade);
        this.n = 0;
    }

    busca(x){
        let i = 0;
        let busca1 = -1;
        while( i < this.n ){
            if( this.L[i] == x ){
                busca1 = i;
                i = this.n + 1;
            }
            else{
                i++;
            }
        }
        return busca1;
    }

    add(x){
        if (this.n < this.M){
            if (this.busca(x) == -1){
                this.L[this.n] = x;
                this.n++;
            }else{
                throw new Error("Elemento já existe na tabela");
            }
        }else{
            throw new Error("Overflow");
        }
    }

    remove(x){
        if (this.n != -1){
            let indice = this.busca(x);
            if (indice != -1){
                let valorRecuperado = this.L[indice];
                for (let i = indice; i < this.n - 1; i++){
                    this.L[i] = this.L[i + 1];
                }
                this.n--;
                return valorRecuperado;
            }else{
                throw new Error("Elemento não se encontra na tabela");
            }
        }else{
            throw new Error("underflow");
        }
    }

    // Método para obter a representação da fila como string para exibição na interface HTML
    getLista(){
        let str = "";
        for(let i = 0; i < this.n; i++){
            str += this.L[i];
            if(i < this.n - 1){
                str += ", ";
            }
        }
        return "[" + str + "]";
    }
}

function mainListaSequencial() {

    const container = "content-listas-sequenciais";

    // Abre a seção para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("listas-sequenciais-section").open = true;

    adicionarMensagem("=== TESTE DA LISTA SEQUENCIAL ===", container);

    const listaSequencial = new ListaSequencial(5);

    adicionarMensagem("Lista sequencial criada com capacidade 5", container);
    adicionarMensagem(`-----------------------------------------`, container);

    listaSequencial.add(10);
    adicionarMensagem("Adicionado 10: " + listaSequencial.getLista(), container);
    adicionarMensagem("getLista() retorna: " + listaSequencial.getLista(), container);
    adicionarMensagem(`-----------------------------------------`, container);

    listaSequencial.add(20);
    adicionarMensagem("Adicionado 20: " + listaSequencial.getLista(), container);
    adicionarMensagem("getLista() retorna: " + listaSequencial.getLista(), container);
    adicionarMensagem(`-----------------------------------------`, container);

    listaSequencial.add(15);
    adicionarMensagem("Adicionado 15: " + listaSequencial.getLista(), container);
    adicionarMensagem("getLista() retorna: " + listaSequencial.getLista(), container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem(
        "Busca do elemento 20. Índice encontrado: " +
        listaSequencial.busca(20),
        container
    );
    adicionarMensagem(`-----------------------------------------`, container);

    const removido = listaSequencial.remove(20);
    adicionarMensagem(
        "Elemento removido: " + removido,
        container
    );
    adicionarMensagem(
        "Lista após remoção: " + listaSequencial.getLista(),
        container
    );
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Fecha a seção
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("listas-sequenciais-section").open = false;
}