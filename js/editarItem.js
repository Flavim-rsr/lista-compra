export const editarItem = (elemento) => {
    mostrarModalEdicao("Digite o novo nome do item:", (novoNome) => {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        if (itemTextoAtualizado) {
            itemTextoAtualizado.textContent = novoNome;
        }

        const itemData = elemento.querySelector(".texto-data");
        if (itemData) {
            itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
        }

        const checkbox = elemento.querySelector(".input-checkbox");
        if (checkbox) {
            const estavaComprado = checkbox.checked;
            if (estavaComprado) {
                checkbox.checked = true;
                elemento.querySelector(".checkbox-customizado").classList.add("checked");
                itemTextoAtualizado.style.textDecoration = "line-through";
            }
        }
    });
}

function mostrarModalEdicao(mensagem, acaoConfirmada) {
    // Criar elementos do modal
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const texto = document.createElement("p");
    texto.textContent = mensagem;

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input-edicao");
    input.placeholder = "Digite o novo nome do item";
    input.style.cssText = "display: block; padding: 12px 16px; border-radius: 24px; border: 1px solid var(--preto); width: 100%; font-family: var(--fonte-texto);";

    const botoesContainer = document.createElement("div");
    botoesContainer.classList.add("botoes-container");

    const botaoConfirmar = document.createElement("button");
    botaoConfirmar.textContent = "Salvar";
    botaoConfirmar.classList.add("botao-confirmar");

    const botaoCancelar = document.createElement("button");
    botaoCancelar.textContent = "Cancelar";
    botaoCancelar.classList.add("botao-cancelar");


    botaoConfirmar.addEventListener("click", () => {
        const novoNome = input.value.trim();
        if (novoNome) {
            acaoConfirmada(novoNome);
            document.body.removeChild(modal);
        } else {
            mostrarNotificacao("O nome do item não pode estar vazio!");
        }
    });

    botaoCancelar.addEventListener("click", () => {
        document.body.removeChild(modal);
    });


    botoesContainer.appendChild(botaoConfirmar);
    botoesContainer.appendChild(botaoCancelar);
    modalContent.appendChild(texto);
    modalContent.appendChild(input);
    modalContent.appendChild(botoesContainer);
    modal.appendChild(modalContent);


    document.body.appendChild(modal);
}

function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement("div");
    notificacao.textContent = mensagem;
    notificacao.classList.add("notificacao");
    notificacao.style.fontFamily = 'Numans, sans-serif';
    document.body.appendChild(notificacao);


    notificacao.classList.add('mostrar');

    setTimeout(() => {
        notificacao.classList.remove('mostrar');
        document.body.removeChild(notificacao);
    }, 3000);
}
