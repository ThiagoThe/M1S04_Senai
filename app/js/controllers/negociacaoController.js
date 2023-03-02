import { Negociacao } from "../models/negociacoes.js";
import { listaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;
  #listaNegociacoes = new listaNegociacoes();

  constructor() {
    this.#campoData = document.getElementById("data");
    this.#campoQuantidade = document.getElementById("quantidade");
    this.#campoValor = document.getElementById("valor");
  }

  criarNegociacao() {
    let data = this.#campoData.value;
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;
    let negociacao = new Negociacao(data, quantidade, valor);
    this.#listaNegociacoes.adicionar(negociacao);
    console.log(this.#listaNegociacoes.negociacoes);
  }
}
