import type { Options } from "../../types";

// import Minder from "./minder";
import { DEFAULT_OPTIONS } from "../config";

export default class MinderOptions {
  private options: Options;
  private readonly defaultOptions: Options = DEFAULT_OPTIONS;

  constructor(options: Partial<Options>) {
    this.defaultOptions = DEFAULT_OPTIONS;
    this.options = { ...this.defaultOptions, ...options };
  }

  setDefaultOptions(options: Partial<Options>) {
    this.options = { ...this.defaultOptions, ...options };
  }

  getOptions<T extends keyof Options>(key: T) {
    const options = { ...this.defaultOptions, ...this.options };
    return options[key] || options;
  }

  setOptions<K extends keyof Options, T extends Options>(key: K, value: T[K]) {
    this.options[key] = value;
  }
}
