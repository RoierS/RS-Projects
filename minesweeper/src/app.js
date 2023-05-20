/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import './style.css';
import createElement from './components/createElement';
import revealSound from './audio/reveal_sound.mp3';
import flagSound from './audio/flag_sound.mp3';
import bombSound from './audio/bomb_sound.mp3';
import winSound from './audio/win_sound.mp3';
import timerSound from './audio/timer_sound.mp3';
import gameOverSound from './audio/game-over_sound.mp3';

const wrapper = createElement('div', 'wrapper');
const title = createElement('h1', 'header');
const boardWrapper = createElement('div', 'board__wrapper');
const boardHeader = createElement('div', 'board__header');
const flagsCount = createElement('div', 'header__flags-count');
const smile = createElement('div', 'header__smile');
const timer = createElement('div', 'header__timer');
const board = createElement('div', 'board');
const boardContainer = createElement('div', 'board__container');
const modeBlock = createElement('div', 'mode-container');
const gameResult = createElement('div', 'game-result');
const changeBombsCount = createElement('input', 'select__bombs-count');
const bombsCountLabel = createElement('label', 'select__bombs--amount');
const selectBombsAmount = createElement('div', 'select-bombs__container');
const gameScore = createElement('div', 'score__container');
const gameScoreButton = createElement('button', 'score__button');
gameScoreButton.textContent = 'Score Table';

const easyMode = createElement('button', 'board__easy--mode');
const mediumMode = createElement('button', 'board__medium--mode');
const hardMode = createElement('button', 'board__hard--mode');

// Sounds

const revealSoundElement = createElement('audio', 'sound-effect');
revealSoundElement.src = revealSound;

const flagSoundElement = createElement('audio', 'sound-effect');
flagSoundElement.src = flagSound;

const bombSoundElement = createElement('audio', 'sound-effect');
bombSoundElement.src = bombSound;

const winSoundElement = createElement('audio', 'sound-effect');
winSoundElement.src = winSound;

const timerSoundElement = createElement('audio', 'sound-effect');
timerSoundElement.src = timerSound;

const gameOverSoundElement = createElement('audio', 'sound-effect');
gameOverSoundElement.src = gameOverSound;

function playSound(soundElement) {
  soundElement.currentTime = 0;
  soundElement.play();
}

function playTimerSound() {
  timerSoundElement.currentTime = 0;
  timerSoundElement.loop = true;
  timerSoundElement.volume = 0.3;
  timerSoundElement.addEventListener('canplaythrough', timerSoundPlayHandler);

  if (timerSoundElement.readyState >= 2) {
    timerSoundElement.play();
  }
}

function stopTimerSound() {
  timerSoundElement.pause();
  timerSoundElement.currentTime = 0;
  timerSoundElement.removeEventListener('canplaythrough', timerSoundPlayHandler);
}

function timerSoundPlayHandler() {
  timerSoundElement.play();
}

const startNewGame = createElement('button', 'board__new-game');
startNewGame.textContent = '🎮 New Game';
// let smileTextContent = smile.textContent;
smile.textContent = '0';

let bombsCount = 10;
title.textContent = 'Minesweeper Game';
changeBombsCount.value = '10';
changeBombsCount.type = 'range';
changeBombsCount.min = 10;
changeBombsCount.max = 99;
changeBombsCount.value = bombsCount;
bombsCountLabel.textContent = `💣 ${bombsCount}`;

// flagsCount.textContent = bombsCount;
easyMode.innerHTML = '💪 <br> Easy';
mediumMode.innerHTML = '💪💪 <br> Medium';
hardMode.innerHTML = '💪💪💪 <br> Hard';

const body = document.querySelector('body');
const toggleThemeBtn = createElement('button', 'toggle-theme-btn');
toggleThemeBtn.textContent = body.classList.contains('dark') ? '🌝' : '🌚';
const toggleTheme = () => {
  if (body.classList.contains('dark')) {
    toggleThemeBtn.textContent = '🌚';
    body.classList.remove('dark');
  } else {
    toggleThemeBtn.textContent = '🌝';
    body.classList.add('dark');
  }
};

toggleThemeBtn.addEventListener('click', toggleTheme);

