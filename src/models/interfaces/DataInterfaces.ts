export interface WeatherData {
  name?: string;
  main?: {
    temp: number,
    feels_like: number,
    temp_max: number,
    temp_min: number,
    pressure: number,
    humidity: number;
  };
  weather?: [
    {
      description: string,
      icon: string;
    }
  ];
  wind?: {
    speed: number;
  };
}

export interface ForecastData {
  list?: [
    {
      dt_txt: string,
      dt: number,
      weather: [
        {
          description: string,
          icon: string;
        }
      ],
      main: {
        temp: number;
      };
    }
  ];
}