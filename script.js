let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Recria ordem aleatoria de cores
let shuffleOrder = () => {
  // armazena um numero aleatorio a cada rodada
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

// Acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
    }
  }
  if(clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

// Função para o click do usuário
let click = (color) => {
  console.log('call click: ', color);
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

// Função que retorna a cor
let createColorElement = (color) => {
  const colors = [green, red, yellow, blue];
  
  return colors[color];
}

// Função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// Função para game over
let gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!`);
  order = [];
  clickedOrder = []

  playGame();
}

// Função de iniciar jogo!
let playGame = () => {
  score = 0;
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  nextLevel();
}

// green.addEventListener('click', () => click(0));
// red.addEventListener('click', () => click(1));
// yellow.addEventListener('click', () => click(2));
// blue.addEventListener('click', () => click(3));

// Eventos de clicks para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Inicia o jogo
playGame();