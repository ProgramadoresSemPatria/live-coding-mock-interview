import { Weather } from '../type';

export class WeatherMapper {
  static mapWeatherFromCity(data: Weather) {
    return {
      temperature: {
        current: data.main.temp,
        feelsLike: data.main.feels_like,
        maximum: data.main.temp_max,
        minimum: data.main.temp_min,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
      wind: {
        speed: data.wind.speed,
        direction: data.wind.deg,
      },
    }
  }
}

// -[] Current temperature
// -[] "Feels like" temperature
// - [] Maximum temperature today
//   - [] Minimum temperature today
// - [] Pressure
// - [] Humidity
// - [] Wind speed
//   - [] Wind direction
