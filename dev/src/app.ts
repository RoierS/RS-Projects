import "./style.css";
import Garage from "./views/garage/garage";
import Header from "./views/header/header";
import Winners from "./views/winners/Winners";

// eslint-disable-next-line no-alert
alert("Please review this work at last cross-check day");

const header = new Header();
header.render();

// const garage = new Garage();
// garage.initGarage();

function showGaragePage() {
  // const header = new Header();
  header.clearMainContent();
  // header.render();
  const garage = new Garage();
  garage.initGarage();
}

function showWinnersPage() {
  // const header = new Header();
  header.clearMainContent();
  const winners = new Winners();
  winners.render();
}

function handleView(): void {
  const { hash } = window.location;
  switch (hash) {
    case "#/":
      showGaragePage();
      break;
    case "#/winners":
      showWinnersPage();
      break;
    default:
      window.location.hash = "#/";
      break;
  }
}

window.addEventListener("hashchange", handleView);

handleView();
