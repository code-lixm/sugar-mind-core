export default class Theme {
  static register<T>(name: string, module: T) {
    console.log(name, module);
  }
}
