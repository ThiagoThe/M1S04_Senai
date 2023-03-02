import { Negociacao } from "../models/negociacoes.js";

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;

  constructor(campoData, campoQuantidade, campoValor) {
    this.#campoData = document.getElementById("data");
    this.#campoQuantidade = document.getElementById("quantidade");
    this.#campoValor = document.getElementById("valor");
  }

  criarNegociacao() {
    let data = this.#campoData.value;
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;
  }
}
