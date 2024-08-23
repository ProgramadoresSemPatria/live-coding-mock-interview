import axios from 'axios';
import { WeatherMapper } from './mappers/mapper';

export class WeatherApi {
  static url = 'https://api.openweathermap.org/data/2.5';
  static apiKey = process.env.WEATHER_API_KEY;

  static async getWeatherByCity(city: string, options: {
    unit: 'standard' | 'metric' | 'imperial' | string | undefined,
  }) {
    try {
      const result = await axios.get(`${WeatherApi.url}/weather`, {
        params: {
          q: city,
          units: options.unit,
          appid: WeatherApi.apiKey
        }
      });

      return WeatherMapper.mapWeatherFromCity(result.data);
    } catch (err) {
      console.log(err);
    }
  }
}