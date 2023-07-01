import "./style.css";

interface Level {
  name: string;
  toDo: string;
  selector: string;
  htmlCode: string;
}

const gameboard = document.querySelector(
  ".gameboard__table"
) as HTMLElement | null;
const inputCss = document.querySelector(
  ".input-css"
) as HTMLInputElement | null;
const enterBtn = document.querySelector(
  ".enter-btn"
) as HTMLButtonElement | null;
const htmlFieldView = document.querySelector(
  ".html-field__view"
) as HTMLElement | null;
const task = document.querySelector(".task") as HTMLElement | null;

//levels
const levels: Level[] = [
  {
    name: "Level 1",
    toDo: "Select the plates",
    selector: "plate",
    htmlCode: `
    <plate></plate>
    <plate></plate>
    `,
  },
  {
    name: "Level 2",
    toDo: "Select the apple on the plate",
    selector: "plate apple",
    htmlCode: `
    <plate>
      <apple></apple>
    </plate>
    `,
  },
  {
    name: "Level 3",
    toDo: "Select the small apple on the plate",
    selector: ".small",
    htmlCode: `
    <plate>
      <apple></apple>
    </plate>
    <plate>
      <apple class="small"></apple>
    </plate>
    `,
  },
  {
    name: "Level 4",
    toDo: "Select the only small apple on the plate",
    selector: "apple.small",
    htmlCode: `
    <plate>
      <orange class="small"></orange>
    </plate>
    <plate>
      <apple class="small"></apple>
    </plate>
    `,
  },
];

// check win
function checkWin(correctSelector: string) {
  const enteredSelector = inputCss?.value;
  if (enteredSelector === correctSelector) {
    console.log("You Win!");
  } else {
    console.log("try again!");
  }
}

// load a level 
function loadLevel(levelIndex: number) {
  if (!gameboard || !htmlFieldView || !task || !inputCss) return;

  gameboard.innerHTML = "";
  htmlFieldView.innerHTML = "";
  inputCss.innerText = "";

  const level = levels[levelIndex];
  task.innerText = level.toDo;
  gameboard.innerHTML = level.htmlCode;
  console.log(gameboard);
  console.log(level.htmlCode);
  console.log(level.htmlCode.trim());
  htmlFieldView.textContent = level.htmlCode;

  enterBtn?.removeEventListener("click", handleEnterClick);
  enterBtn?.addEventListener("click", () => checkWin(level.selector));
}

loadLevel(0);

// load level when click on link
const levelLinks = document.querySelectorAll(".level-name");
levelLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    loadLevel(index);
  });
});

function handleEnterClick () {
  
}
