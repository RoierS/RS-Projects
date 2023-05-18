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
wrapper.append(title, boardWrapper);
modeBlock.append(easyMode, mediumMode, hardMode);
selectBombsAmount.append(changeBombsCount, bombsCountLabel)
boardWrapper.append(boardHeader, selectBombsAmount, board, modeBlock, startNewGame);
boardHeader.append(flagsCount, smile, timer);


let boardSize = 10;
let flags = 0;
let gameOver = false;
const tilesCount = boardSize * boardSize;

let firstClick = true;

let bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);


changeBombsCount.addEventListener('change', () => {
  bombsCount = parseInt(changeBombsCount.value);
  bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);
  initGame(boardSize, bombsCount);
  bombsCountLabel.textContent = `Amount of Bombs: ${bombsCount}`;
 
})


function initGame(size, bombsCount) {
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
        console.log(tile);
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
      })

      return;
    }


    closedTiles--;
    if (closedTiles <= bombsCount && firstClick) {
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

startNewGame.addEventListener('click', () => {
  bombsCount = 10;
  changeBombsCount.value = bombsCount;
  bombsCountLabel.textContent = `Amount of Bombs: ${bombsCount}`;
  initGame(boardSize, bombsCount);
})












