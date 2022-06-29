import type { Options } from "types";

import Minder from "@/core/minder";
import Command from "@/core/command";
import Theme from "@/core/theme";

// import MinderOptions from "@/core/options";
import "./sugar-mind.css";

/**
 * @class: SugarMind
 * @classdesc: exposed instance
 */
export default class SugarMind {
  // mount special class
  static readonly Minder = Minder;
  static readonly Command = Command;
  static readonly Theme = Theme;

  constructor(options: Partial<Options>) {
    return new Minder(options);
  }

  // register different module
  static register<T>(name: string, module: T) {
    switch (name) {
      case "theme":
        Theme.register(name, module);
        break;

      default:
        break;
    }
  }
}
