import { Car } from "../../models/Car";
import { BASE_URL, HttpMethod, request } from "../apiHelpers";

// creates a new winner record on the server
export async function createWinner(newWinner: Car): Promise<Car> {
  const data: Car = await request(`/winners`, HttpMethod.POST, newWinner);
  return data;
}

// updates the data of an existing winner on the server
export async function updateWinner(
  id: number,
  winnerData: { wins: number; time: number },
): Promise<Car> {
  const response = await fetch(`${BASE_URL}/winners/${id}`, {
    method: HttpMethod.PATCH,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winnerData),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Winner not found.");
    } else {
      throw new Error(`Failed to update winner. Status: ${response.status}`);
    }
  }

  const data: Car = await response.json();
  return data;
}

// fetches a specific winner from the server
export async function getWinner(id: number): Promise<Car | null> {
  const data: Car = await request(`/winners/${id}`, HttpMethod.GET);
  return data;
}

// fetches a list of winners from the server
export async function getWinners(page: number, limit: number): Promise<Car[]> {
  const data: Car[] = await request(`/winners?_page=${page}&_limit=${limit}`);
  return data;
}

// return the total count of winners available on the server
export async function getTotalWinnersCount(): Promise<number> {
  const response = await fetch(`${BASE_URL}/winners?_limit=1`);
  const totalCountHeader = response.headers.get("X-Total-Count");
  const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
  return totalCount;
}
