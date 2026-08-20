// --- FUNCIONALIDADE 1: TEMA CLARO/ESCURO ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão conforme o tema
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Tema Claro';
    } else {
        toggleBtn.textContent = '🌙 Tema Escuro';
    }
});

// --- FUNCIONALIDADE 2: VALIDAÇÃO DO FORMULÁRIO ---
const form = document.getElementById('form-contato');

form.addEventListener('submit', function(evento) {
    // Evita que a página recarregue ao clicar em enviar
    evento.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão em branco
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Verifica se o e-mail possui um formato válido (contém @)
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido (ex: usuario@dominio.com).');
        return;
    }

    // Simula o envio com sucesso
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    
    // Limpa os campos do formulário após o "envio"
    form.reset();
});
