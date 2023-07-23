import "./style.css";

import { displayGarage } from "./views/garage/garage";
import Header from "./views/header/header";

const header = new Header();
header.render();

displayGarage();
// import {
//   // getCars,
//   // getCar,
//   // createCar,
//   // updateCar,
// // deleteCar,
//   // deleteAllCars,
//   // startStopCarEngine,
//   // switchCarEngineToDriveMode,
// } from "./api/api";

// const someCar = {
//   name: "Mamba",
//   color: "black",
// };
// const newCar = {
//   name: "SuperMegaCar",
//   color: "black",
// };

// createCar(someCar);
// updateCar(8, newCar);
// getCar(3);
// deleteAllCars();
// getCars();

// getCars().then((data) => console.log(data));
// startStopCarEngine(2, "started");
// switchCarEngineToDriveMode(2);
