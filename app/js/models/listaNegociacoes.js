export class listaNegociacoes {
  #negociacoes = [];

  adicionar(negociacao) {
    this.#negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this.#negociacoes);
  }
}
