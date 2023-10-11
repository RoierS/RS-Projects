import { Car } from "../../models/Car";
import { BASE_URL, HttpMethod, request } from "../apiHelpers";

// fetches a list of cars from the server
export async function getCars(page = 1, limit = 7): Promise<Car[]> {
  const data: Car[] = await request(`/garage?_page=${page}&_limit=${limit}`);
  return data;
}

// retrieves the total count of cars available on the server.
export async function getTotalCarCount(): Promise<number> {
  const response = await fetch(`${BASE_URL}/garage?_limit=1`);
  const totalCountHeader = response.headers.get("X-Total-Count");
  const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
  return totalCount;
}

// fetches a specific car from the server
export async function getCar(carId: number): Promise<Car> {
  const data: Car = await request(`/garage/${carId}`, HttpMethod.GET);
  return data;
}

// creates a new car on the server
export async function createCar(car: Car): Promise<Car> {
  const data: Car = await request(`/garage`, HttpMethod.POST, car);
  return data;
}

// updates an existing car on the server
export async function updateCar(carId: number, car: Car): Promise<Car> {
  const data: Car = await request(`/garage/${carId}`, HttpMethod.PUT, car);
  return data;
}

// deletes a car from the server
export async function deleteCar(carId: number): Promise<void> {
  await request<void>(`/garage/${carId}`, HttpMethod.DELETE);
}

// deletes all cars from the server but keeps at least four cars
export async function deleteAllCars(): Promise<void> {
  try {
    const cars = await getCars();

    if (cars.length > 4) {
      const excessCars = cars.slice(4);
      await Promise.all(
        excessCars.map(async (car) => {
          if (car.id) {
            await deleteCar(car.id);
          }
        }),
      );
      console.log("cars deleted");
    } else {
      console.log("no cars to delete");
    }
  } catch (error) {
    console.error("Error", error);
  }
}

// starts or stops the engine of a car on the server.
export async function startStopCarEngine(
  carId: number,
  status: "started" | "stopped",
): Promise<{ velocity: number; distance: number }> {
  const data = await request<{ velocity: number; distance: number }>(
    `/engine?id=${carId}&status=${status}`,
    HttpMethod.PATCH,
  );
  return data;
}

// switches the car's engine to "drive" mode on the server.
export async function switchCarEngineToDriveMode(
  carId: number,
  signal: AbortSignal,
): Promise<{ success: boolean; error?: string }> {
  try {
    const data = await request<{ success: boolean }>(
      `/engine?id=${carId}&status=drive`,
      HttpMethod.PATCH,
      null,
      signal,
    );
    return data;
  } catch (error) {
    console.log("Car has been stopped suddenly. It's engine was broken down.");
    return {
      success: false,
      error: "Car has been stopped suddenly. It's engine was broken down.",
    };
  }
}
