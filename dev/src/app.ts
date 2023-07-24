import "./style.css";
import Garage from "./views/garage/garage";
import Header from "./views/header/header";

// eslint-disable-next-line no-alert
alert("Please review this work at last cross-check date");

const header = new Header();
header.render();

const garage = new Garage();
garage.initGarage();
