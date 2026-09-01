const form = document.getElementById("formContato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Remove espaços em branco do início e final
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    // Validação do nome
    if (nomeValor.length < 3) {
        mostrarMensagem(
            "Digite um nome válido com pelo menos 3 caracteres.",
            "danger"
        );

        nome.focus();
        return;
    }

    // Validação do e-mail
    if (!validarEmail(emailValor)) {
        mostrarMensagem(
            "Digite um endereço de e-mail válido.",
            "danger"
        );

        email.focus();
        return;
    }

    // Validação da mensagem
    if (mensagemValor.length < 10) {
        mostrarMensagem(
            "A mensagem deve ter pelo menos 10 caracteres.",
            "danger"
        );

        mensagem.focus();
        return;
    }

    // Simulação de envio
    mostrarMensagem(
        "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        "success"
    );

    // Limpa o formulário
    form.reset();
});

// Função para validar o e-mail
function validarEmail(email) {

    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return padraoEmail.test(email);
}

// Função para mostrar mensagens na tela
function mostrarMensagem(texto, tipo) {

    resultado.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${texto}
        </div>
    `;
}