import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const notificacao = document.getElementById("notificacao");

export function adicionarItem(evento) {
    evento.preventDefault();

    if (item.value === "") {
        mostrarNotificacao("Por favor, insira um item!");
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
}

function mostrarNotificacao(mensagem) {
    notificacao.textContent = mensagem;
    notificacao.classList.add("mostrar");

    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 3000);
}
