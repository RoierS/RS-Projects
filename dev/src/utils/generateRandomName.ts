import { carBrands, carModels } from "./carsBrandsAndModels";

export function generateRandomName(): string {
  const randomBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const randomModel = carModels[Math.floor(Math.random() * carModels.length)];

  return `${randomBrand} ${randomModel}`;
}
