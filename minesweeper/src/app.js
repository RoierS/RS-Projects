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
// console.log(board)
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

initGame(boardSize, bombsCount);

function initGame(size, bombsCount) {
  const tilesCount = size * size;
  board.innerHTML = '<button class="board__tile"></button>'.repeat(tilesCount);
  const tiles = [...board.children];
  // bombsCount = bombsAmount;
  const bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);

  let closedTiles = tilesCount;
  // console.log(closedTiles)
  // console.log(tilesCount)

  board.addEventListener('click', (e) => {
    if (!e.target.classList.contains('board__tile')) {
      return;
    }

    const targetTile = tiles.indexOf(e.target);
    const column = targetTile % size;
    const row = Math.floor(targetTile / size);

    openTile(row, column);
  });
  
  function isValidTile(row, column) {
    return row >= 0 && column >= 0
          && row < boardSize
          && column < boardSize;
  }

  function getBombsCount(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (isBomb(row + y, column + x)) {
          count++;
        }
      }
    }
    return count;
  }

  function openTile(row, column) {
    if (!isValidTile(row, column)) return;

    const tileIndex = row * boardSize + column;
    const tile = tiles[tileIndex];

    if (tile.disabled === true) return;

    tile.disabled = true;

    if (isBomb(row, column)) {
      tile.innerHTML = '💣';
      alert('LOOOSE')
      return;
    }

    closedTiles--;
    console.log(closedTiles)

    if (closedTiles <= bombsCount) {
      alert('you win');
      return;
    }

    const count = getBombsCount(row, column);
    if (count !== 0) {
      tile.innerHTML = count;
      return;
    }

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        openTile(row + y, column + x);
      }
    }
  }

  function isBomb(row, column) {
    if (!isValidTile(row, column)) return false;
    const tileIndex = row * boardSize + column;
    return bombs.includes(tileIndex);
  }
}

easyMode.addEventListener('click', () => {
  boardWrapper.style.width = '260px';
  board.style.gridTemplateColumns = 'repeat(10, 25px)';
  boardSize = 10;
  initGame(boardSize, bombsCount);
});

mediumMode.addEventListener('click', () => {
  boardWrapper.style.width = '385px';
  board.style.gridTemplateColumns = 'repeat(15, 25px)';
  boardSize = 15;
  initGame(boardSize, bombsCount);
});

hardMode.addEventListener('click', () => {
  boardWrapper.style.width = '635px';
  board.style.gridTemplateColumns = 'repeat(25, 25px)';
  boardSize = 25;
  initGame(boardSize, bombsCount);
});














