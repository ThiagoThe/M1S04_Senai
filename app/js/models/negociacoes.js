class negociacao {
  constructor(data, quantidade, valor) {
    this.data = Date(data.getTime()); //Faz uma cópia da data
    this.quantidade = quantidade;
    this.valor = valor;
  }

  //Getters
  get data() {
    return new Date(this.data.getTime()); //Retorna uma cópia da data
  }

  get quantidade() {
    return this.quantidade;
  }

  get valor() {
    return this.valor;
  }
}
