import "./style.css";
import Garage from "./views/garage/garage";
import Header from "./views/header/header";

const header = new Header();
header.render();

const garage = new Garage();
garage.initGarage();
