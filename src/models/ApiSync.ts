import axios, { AxiosPromise } from 'axios';

const apiKey = 'b4481a539c8d04c4536b6292f74c0a5f';

export class ApiSync {
  constructor(public rootUrl: string) { }

  fetch(dataType: string, city: string): AxiosPromise {
    return axios.get(`${this.rootUrl}/${dataType}?q=${city}&appid=${apiKey}&units=metric`);
  }
}
