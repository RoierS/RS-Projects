import './style.css';

const createElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

const wrapper = createElement('div', 'wrapper');
const title = createElement('h1', 'header');
const boardWrapper = createElement('div', 'board__wrapper');
const boardHeader = createElement('div', 'board__header');
const flagsCount = createElement('div', 'header__flags-count');
const smile = createElement('div', 'header__smile');
const timer = createElement('div', 'header__timer');
const board = createElement('div', 'board');
const modeBlock = createElement('div', 'mode-container');

const easyMode = createElement('button', 'board__easy--mode');
const mediumMode = createElement('button', 'board__medium--mode');
const hardMode = createElement('button', 'board__hard--mode');

title.textContent = 'Minesweeper Game';
flagsCount.textContent = '10';
easyMode.textContent = 'Easy';
mediumMode.textContent = 'Medium';
hardMode.textContent = 'Hard';

document.body.append(wrapper);
wrapper.append(title, boardWrapper);
modeBlock.append(easyMode, mediumMode, hardMode);
boardWrapper.append(boardHeader, board, modeBlock);
boardHeader.append(flagsCount, smile, timer);

let bombsCount = 10;
let boardSize = 10;
console.log(board);

function initGame(size, bombs) {
  const tilesCount = size * size;
  board.innerHTML = '<button class="board__tile"></button>'.repeat(tilesCount);
  const tiles = [...board.children];
}

initGame(boardSize, bombsCount);

easyMode.addEventListener('click', () => {
  boardWrapper.style.width = '260px';
  board.style.gridTemplateColumns = 'repeat(10, 25px)';
  boardSize = 10;
  initGame(boardSize, bombsCount);
})

mediumMode.addEventListener('click', () => {
  boardWrapper.style.width = '385px';
  board.style.gridTemplateColumns = 'repeat(15, 25px)';
  boardSize = 15;
  initGame(boardSize, bombsCount);
})

hardMode.addEventListener('click', () => {
  boardWrapper.style.width = '635px';
  board.style.gridTemplateColumns = 'repeat(25, 25px)';
  boardSize = 25;
  initGame(boardSize, bombsCount);
})









