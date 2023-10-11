// import { Car } from "../models/Car";

export const BASE_URL = "http://127.0.0.1:3000";

// eslint-disable-next-line no-shadow
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

// sends HTTP requests to the server
export async function request<T>(
  url: string,
  method: string = HttpMethod.GET,
  body: object | null = null,
  signal: AbortSignal | null = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Total-Count": "4",
    },
    signal,
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