document.body.append(wrapper);
wrapper.append(toggleThemeBtn, title, boardWrapper, gameResult, gameScore);
modeBlock.append(easyMode, mediumMode, hardMode);
selectBombsAmount.append(changeBombsCount, bombsCountLabel);
boardContainer.append(board);
// eslint-disable-next-line max-len
boardWrapper.append(boardHeader, selectBombsAmount, boardContainer, modeBlock, startNewGame, gameScoreButton);
boardHeader.append(flagsCount, smile, timer);

// variables

let boardSize = 10;
let flags = 0;
const tilesCount = boardSize * boardSize;
let firstClick = true;
let clicksCount = 0;
let seconds;

let bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);

changeBombsCount.addEventListener('change', () => {
  bombsCount = parseInt(changeBombsCount.value, 10);
  bombs = [...Array(tilesCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombsCount);
  initGame(boardSize, bombsCount);
  bombsCountLabel.textContent = `💣 ${bombsCount}`;
});

// timer

let timerInterval;
function startTimer() {
  seconds = 0;
  timer.textContent = '⏰ 0';
  timerInterval = setInterval(() => {
    seconds++;
    timer.textContent = `⏰ ${seconds}`;
    // saveGameState()
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Start game
let tileClickHandler;

function initGame(size, bombsCount) {
  // saveGameState();
  board.removeEventListener('click', tileClickHandler);
  clicksCount = 0;
  smile.textContent = `🖱️ ${clicksCount}`;
  stopTimer();
  timer.textContent = '⏰ 0';
  flags = 0;
  gameResult.innerHTML = '';
  firstClick = true;
  flagsCount.textContent = `🚩 ${bombsCount}`;
  const tilesCount = size * size;
  board.innerHTML = '<button class="board__tile"></button>'.repeat(tilesCount);
  const tiles = [...board.children];
  let closedTiles = tilesCount;

  tileClickHandler = (e) => {
    if (!e.target.classList.contains('board__tile')) {
      return;
    }
    const targetTile = tiles.indexOf(e.target);
    const column = targetTile % size;
    const row = Math.floor(targetTile / size);
    openTile(row, column);
    clicksCount++;

    smile.textContent = `🖱️ ${clicksCount}`;
    if (isBomb(row, column)) {
      playSound(bombSoundElement);
      setTimeout(() => {
        playSound(gameOverSoundElement);
      }, 2000);
      return;
    }
    playSound(revealSoundElement);
    // saveGameState();
  };

  board.addEventListener('click', tileClickHandler);

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
        flagsCount.textContent = `🚩 ${bombsCount - flags}`;
        playSound(flagSoundElement);
      } else {
        tile.classList.remove('flagged');
        tile.innerHTML = '';
        flags--;
        flagsCount.textContent = `🚩 ${bombsCount - flags}`;
      }
      // saveGameState();
    });
  });

  // open tile

  function openTile(row, column) {
    if (!isValidTile(row, column)) return;

    const tileIndex = row * boardSize + column;
    const tile = tiles[tileIndex];

    if (tile.disabled === true) return;

    tile.disabled = true;

    if (firstClick) {
      playTimerSound();
      firstClick = false;
      bombs = [...Array(tilesCount).keys()].filter((index) => index !== tileIndex)
        .sort(() => Math.random() - 0.5).slice(0, bombsCount);
      startTimer();
    }

    if (isBomb(row, column)) {
      tile.innerHTML = '💣';
      stopTimerSound();
      gameResult.innerHTML = 'YOOu LOOOSe!';

      bombs.forEach((bombIndex) => {
        // const bombRow = Math.floor(bombIndex / boardSize);
        // const bombColumn = bombIndex % boardSize;
        if (tileIndex !== bombIndex) {
          const bombTile = tiles[bombIndex];
          bombTile.innerHTML = '💣';
        }
        // saveGameState();
      });

      tiles.forEach((tile) => {
        tile.classList.add('disabled');
      });
      stopTimer();
      board.removeEventListener('click', tileClickHandler);
      showGameResult(`clicks made: ${clicksCount + 1}, time: ${seconds}`);
      return;
    }

    closedTiles--;
    if (closedTiles <= bombsCount) {
      gameResult.innerHTML = 'You Win!';
      setTimeout(() => {
        playSound(winSoundElement);
      }, 2000);
      tiles.forEach((tile) => {
        tile.classList.add('disabled');
      });
      bombs.forEach((bombIndex) => {
        if (tileIndex !== bombIndex) {
          const bombTile = tiles[bombIndex];
          bombTile.innerHTML = '💣';
        }
        // saveGameState();
      });
      stopTimer();
      board.removeEventListener('click', tileClickHandler);
      stopTimerSound();
      showGameResult(`clicks made: ${clicksCount + 1}, time: ${seconds}`);

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
// saveGameState();

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

// modes of game

easyMode.addEventListener('click', () => {
  boardWrapper.classList.add('easy-mode');
  board.classList.add('board__easy-mode');
  boardWrapper.classList.remove('medium-mode', 'hard-mode');
  board.classList.remove('board__medium-mode', 'board__hard-mode');
  boardSize = 10;
  stopTimer();
  stopTimerSound();
  board.removeEventListener('click', tileClickHandler);
  initGame(boardSize, bombsCount);
});

mediumMode.addEventListener('click', () => {
  boardWrapper.classList.add('medium-mode');
  board.classList.add('board__medium-mode');
  boardWrapper.classList.remove('easy-mode', 'hard-mode');
  board.classList.remove('board__easy-mode', 'board__hard-mode');
  boardSize = 15;
  stopTimer();
  stopTimerSound();
  board.removeEventListener('click', tileClickHandler);
  initGame(boardSize, bombsCount);
});

hardMode.addEventListener('click', () => {
  boardWrapper.classList.add('hard-mode');
  board.classList.add('board__hard-mode');
  boardWrapper.classList.remove('easy-mode', 'medium-mode');
  board.classList.remove('board__easy-mode', 'board__medium-mode');
  boardSize = 25;
  stopTimer();
  stopTimerSound();
  board.removeEventListener('click', tileClickHandler);
  initGame(boardSize, bombsCount);
});

// start new game

startNewGame.addEventListener('click', () => {
  bombsCount = 10;
  changeBombsCount.value = bombsCount;
  bombsCountLabel.textContent = `💣 ${bombsCount}`;
  stopTimer();
  stopTimerSound();
  board.removeEventListener('click', tileClickHandler);
  initGame(boardSize, bombsCount);
});

// score table

function saveResult(...result) {
  let results = localStorage.getItem('minesweeperResults');
  results = results ? JSON.parse(results) : [];
  results.push(result);
  if (results.length > 10) {
    results.shift();
  }
  localStorage.setItem('minesweeperResults', JSON.stringify(results));
}
function showGameResult(...result) {
  saveResult(...result);
  gameScore.innerHTML = result;
  showLatestResults();
}

function showLatestResults() {
  let results = localStorage.getItem('minesweeperResults');
  results = results ? JSON.parse(results) : [];

  if (results.length === 0) {
    gameScore.innerHTML = 'No results to display.';
    return;
  }

  const resultsList = createElement('ol', 'score__list');
  resultsList.textContent = 'Score table:';
  results.forEach((result) => {
    const listItem = createElement('li', 'score__list--item');
    listItem.textContent = result;
    resultsList.appendChild(listItem);
  });

  gameScore.innerHTML = '';
  gameScore.appendChild(resultsList);
}

gameScoreButton.addEventListener('click', () => {
  if (!gameScore.classList.contains('show')) {
    showLatestResults();
    gameScore.classList.add('show');
  } else {
    gameScore.classList.remove('show');
  }
});

// local storage not finished((

// function saveGameState() {
//   const gameState = {
//     boardSize,
//     bombsCount,
//     clicksCount,
//     flags,
//     seconds,
//     firstClick,
//     smileTextContent,
//   };

//   localStorage.setItem('minesweeperGameState', JSON.stringify(gameState));
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const gameState = localStorage.getItem('minesweeperGameState');
//   if (gameState) {
//     const savedState = JSON.parse(gameState);
//     console.log(savedState);
//     boardSize = savedState.boardSize;
//     bombsCount = savedState.bombsCount;
//     clicksCount = savedState.clicksCount;
//     flags = savedState.flags;
//     firstClick = savedState.firstClick;
//     bombs = savedState.bombs;
//     smileTextContent = savedState.smileTextContent;
//     seconds = savedState.seconds;
//     initGame(boardSize, bombsCount);
//   }
// });

// window.addEventListener('beforeunload', () => {
//   saveGameState();
// });
