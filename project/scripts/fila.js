class Fila{
    constructor(tamanhoM) {
        this.M = tamanhoM;          
        this.F = new Array(tamanhoM);            
        this.f = -1;                 
        this.r = -1;                 
    }

    enqueue(e){
        let prov = (this.r + 1) % this.M;

        if (prov != this.f) {
            this.r = prov;
            this.F[this.r] = e;

            if (this.f === -1) {
                this.f = 0;
            }
        }else{
            throw new Error("overflow");
        }
    }

    dequeue(){
        if (this.f != -1) {
            let valorRecuperado = this.F[this.f];

            if (this.f === this.r) {
                this.f = -1;
                this.r = -1;
            } else {
                this.f = (this.f + 1) % this.M;
            }

            return valorRecuperado;
        }else{
            throw new Error("underflow");
        }
    }

    // Método para obter a representação da fila como string para exibição na interface HTML
    getLista(){
        let str = "";   
        if (this.f != -1) {
            let i = this.f;
            while (true) {
                str += " " + this.F[i] + " ";
                if (i === this.r) {
                    break;
                }
                i = (i + 1) % this.M;
            }
        }
        return "[" + str + "]";
    }
}

//Função principal para testar a implementação da fila
//Função criada por Vitor, sem referencia externa!
//Esta função é chamada quando a página é carregada para executar os testes da fila e exibir os resultados na interface HTML
function mainfila() {

    //Container onde a mensagem é escrita
    container = "content-fila";

    // Abre a seção para mostrar os resultados dos testes
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("fila-section").open = true; 

    //Chama a função que esta na pasta ../scripts/utils.js para adicionar mensagens na interface HTML
    adicionarMensagem("=== TESTE DA FILA ===", container);

    const fila = new Fila(3);
    adicionarMensagem("Fila criada com tamanho 3", container);
    // Estado inicial da fila

    adicionarMensagem(`-----------------------------------------`, container);
    adicionarMensagem("Estado inicial da fila:", container);
    adicionarMensagem(fila.getLista(), container);
    adicionarMensagem(`-----------------------------------------`, container);

    adicionarMensagem("Inserindo elementos na fila:", container);
    try {
        fila.enqueue(10);   
        adicionarMensagem("Elemento 10 inserido", container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        fila.enqueue(20);
        adicionarMensagem("Elemento 20 inserido", container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        fila.enqueue(30);
        adicionarMensagem("Elemento 30 inserido", container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        adicionarMensagem("Tentando inserir elemento 40 (deve causar overflow):", container);
        fila.enqueue(40); // Este enqueue deve causar overflow

    } catch (error) {
        adicionarMensagem(`Erro: ${error.message} (overflow)`, container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);
    }

    adicionarMensagem("Removendo elementos da fila:", container);
    try {
        let valor1 = fila.dequeue();   
        adicionarMensagem(`Elemento ${valor1} removido`, container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        let valor2 = fila.dequeue();
        adicionarMensagem(`Elemento ${valor2} removido`, container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        let valor3 = fila.dequeue();
        adicionarMensagem(`Elemento ${valor3} removido`, container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);

        adicionarMensagem("Tentando remover elemento de fila vazia (deve causar underflow):", container);
        fila.dequeue(); // Este dequeue deve causar underflow
    } catch (error) {
        adicionarMensagem(`Erro: ${error.message} (underflow)`, container);
        adicionarMensagem(fila.getLista(), container);
        adicionarMensagem(`-----------------------------------------`, container);
    }

    adicionarMensagem("=== FIM DOS TESTES ===", container);

    // Fecha seção
    // Referência: https://www.w3schools.com/jsref/prop_details_open.asp
    document.getElementById("fila-section").open = false; 

}