import { Car } from "../models/Car";

const BASE_URL = "http://127.0.0.1:3000";

// eslint-disable-next-line no-shadow
enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export async function request<T>(
  url: string,
  method: string = HttpMethod.GET,
  body: object | null = null,
): Promise<T> {

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Total-Count": "4",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Too many requests. Please try again later.");
    } else if (response.status === 500) {
      throw new Error(
        "Car has been stopped suddenly. It's engine was broken down.",
      );
    } else {
      throw new Error(`Request failed. Status: ${response.status}`);
    }
  }

  const data: T = await response.json();
  return data;
}

export async function getCars(page = 1, limit = 7): Promise<Car[]> {
  const data: Car[] = await request(`/garage?_page=${page}&_limit=${limit}`);
  console.log(data);
  return data;
}

export async function getCar(carId: number): Promise<Car> {
  const data: Car = await request(`/garage/${carId}`, HttpMethod.GET);
  return data;
}

export async function createCar(car: Car): Promise<Car> {
  const data: Car = await request(`/garage`, HttpMethod.POST, car);
  return data;
}

export async function updateCar(carId: number, car: Car): Promise<Car> {
  const data: Car = await request(`/garage/${carId}`, HttpMethod.PUT, car);
  return data;
}

export async function deleteCar(carId: number): Promise<void> {
  await request<void>(`/garage/${carId}`, HttpMethod.DELETE);
}

export async function deleteAllCars(): Promise<void> {
  try {
    const cars = await getCars();
    console.log(cars);
    console.log(cars.length);

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

export async function switchCarEngineToDriveMode(
  carId: number,
): Promise<{ success: boolean; error?: string }> {
  try {
    const data = await request<{ success: boolean }>(
      `/engine?id=${carId}&status=drive`,
      HttpMethod.PATCH,
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
