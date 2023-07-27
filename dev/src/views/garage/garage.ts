/* eslint-disable no-param-reassign */
import { generateRandomName } from "../../utils/generateRandomName";
import { generateRandomColor } from "../../utils/generateRandomColor";
import {
  getCars,
  deleteCar,
  createCar,
  updateCar,
  startStopCarEngine,
  switchCarEngineToDriveMode,
  getTotalCarCount,
  createWinner,
  updateWinner,
  getWinner,
} from "../../api/api";
import { Car } from "../../models/Car";
import { createNewElement } from "../../utils/createNewElement";
import { carSvg } from "../../assets/img/carSvg";

class Garage {
  garageContainer: HTMLElement | null;

  carNameInput: HTMLInputElement | null;

  carColorInput: HTMLInputElement | null;

  createCarButton: HTMLButtonElement | null;

  updateCarButton: HTMLButtonElement | null;

  carUpdateNameInput: HTMLInputElement | null;

  carUpdateColorInput: HTMLInputElement | null;

  generateCarsButton: HTMLButtonElement | null;

  resetRaceButton: HTMLButtonElement | null;

  raceButton: HTMLButtonElement | null;

  selectedCar: Car | null;

  currentPage: number = 1;

  carsPerPage: number = 7;

  totalCount: number;

  abortController: AbortController | null;

  // animationRequestId: number | null;

  constructor() {
    this.garageContainer = null;
    this.carNameInput = null;
    this.carColorInput = null;
    this.createCarButton = null;
    this.updateCarButton = null;
    this.selectedCar = null;
    this.carUpdateNameInput = null;
    this.carUpdateColorInput = null;
    this.generateCarsButton = null;
    this.resetRaceButton = null;
    this.raceButton = null;
    this.totalCount = 1;
    this.abortController = null;
    this.addEventListeners();
  }

  initGarage() {
    this.render();
    this.displayCars();
    this.addEventListeners();
  }

  render(): void {
    const main = document.querySelector(".main");
    if (!main) {
      throw new Error("Main element not found.");
    }

    const garageContainer = createNewElement("div", "garage-container");
    garageContainer.innerHTML = `
      <h2 class="garage-container__title">Garage</h2>
      <div class="form-container">
        <div class="form-container__create-car">
          <input class="create-car__car-name-input" type="text" placeholder="Car Name" />
          <input class="create-car__car-color-input" type="color" />
          <button class="buttons create-car__button">Create</button>
        </div>
        <div class="form-container__update-car">
          <input class="update-car__car-name-input" type="text" placeholder="Car Name" />
          <input class="update-car__car-color-input" type="color" />
          <button class="buttons update-car__button">Update</button>
        </div>
        <div class="form-container__buttons">
          <button class="buttons buttons__race">Race</button>
          <button class="buttons buttons__reset">Reset</button>
          <button class="buttons buttons__generate">Generate cars</button>
        </div>
      </div>
      <div class="pagination-container"></div>
      <div class="car-list"></div>
    `;

    main.appendChild(garageContainer);
    this.garageContainer = garageContainer;
    this.carNameInput = document.querySelector(".create-car__car-name-input");
    this.carColorInput = document.querySelector(".create-car__car-color-input");
    this.carUpdateNameInput = document.querySelector(
      ".update-car__car-name-input",
    );
    this.carUpdateColorInput = document.querySelector(
      ".update-car__car-color-input",
    );
    this.createCarButton = document.querySelector(".create-car__button");
    this.updateCarButton = document.querySelector(".update-car__button");
    this.generateCarsButton = document.querySelector(".buttons__generate");
    this.resetRaceButton = document.querySelector(".buttons__reset");
    this.raceButton = document.querySelector(".buttons__race");
  }

