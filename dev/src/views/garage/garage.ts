import { getCars } from "../../api/api";
import { Car } from "../../models/Car";
import { createNewElement } from "../../components/createNewElement";
// import carSvg from "../../assets/img/car-img.svg";

const garageView = createNewElement("div", "garage-view");
document.body.appendChild(garageView);

export async function displayGarage(): Promise<void> {
  try {
    const cars: Car[] = await getCars();
    garageView.innerHTML = "";

    if (!cars.length) {
      const message = createNewElement("p", "no-car-message");
      message.textContent = "No cars found in the garage.";
      garageView.appendChild(message);
    } else {
      const carList = createNewElement("ul", "car-list");

      cars.forEach((car) => {
        const carItem = createNewElement("li", "car-item");

        const carName = createNewElement("span", "car-name");
        carName.textContent = car.name as string;
        carItem.appendChild(carName);

        const carColor = createNewElement("span", "car-color");
        carColor.textContent = car.color as string;
        carItem.appendChild(carColor);

        carList.appendChild(carItem);
      });

      garageView.appendChild(carList);
    }
  } catch (error) {
    console.error("Error", error);
  }
}
