// export declare type StringValueKeys<T> = {
//   [P in keyof T]: T[P] extends string ? T[P] : never;
// };
// export declare type Key<T> = keyof StringValueKeys<T>;

// export declare type Value<T> = StringValueKeys<T>[keyof StringValueKeys<T>];
export declare const DEFAULT_OPTIONS: Options;
export default abstract class Minder {
  static readonly version: string;
}

export declare interface Options {
  render: HTMLElement | string;
  enableKeyReceiver: boolean;
  zoom: number[];
}