  async displayCars(): Promise<void> {
    try {
      const cars: Car[] = await getCars(this.currentPage, this.carsPerPage);
      const totalCount = await getTotalCarCount();

      if (this.garageContainer) {
        const carList = this.garageContainer.querySelector(".car-list");

        if (carList) {
          carList.innerHTML = "";
          cars.forEach((car) => {
            this.addCarToList(car);
          });
        }
      }
      const totalPages = Math.ceil(totalCount / this.carsPerPage);

      this.renderPaginationButtons(totalPages);
    } catch (error) {
      console.error("errror", error);
    }
  }

  renderPaginationButtons(totalPages: number): void {
    if (this.garageContainer) {
      const paginationContainer = this.garageContainer.querySelector(
        ".pagination-container",
      );

      if (paginationContainer) {
        paginationContainer.innerHTML = "";

        const prevButton = createNewElement(
          "button",
          "pagination-prev-button",
        ) as HTMLButtonElement;
        prevButton.classList.add("buttons");
        prevButton.textContent = "Previous";
        prevButton.disabled = this.currentPage === 1;
        prevButton.addEventListener("click", () =>
          this.handlePrevButtonClick(),
        );
        paginationContainer.appendChild(prevButton);

        const currentPageBlock = createNewElement(
          "div",
          "current-page",
        ) as HTMLElement;

        currentPageBlock.textContent = `Page #${this.currentPage}`;
        paginationContainer.appendChild(currentPageBlock);

        const totalCountInfo = createNewElement(
          "div",
          "total-count",
        ) as HTMLElement;
        totalCountInfo.textContent = `Garage (${this.totalCount})`;
        currentPageBlock.appendChild(totalCountInfo);

        const nextButton = createNewElement(
          "button",
          "pagination-next-button",
        ) as HTMLButtonElement;
        nextButton.classList.add("buttons");
        nextButton.textContent = "Next";
        nextButton.disabled = this.currentPage === totalPages;

        nextButton.addEventListener("click", () =>
          this.handleNextButtonClick(),
        );
        paginationContainer.appendChild(nextButton);

        getTotalCarCount()
          .then((totalCount) => {
            this.totalCount = totalCount;
            totalCountInfo.textContent = `Garage (${this.totalCount})`;
            nextButton.disabled = this.currentPage === totalPages;
          })
          .catch((error) => {
            console.error("Error fetching total car count:", error);
          });
        currentPageBlock.appendChild(totalCountInfo);
      }
    }
  }

