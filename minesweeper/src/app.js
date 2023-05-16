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
