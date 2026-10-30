// Aguarda o navegador ler todo o HTML estrutural antes de carregar e rodar as interações
document.addEventListener('DOMContentLoaded', () => {

    // --- INTERAÇÃO 1: MECANISMO DE ALTERNAÇÃO DE TEMA (CLARO/ESCURO) ---
    const botaoTema = document.getElementById('theme-toggle');
    const corpoPagina = document.body;

    botaoTema.addEventListener('click', () => {
        // Realiza o chaveamento da classe no elemento body do HTML
        corpoPagina.classList.toggle('light-theme');
        
        // Altera de forma condicional o rótulo do botão de controle de tema
        if (corpoPagina.classList.contains('light-theme')) {
            botaoTema.textContent = '🌙 Modo Escuro';
        } else {
            botaoTema.textContent = '☀️ Modo Claro';
        }
    });

    // --- INTERAÇÃO 2: VALIDAÇÃO COMPLETA DO FORMULÁRIO DE CONTATO ---
    const formulario = document.getElementById('meu-formulario');

    formulario.addEventListener('submit', (evento) => {
        // Bloqueia a execução padrão do submit para efetuar a validação local primeiro
        evento.preventDefault();

        // Mapeamento dos elementos de entrada de dados do formulário
        const campoNome = document.getElementById('nome');
        const campoEmail = document.getElementById('email');
        const campoMensagem = document.getElementById('mensagem');

        // Extração e remoção de espaços sobressalentes nos textos informados
        const valorNome = campoNome.value.trim();
        const valorEmail = campoEmail.value.trim();
        const valorMensagem = campoMensagem.value.trim();

        // Expressão Regular (Regex) para validação estrutural do formato de e-mail padrão
        const expressaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verificação lógica individual para bloqueio de campos vazios ou formatos inválidos
        if (valorNome === "") {
            alert("Por favor, digite seu nome completo.");
            campoNome.focus();
            return;
        }

        if (valorEmail === "") {
            alert("Por favor, preencha o campo de e-mail.");
            campoEmail.focus();
            return;
        }

        if (!expressaoEmail.test(valorEmail)) {
            alert("Por favor, insira um formato de e-mail válido (exemplo: usuario@dominio.com).");
            campoEmail.focus();
            return;
        }

        if (valorMensagem === "") {
            alert("Por favor, digite sua mensagem.");
            campoMensagem.focus();
            return;
        }

        // Exibição da confirmação visual de envio exigida pelo edital prático
        alert("Mensagem enviada com sucesso!");
        
        // Efetua a limpeza completa dos inputs do formulário após o sucesso
        formulario.reset();
    });
});
