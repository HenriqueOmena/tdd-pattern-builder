import assert from "assert";
import faker from "faker";

export default function setAPI() {
  const MAX_ITEMS = 10;
  const carsOb1 = new Set();

  for (let i = 0; i < MAX_ITEMS; i++) {
    const car = {
      name: faker.vehicle.model(),
      releaseYear: faker.date.past().getFullYear(),
      available: faker.database.engine(),
      gasAvailable: true,
    };

    carsOb1.add(car);
  }

  console.log(carsOb1);
}

setAPI();
