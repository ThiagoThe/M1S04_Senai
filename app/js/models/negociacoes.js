export class Negociacao {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = Date;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  //Getters
  get data() {
    return new Date();
  }

  get quantidade() {
    return this.quantidade;
  }

  get valor() {
    return this.valor;
  }
}
