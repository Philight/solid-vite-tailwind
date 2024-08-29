import { http, graphql, HttpResponse } from "msw";

// ====================================================================================

const generateTime = (number: number): string =>
  `${String(number).padStart(2, "0")}:00`;

const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateData = () =>
  [...Array(24).keys()].map((num) => ({
    Time: generateTime(num),
    Capacity: randomInteger(0, 2),
    OriginalCapacity: 2,
    Eco: Boolean(randomInteger(0, 1)),
  }));

// ====================================================================================

export const handlers = [
  http.get("/api/user/example", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get("/api/order/times", () => {
    return HttpResponse.json({
      Status: 200,
      Message: "OK",
      Data: generateData(),
    });
  }),
  graphql.query("ListMovies", () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            id: "6c6dba95-e027-4fe2-acab-e8c155a7f0ff",
            title: "The Lord of The Rings",
          },
          {
            id: "a2ae7712-75a7-47bb-82a9-8ed668e00fe3",
            title: "The Matrix",
          },
          {
            id: "916fa462-3903-4656-9e76-3f182b37c56f",
            title: "Star Wars: The Empire Strikes Back",
          },
        ],
      },
    });
  }),
];
