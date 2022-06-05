import { Options } from "../../types";
import MinderOptions from "./options";

export default class Minder {
  static readonly version = "2.0.0";
  constructor(options: Partial<Options>) {
    new MinderOptions(options);
  }
}
