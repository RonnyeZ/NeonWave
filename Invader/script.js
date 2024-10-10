// Delay na tela de inicialização
const codeLines = document.querySelectorAll('.code-area .line');

function displayCodeLines() {
  // Inicializar a opacidade das linhas para 0
  codeLines.forEach(line => {
    line.style.opacity = 0;
  });

  codeLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = 1;
    }, index * 500); // Ajuste o atraso (500ms) para controlar a velocidade da animação
  });
}

let usuario = null;

// Chama a função ao carregar a página
window.onload = displayCodeLines;

// Digitar no Chat
const inputArea = document.querySelector('.input-area input');
const codeArea = document.querySelector('.code-area');

// Seleciona os elementos com as classes processo1 a processo5
const processo1 = document.querySelector('.processo1');
const processo2 = document.querySelector('.processo2');
const processo3 = document.querySelector('.processo3');
const processo4 = document.querySelector('.processo4');
const processo5 = document.querySelector('.processo5');

let linkCriado = false; // Variável para controlar a criação do link

inputArea.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
      const command = inputArea.value.trim(); // Remove espaços em branco

      // Se o comando estiver vazio, não envia a mensagem
      if (!command) {
          return; // Sai da função se não houver texto
      }

      // Se o nome do usuário não foi definido ainda, pede uma única vez
      if (!usuario) {
          usuario = command; // Define o nome do usuário
          const newLine = document.createElement('div');
          newLine.classList.add('line');
          newLine.innerHTML = `
          <span class="path">~/INICIALIZATION</span>
          <span class="input">$ </span>
          <span>
              <span class="command1">Os Sistemas do Usuário foram definidos à </span> <span style="color: aquamarine;"><span style="text-decoration: underline;">${usuario}</span>@6940028922</span>
          </span>`;
          codeArea.appendChild(newLine);
          inputArea.value = '';
          return; // Para aqui após definir o usuário
      }

      // Adiciona a linha de comando digitada
      const newLine = document.createElement('div');
      newLine.classList.add('line');
      newLine.innerHTML = `
      <span class="command"></span>
      <span class="command2">${usuario}</span>
      <span class="command">@6940028922-system:</span>
      <span class="path">~/HACKING</span>
      <span class="input">$ </span>
      <span class="command1">${command}</span>`;
      codeArea.appendChild(newLine);
      inputArea.value = ''; // Limpa o campo de entrada

      // Comando help
      if (command.toLowerCase() === "help" || command.toLowerCase() === "/help") {
          const newLine = document.createElement('div');
          newLine.classList.add('line');
          newLine.innerHTML = `<span class="path">Oxi, ta achando que tu ta aonde!?</span>`;
          codeArea.appendChild(newLine);
          return; // Para garantir que nada mais seja processado após isso
      }

      // Verifica se a palavra-chave foi digitada e atualiza a classe correspondente
      if (command === 'senha1') {
          processo1.textContent = 'Desativado'; 
      } else if (command === 'senha2') {
          processo2.textContent = 'Desativado'; 
      } else if (command === 'senha3') {
          processo3.textContent = 'Desativado'; 
      } else if (command === 'senha4') {
          processo4.textContent = 'Desativado'; 
      } else if (command === 'senha5') {
          processo5.textContent = 'Desativado'; 
      }

      // Processo de analisar se todos os processos foram desativados para aparecer um link
      const processos = document.querySelectorAll('span[class^="processo"]');
      let todosDesativados = true;

      // Verifica se todos os spans têm 'Desativado'
      processos.forEach(processo => {
          if (processo.textContent.trim() !== 'Desativado') { 
              todosDesativados = false;
          }
      });

      // Se todos forem 'Desativado' e o link ainda não foi criado, cria o link
      if (todosDesativados && !linkCriado) {
          const nextStepDiv = document.querySelector('.next-step');
          const link = document.createElement('a');
          link.href = 'https://www.youtube.com/';
          link.target = '_blank'; // Abre o link em uma nova aba
          link.textContent = 'Ir para o YouTube';
          link.classList.add('next-step-link'); // Opcional: adicionar uma classe para estilização
          nextStepDiv.appendChild(link);
          linkCriado = true; // Marca que o link foi criado
      }
  }
});


/*
if (command.toLowerCase() === "help" || command.toLowerCase() === "/help") {
      const command = inputArea.value;
      const newLine = document.createElement('div');
      newLine.classList.add('line');
      newLine.innerHTML = `<span class="path">Oxi, ta achando que tu ta aonde!?</span>`;
      codeArea.appendChild(newLine);
      inputArea.value = ''; 
    }
    str.toUpperCase();
*/
