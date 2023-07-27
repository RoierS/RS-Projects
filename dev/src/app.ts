import "./style.css";
import Garage from "./views/garage/garage";
import Header from "./views/header/header";
import Winners from "./views/winners/Winners";

const header = new Header();
header.render();

// Function to show the Garage page
function showGaragePage() {
  header.clearMainContent();
  const garage = new Garage();

  const garageState = JSON.parse(sessionStorage.getItem("garageState") || "{}");
  if (garageState) {
    if (garageState.carNameInput) {
      garage.carNameInput = garageState.carNameInput;
    }
    if (garageState.carColorInput) {
      garage.carColorInput = garageState.carColorInput;
    }
    if (garageState.currentPage) {
      garage.currentPage = garageState.currentPage;
    }
  }

  garage.initGarage();
  garage.saveGarageState();
}

// Function to show the Winners page
function showWinnersPage() {
  header.clearMainContent();
  const winners = new Winners();
  const winnersState = JSON.parse(
    sessionStorage.getItem("winnersState") || "{}",
  );
  if (winnersState) {
    if (winnersState.currentPage) {
      winners.currentPage = winnersState.currentPage;
    }
  }
  winners.loadWinnersData();
  winners.render();
}

// Function to handle the view based on the hash in the URL
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
