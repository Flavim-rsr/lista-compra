import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    mostrarModalConfirmacao("Tem certeza que deseja excluir esse item?", () => {
        elemento.remove();
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    });
};

export { excluirItem };

function mostrarModalConfirmacao(mensagem, acaoConfirmada) {

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const texto = document.createElement("p");
    texto.textContent = mensagem;

    const botoesContainer = document.createElement("div");
    botoesContainer.classList.add("botoes-container");

    const botaoConfirmar = document.createElement("button");
    botaoConfirmar.textContent = "Sim";
    botaoConfirmar.classList.add("botao-confirmar");

    const botaoCancelar = document.createElement("button");
    botaoCancelar.textContent = "Não";
    botaoCancelar.classList.add("botao-cancelar");

    botaoConfirmar.addEventListener("click", () => {
        acaoConfirmada();
        document.body.removeChild(modal);
    });

    botaoCancelar.addEventListener("click", () => {
        document.body.removeChild(modal);
    });

    botoesContainer.appendChild(botaoConfirmar);
    botoesContainer.appendChild(botaoCancelar);
    modalContent.appendChild(texto);
    modalContent.appendChild(botoesContainer);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}