  handlePrevButtonClick(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.renderPaginationButtons(
        Math.ceil(this.totalCount / this.carsPerPage),
      );
      this.displayCars();
      this.saveGarageState();
    }
  }

  handleNextButtonClick(): void {
    this.currentPage += 1;
    this.renderPaginationButtons(Math.ceil(this.totalCount / this.carsPerPage));
    this.displayCars();
    this.saveGarageState();
  }

  saveGarageState(): void {
    const currentState = {
      currentPage: this.currentPage,
      carNameInput: this.carNameInput?.value,
      carColorInput: this.carColorInput?.value,
    };
    sessionStorage.setItem("garageState", JSON.stringify(currentState));
  }

  async createRandomCars(): Promise<void> {
    try {
      const numberOfCars = 100;
      const randomCars: Car[] = [];
      const promises: Promise<Car>[] = [];

      for (let i = 0; i < numberOfCars; i += 1) {
        const randomName = generateRandomName();
        const randomColor = generateRandomColor();

        const newCar: Car = {
          name: randomName,
          color: randomColor,
        };
        promises.push(createCar(newCar));
      }
      const createdCars = await Promise.all(promises);
      randomCars.push(...createdCars);

      this.displayCars();
    } catch (error) {
      console.error(error);
    }
  }

  createCarImage(color: string): string {
    const updatedSvgCode = carSvg.replace(/#000000/g, color);
    const resultSvgCode = updatedSvgCode.replace(
      /url\(#linearGradient3889\)/g,
      color,
    );
    return resultSvgCode;
  }

  addCarToList(car: Car): void {
    if (this.garageContainer) {
      const carList = this.garageContainer.querySelector(".car-list");

      if (carList) {
        const carBlock = createNewElement("div", "car-block");
        const placeholderColor: string = "#000000";
        const color = car.color || placeholderColor;
        carBlock.innerHTML = `
        <div class="car-block__control-btns">
          <button class="buttons select-car-button">Select 👆</button>
          <button class="buttons remove-car-button">Remove 🗑️</button>
          <p class="car-name">${car.name}</p>
        </div>
        <div class="car-block__track">
          <button class="buttons start-car-button">A</button>
          <button class="buttons stop-car-button">B</button>
          <div class="car-image" id="${car.id}">
            ${this.createCarImage(color)}
          </div>
          <img class="flag-image" src="./assets/img/flag-icon.svg">
          <div class="line"></div>
        </div>
        `;

        const selectCarButton = carBlock.querySelector(".select-car-button");
        const removeCarButton = carBlock.querySelector(".remove-car-button");

        selectCarButton?.addEventListener("click", () =>
          this.handleSelectedCar(car),
        );
        removeCarButton?.addEventListener("click", () =>
          this.handleRemoveCar(car),
        );

        const startButton = carBlock.querySelector(
          ".start-car-button",
        ) as HTMLButtonElement;
        const stopButton = carBlock.querySelector(
          ".stop-car-button",
        ) as HTMLButtonElement;
        stopButton.disabled = true;

        startButton.addEventListener("click", () =>
          this.handleStartCarClick(car, startButton, stopButton),
        );
        stopButton.addEventListener("click", () =>
          this.handleStopCarClick(car, startButton, stopButton),
        );

        carList.appendChild(carBlock);
      }
    }
  }

  handleStartCarClick(
    car: Car,
    startButton: HTMLButtonElement,
    stopButton: HTMLButtonElement,
  ) {
    try {
      if (stopButton && startButton) {
        startButton.disabled = true;
        stopButton.disabled = false;
        const controller = new AbortController();
        const { signal } = controller;
        this.startAnimation(car, signal);
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleStopCarClick(
    car: Car,
    startButton: HTMLButtonElement,
    stopButton: HTMLButtonElement,
  ) {
    try {
      if (stopButton && startButton) {
        startButton.disabled = false;
        stopButton.disabled = true;
        this.stopAnimation(car);
      }
    } catch (error) {
      console.log(error);
    }
  }

  saveInputsState() {
    const currentState = {
      currentPage: this.currentPage,
      carNameInput: this.carNameInput?.value,
      carColorInput: this.carColorInput?.value,
    };

    sessionStorage.setItem("garageState", JSON.stringify(currentState));
  }

  addEventListeners(): void {
    if (this.createCarButton) {
      this.createCarButton.addEventListener(
        "click",
        this.handleCreateCarClick.bind(this),
      );
    }

    if (this.updateCarButton) {
      this.updateCarButton.addEventListener(
        "click",
        this.handleUpdateCarClick.bind(this),
      );
    }

    if (this.generateCarsButton) {
      this.generateCarsButton.addEventListener(
        "click",
        this.handleGenerateCarsClick.bind(this),
      );
    }

    if (this.resetRaceButton) {
      this.resetRaceButton.disabled = true;
      this.resetRaceButton.addEventListener(
        "click",
        this.handleResetRaceClick.bind(this),
      );
    }

    if (this.raceButton) {
      this.raceButton.disabled = false;
      this.raceButton.addEventListener(
        "click",
        this.handleRaceClick.bind(this),
      );
    }

    if (this.carNameInput) {
      this.carNameInput.addEventListener("input", () => {
        this.saveInputsState();
      });
    }

    if (this.carColorInput) {
      this.carColorInput.addEventListener("input", () => {
        this.saveInputsState();
      });
    }
  }

  async handleGenerateCarsClick(): Promise<void> {
    try {
      await this.createRandomCars();
    } catch (error) {
      console.error("Error generating random cars", error);
    }
  }

  async handleResetRaceClick(): Promise<void> {
    try {
      if (
        this.resetRaceButton?.disabled === false &&
        this.raceButton?.disabled === true
      ) {
        this.raceButton.disabled = false;
        this.resetRaceButton.disabled = true;
      }
      if (this.abortController) {
        this.abortController.abort();
        this.abortController = null;
        const cars = document.querySelectorAll(".car-image");
        cars.forEach(async (carElement) => {
          const carId = carElement.id;
          const car: Car = {
            id: +carId,
          };
          await startStopCarEngine(car.id!, "stopped");
        });
      }
      this.displayCars();
    } catch (error) {
      console.error("Error reset cars", error);
    }
  }

  showWinnerMessage(winnerMessage: string) {
    const popupContainer = createNewElement("div", "popup-container");
    const popupContent = createNewElement("div", "popup-content");
    popupContainer.appendChild(popupContent);
    this.garageContainer?.append(popupContainer);

    popupContent.textContent = winnerMessage;
    popupContainer.style.display = "block";
    setTimeout(() => {
      popupContainer.style.display = "none";
    }, 3000);
  }

  async handleRaceClick(): Promise<void> {
    const carsDB = await getCars(this.currentPage, this.carsPerPage);
    this.abortController = new AbortController();
    const { signal } = this.abortController;
    const cars = document.querySelectorAll(".car-image");

    const animations = Array.from(cars).map(async (carElement) => {
      const carId = carElement.id;

      const car: Car = {
        id: +carId,
      };

      return this.startAnimation(car, signal);
    });

    const animationTimes = await Promise.all(animations);
    const bigNumber = 9999999;
    const validAnimationTimes = animationTimes.map((time) => {
      if (time === -1) {
        time = bigNumber;
      }
      return time;
    });

    if (validAnimationTimes.length === 0) {
      console.log("All animations failed. No winner.");
      return;
    }
    const minTime = Math.min(...validAnimationTimes);
    const winnerCarIndex = validAnimationTimes.indexOf(minTime);
    const winnerCar = carsDB[winnerCarIndex];
    const winnerCarName = winnerCar.name;
    const winnerTime = (minTime / 1000).toFixed(2);

    const winnerData = {
      id: winnerCar.id,
      wins: 1,
      time: +winnerTime,
      name: winnerCarName,
      color: winnerCar.color,
    };

    try {
      const existingWinner = await getWinner(winnerCar.id!);

      if (existingWinner) {
        const updatedWinnerData = {
          ...existingWinner,
          wins: existingWinner.wins! + 1,
          time: winnerData.time,
        };

        await updateWinner(winnerCar.id!, updatedWinnerData);
        console.log("Winner updated in the table.");
      } else {
        const response = await createWinner(winnerData);
        console.log("Winner added to the table:", response);
      }
    } catch (error) {
      console.log(`New winner ${winnerCarName} added`);
      createWinner(winnerData);
    }

    const winnerMessage = `${winnerCarName} won the race. Winner time: ${winnerTime}s`;
    this.showWinnerMessage(winnerMessage);
    this.disableRaceAndStartButtons();
  }

  disableRaceAndStartButtons(): void {
    if (this.raceButton && this.resetRaceButton) {
      this.raceButton.disabled = true;
      this.resetRaceButton.disabled = false;
    }

    const startButtons = document.querySelectorAll(".start-car-button");
    const stopButtons = document.querySelectorAll(".stop-car-button");

    startButtons.forEach((button) => {
      const startButton = button as HTMLButtonElement;
      startButton.disabled = true;
    });

    stopButtons.forEach((button) => {
      const stopButton = button as HTMLButtonElement;
      stopButton.disabled = true;
    });
  }

  handleCreateCarClick(): void {
    const carName = this.carNameInput?.value;
    const carColor = this.carColorInput?.value;

    if (carName && carColor) {
      const newCar: Car = {
        name: carName,
        color: carColor,
      };

      createCar(newCar);
      this.displayCars();
      this.resetInputField();
    }
  }

  handleUpdateCarClick(): void {
    const carUpdateName = this.carUpdateNameInput?.value;
    const carUpdateColor = this.carUpdateColorInput?.value;

    if (carUpdateName && carUpdateColor) {
      const updatedCar: Car = {
        id: this.selectedCar?.id,
        name: carUpdateName,
        color: carUpdateColor,
      };

      if (updatedCar.id) {
        updateCar(updatedCar.id, updatedCar);
        this.displayCars();
        this.resetInputField();
      }
    }
  }

  handleSelectedCar(car: Car): void {
    this.selectedCar = car;

    if (this.updateCarButton) {
      this.updateCarButton.disabled = false;
    }

    if (this.carUpdateNameInput && this.carUpdateColorInput) {
      this.carUpdateNameInput.value = car.name as HTMLInputElement["value"];
      this.carUpdateColorInput.value = car.color as HTMLInputElement["value"];
    }
  }

  handleRemoveCar(car: Car): void {
    if (car.id) {
      this.deleteCarFromPage(car.id);
      this.displayCars();
      this.resetInputField();
    }
  }

  async deleteCarFromPage(carId: number): Promise<void> {
    try {
      await deleteCar(carId);
    } catch (error) {
      console.error("Erorr", error);
    }
  }

  resetInputField(): void {
    if (this.carNameInput && this.carColorInput) {
      this.carNameInput.value = "";
      this.carColorInput.value = "#000000";
    }

    if (this.carUpdateNameInput && this.carUpdateColorInput) {
      this.carUpdateNameInput.value = "";
      this.carUpdateColorInput.value = "#000000";
    }

    if (this.updateCarButton) {
      this.updateCarButton.disabled = true;
    }

    this.selectedCar = null;
  }

  async startAnimation(car: Car, signal: AbortSignal): Promise<number> {
    let animationRequestId: number | null = null;
    const { velocity, distance } = await startStopCarEngine(car.id!, "started");
    const animationTime = Math.round(distance / velocity);
    const carImage = document.getElementById(`${car.id}`) as HTMLElement;
    const flagImage = document.querySelector(".flag-image") as HTMLElement;
    const trackDistance =
      Math.abs(
        carImage.getBoundingClientRect().left -
          flagImage.getBoundingClientRect().left,
      ) + 60;
    const finishPosition = trackDistance;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const timePassed = currentTime - startTime!;
      const progress = timePassed / animationTime;

      if (progress > 1) {
        carImage.style.transform = `translateX(${finishPosition}px) scaleX(-1)`;
        return;
      }
      if (animationRequestId !== null) {
        const distancePassed = Math.round(progress * trackDistance);

        carImage.style.transform = `translateX(${Math.min(
          distancePassed,
          trackDistance,
        )}px) scaleX(-1)`;
      }
      animationRequestId = requestAnimationFrame(step);
    };

    animationRequestId = requestAnimationFrame(step);

    try {
      const response = await switchCarEngineToDriveMode(car.id!, signal);
      if (!response.success) {
        cancelAnimationFrame(animationRequestId!);
        return -1;
      }
      return animationTime;
    } catch (error) {
      cancelAnimationFrame(animationRequestId!);
      console.error("Error during switchCarEngineToDriveMode:", error);
      return -1;
    }
  }

  async stopAnimation(car: Car) {
    try {
      startStopCarEngine(car.id!, "stopped");
      // if (this.abortController !== null) {
      //   this.abortController.abort();
      //   this.abortController = null;
      // }
      this.displayCars();
    } catch (error) {
      console.error("Error stop cars", error);
    }
  }
}
export default Garage;
