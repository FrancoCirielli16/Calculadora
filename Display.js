
class Display{
    
    constructor(displayValorAnterior,displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-'
        }
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

   computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        if (this.valorActual === '' || this.valorActual === undefined){
            this.valorAnterior = this.valorAnterior;
        }
        else 
            this.valorAnterior = this.valorActual;
        this.valorActual = '';
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return

        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);
    }
    
}