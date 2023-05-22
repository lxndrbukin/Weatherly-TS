import axios, { AxiosPromise } from 'axios';

const apiKey = 'b4481a539c8d04c4536b6292f74c0a5f';

export class ApiSync {
  constructor(public rootUrl: string) { }

  fetch(dataType: string, location: string | {lat: number, lon: number}): AxiosPromise {
    if (typeof location === 'object') {
      return axios.get(`${this.rootUrl}/${dataType}?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`);
    }
    return axios.get(`${this.rootUrl}/${dataType}?q=${location}&appid=${apiKey}&units=metric`);
  }
}
