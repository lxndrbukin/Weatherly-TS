import { AxiosResponse, AxiosPromise } from 'axios';

interface ModelAttributes {
  get(attr: string): object;
  set(attr: string, value: object): void;
}

interface Sync {
  fetch(data: string, city: string): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {
  constructor(private attributes: ModelAttributes, private sync: Sync, private events: Events) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(attr: string, update: object) {
    this.attributes.set(attr, update);
    this.events.trigger('change');
  }

  fetch(dataType: string, city: string): void {
    this.sync.fetch(dataType, city).then((res: AxiosResponse): void => {
      this.set(`${dataType}Data`, res.data);
    });
  }
}