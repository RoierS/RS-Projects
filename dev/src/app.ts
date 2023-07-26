import "./style.css";
import Garage from "./views/garage/garage";
import Header from "./views/header/header";
import Winners from "./views/winners/Winners";

const header = new Header();
header.render();

function showGaragePage() {
  header.clearMainContent();
  const garage = new Garage();
  garage.initGarage();
}

function showWinnersPage() {
  header.clearMainContent();
  const winners = new Winners();
  winners.loadWinnersData();
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
