import { Options } from "types";

import MinderOptions from "./options";
// import { MinderCommand } from "./command";

export default class Minder {
  static readonly version = "2.0.0";
  constructor(userOptions: Partial<Options>) {
    this.inspectContainer(userOptions);
  }
  // // check container is valid
  private inspectContainer(options: Partial<Options>) {
    if (!options || !options.render)
      throw new Error(
        "please set a container, which can be a selector or a node<HTMLElement> "
      );

    const target = options.render;
    const element =
      target instanceof HTMLElement || document.querySelector(target);

    if (!element)
      throw new Error(
        "please set a container, which can be a selector or a node<HTMLElement> "
      );
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(Minder, [MinderOptions]);
