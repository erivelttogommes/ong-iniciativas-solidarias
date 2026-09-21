const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menuPrincipal");

menuBotao.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    menuBotao.setAttribute("aria-expanded", aberto);
    menuBotao.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBotao.setAttribute("aria-expanded", "false");
        menuBotao.setAttribute("aria-label", "Abrir menu");
    });
});

/* Modal */
const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const confirmarModal = document.getElementById("confirmarModal");

function fecharModalFuncao() {
    modal.hidden = true;
    abrirModal.focus();
}

abrirModal.addEventListener("click", function () {
    modal.hidden = false;
});

fecharModal.addEventListener("click", fecharModalFuncao);
confirmarModal.addEventListener("click", fecharModalFuncao);

modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        fecharModalFuncao();
    }
});

/* Validação visual */
const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagemFormulario");

function validarCampo(campo, erro, sucesso) {
    const grupo = campo.closest(".campo");
    const texto = grupo.querySelector(".mensagem-campo");

    grupo.classList.remove("erro", "sucesso");

    if (!campo.checkValidity()) {
        grupo.classList.add("erro");
        texto.textContent = erro;
        return false;
    }

    grupo.classList.add("sucesso");
    texto.textContent = sucesso;
    return true;
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeValido = validarCampo(
        nome,
        "Digite seu nome completo.",
        "Nome preenchido corretamente."
    );

    const emailValido = validarCampo(
        email,
        "Digite um e-mail válido.",
        "E-mail preenchido corretamente."
    );

    if (nomeValido && emailValido) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "var(--cor-secundaria)";
    } else {
        mensagem.textContent = "Verifique os campos destacados.";
        mensagem.style.color = "var(--cor-perigo)";
    }
});

nome.addEventListener("input", function () {
    validarCampo(
        nome,
        "Digite seu nome completo.",
        "Nome preenchido corretamente."
    );
});

email.addEventListener("input", function () {
    validarCampo(
        email,
        "Digite um e-mail válido.",
        "E-mail preenchido corretamente."
    );
});
