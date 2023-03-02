import { NegociacaoController } from "../controllers/negociacaoController.js";

const formulario = document.getElementById("form");
const controller = new NegociacaoController();
formulario.addEventListener("submit", () => {
  event.preventDefault();
  controller.criarNegociacao();
});
