import { Elysia, t } from "elysia";
import { WeatherApi } from './services/weather/weather-api';

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/weathers", ({ query, error }) => {
    if (!query.city) {
      return error(400);
    }

    const { unit } = query;

    return WeatherApi.getWeatherByCity(query.city!, {
      unit: unit
    });
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
