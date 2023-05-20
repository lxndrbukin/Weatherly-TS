export class Attributes<T extends object> {
  constructor(private data: T) { }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(attr: string, update: T): void {
    Object.assign(this.data[attr], update);
    console.log(this.data);
  }

  getAll(): T {
    return this.data;
  }
}