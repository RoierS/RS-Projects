/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import './style.css';
import createElement from './components/createElement';

const wrapper = createElement('div', 'wrapper');
const title = createElement('h1', 'header');
const boardWrapper = createElement('div', 'board__wrapper');
const boardHeader = createElement('div', 'board__header');
const flagsCount = createElement('div', 'header__flags-count');
const smile = createElement('div', 'header__smile');
const timer = createElement('div', 'header__timer');
const board = createElement('div', 'board');
const modeBlock = createElement('div', 'mode-container');
const gameResult = createElement('div', 'game-result');
const changeBombsCount = createElement('input', 'select__bombs-count');
const bombsCountLabel = createElement('label', 'select__bombs--amount');
const selectBombsAmount = createElement('div', 'select-bombs__container');

const easyMode = createElement('button', 'board__easy--mode');
const mediumMode = createElement('button', 'board__medium--mode');
const hardMode = createElement('button', 'board__hard--mode');

const startNewGame = createElement('button', 'board__new-game');
startNewGame.textContent = 'New Game';

let bombsCount = 10;

title.textContent = 'Minesweeper Game';
changeBombsCount.value = '10';
changeBombsCount.type = 'range';
changeBombsCount.min = 10;
changeBombsCount.max = 99;
changeBombsCount.value = bombsCount;
bombsCountLabel.textContent = `Amount of Bombs: ${bombsCount}`;

// flagsCount.textContent = bombsCount;
easyMode.textContent = 'Easy';
mediumMode.textContent = 'Medium';
hardMode.textContent = 'Hard';

document.body.append(wrapper);
wrapper.append(title, boardWrapper, gameResult);
modeBlock.append(easyMode, mediumMode, hardMode);
selectBombsAmount.append(changeBombsCount, bombsCountLabel);
boardWrapper.append(boardHeader, selectBombsAmount, board, modeBlock, startNewGame);
boardHeader.append(flagsCount, smile, timer);

let boardSize = 10;
// let flags = 0;
let gameOver = false;
const tilesCount = boardSize * boardSize;
let firstClick = true;

let bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);

changeBombsCount.addEventListener('change', () => {
  bombsCount = parseInt(changeBombsCount.value, 10);
  bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);
  initGame(boardSize, bombsCount);
  bombsCountLabel.textContent = `Amount of Bombs: ${bombsCount}`;
});

let timerInterval;
function startTimer() {
  let seconds = 0;
  timer.textContent = '0';

  timerInterval = setInterval(() => {
    seconds++;
    timer.textContent = seconds;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function initGame(size, bombsCount) {
  stopTimer();
  timer.textContent = '0';
  let flags = 0;
  gameResult.innerHTML = '';
  firstClick = true;
  flagsCount.textContent = bombsCount;
  const tilesCount = size * size;
  board.innerHTML = '<button class="board__tile"></button>'.repeat(tilesCount);
  const tiles = [...board.children];
  let closedTiles = tilesCount;

  board.addEventListener('click', (e) => {
    if (!e.target.classList.contains('board__tile')) {
      return;
    }
    const targetTile = tiles.indexOf(e.target);
    const column = targetTile % size;
    const row = Math.floor(targetTile / size);
    openTile(row, column);
  });

  tiles.forEach((tile) => {
    tile.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('board__tile')) {
        return;
      }
      if (!tile.classList.contains('flagged')) {
        tile.classList.add('flagged');
        tile.innerHTML = '🚩';
        flags++;
        flagsCount.textContent = bombsCount - flags;
      } else {
        tile.classList.remove('flagged');
        tile.innerHTML = '';
        flags--;
        flagsCount.textContent = bombsCount - flags;
      }
    });
  });

  function openTile(row, column) {
    if (!isValidTile(row, column)) return;

    const tileIndex = row * boardSize + column;
    const tile = tiles[tileIndex];

    if (tile.disabled === true) return;

    tile.disabled = true;

    if (firstClick) {
      firstClick = false;
      bombs = [...Array(tilesCount).keys()].filter((index) => index !== tileIndex)
        .sort(() => Math.random() - 0.5).slice(0, bombsCount);
      startTimer();
    }

    if (isBomb(row, column)) {
      tile.innerHTML = '💣';
      gameResult.innerHTML = 'YOOu LOOOSe!';

      bombs.forEach((bombIndex) => {
        const bombRow = Math.floor(bombIndex / boardSize);
        const bombColumn = bombIndex % boardSize;
        if (tileIndex !== bombIndex) {
          const bombTile = tiles[bombIndex];
          bombTile.innerHTML = '💣';
        }
      });

      tiles.forEach((tile) => {
        tile.classList.add('disabled');
      });
      stopTimer();
      return;
    }

    closedTiles--;
    if (closedTiles <= bombsCount) {
      gameResult.innerHTML = 'You Win!';
      tiles.forEach((tile) => {
        tile.classList.add('disabled');
      });
      stopTimer();
      return;
    }

    const count = getBombsCount(row, column);
    if (count !== 0) {
      tile.innerHTML = count;
      if (count === 1) {
        tile.classList.add('one');
      }
      if (count === 2) {
        tile.classList.add('two');
      }
      if (count === 3) {
        tile.classList.add('three');
      }
      if (count === 4) {
        tile.classList.add('four');
      }
      if (count === 5) {
        tile.classList.add('five');
      }
      if (count === 6) {
        tile.classList.add('six');
      }
      if (count === 7) {
        tile.classList.add('seven');
      }
      if (count === 8) {
        tile.classList.add('eight');
      }
      return;
    }

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        openTile(row + y, column + x);
      }
    }
  }
}

initGame(boardSize, bombsCount);

function isValidTile(row, column) {
  return row >= 0 && column >= 0
        && row < boardSize
        && column < boardSize;
}

function isBomb(row, column) {
  if (!isValidTile(row, column)) return false;
  const tileIndex = row * boardSize + column;
  return bombs.includes(tileIndex);
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

easyMode.addEventListener('click', () => {
  boardWrapper.style.width = '260px';
  board.style.gridTemplateColumns = 'repeat(10, 25px)';
  boardSize = 10;
  stopTimer();
  initGame(boardSize, bombsCount);
});

mediumMode.addEventListener('click', () => {
  boardWrapper.style.width = '385px';
  board.style.gridTemplateColumns = 'repeat(15, 25px)';
  boardSize = 15;
  stopTimer();
  initGame(boardSize, bombsCount);
});

hardMode.addEventListener('click', () => {
  boardWrapper.style.width = '635px';
  board.style.gridTemplateColumns = 'repeat(25, 25px)';
  boardSize = 25;
  stopTimer();
  initGame(boardSize, bombsCount);
});

startNewGame.addEventListener('click', () => {
  bombsCount = 10;
  changeBombsCount.value = bombsCount;
  bombsCountLabel.textContent = `Amount of Bombs: ${bombsCount}`;
  stopTimer();
  initGame(boardSize, bombsCount);
});
