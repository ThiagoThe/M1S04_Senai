export class listaNegociacoes {
  constructor() {
    this.negociacoes = [];
  }

  adicionar(negociacao) {
    this.negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this.negociacoes);
  }

  filtraNegociacoes(criterio) {
    return this.negociacoes.filter(criterio);
  }
}

const criterio = (negociacao) => negociacao.valor > 5000;

const listaDenegociacoes = new listaNegociacoes();

const negociacoesFiltradas = listaDenegociacoes.filtraNegociacoes(criterio);
