// Selecionar todos os botões de aba
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const comprarButtons = document.querySelectorAll('.btn-comprar');

// Adicionar evento de clique para cada botão de aba
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Remover classe 'active' de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adicionar classe 'active' ao botão clicado e ao conteúdo correspondente
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Adicionar evento de clique para botões de compra
comprarButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Pegar o nome do produto da aba
        const produtoCard = e.target.closest('.produto-card');
        const produtoNome = produtoCard.querySelector('h3').textContent;
        const produtoPreco = produtoCard.querySelector('.preco').textContent;
        
        // Mostrar mensagem de sucesso
        const mensagem = `✅ "${produtoNome}" (${produtoPreco}) foi adicionado ao carrinho!`;
        alert(mensagem);
        
        // Adicionar animação ao botão
        button.textContent = '✓ Adicionado!';
        button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        
        // Voltar ao estado original após 2 segundos
        setTimeout(() => {
            button.textContent = 'Adicionar ao Carrinho';
            button.style.background = '';
        }, 2000);
    });
});