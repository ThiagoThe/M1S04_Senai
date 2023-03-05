import { listaNegociacoes } from "../models/listaNegociacoes.js";

class NegociacoesView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _tabela(listaNegociacoes) {
    return `
    <table class = "tabela">
        <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>
        
        <tbody>
            ${listaNegociacoes.negociacoes
              .map(
                (n) => ` (
              <tr>
                <td>${n.data}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
              </tr>
            `
              )
              .join("")}
        </tbody>
            
    `;
  }

  atualiza(listaNegociacoes) {
    this._elemento.innerHtml = this._tabela(listaNegociacoes);
  }
}
