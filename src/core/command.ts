// import type { CommandMap } from "../../types";

import Minder from "./minder";
import { COMMAND_STATE } from "../config/enum";
export default abstract class Command {
  static readonly NORMAL = COMMAND_STATE.COMMAND_STATE_NORMAL;
  static readonly ACTIVE = COMMAND_STATE.COMMAND_STATE_ACTIVE;
  static readonly DISABLED = COMMAND_STATE.COMMAND_STATE_DISABLED;
  private _contentChange = false;
  private _selectionChange = false;
  constructor() {
    this._contentChange = true;
    this._selectionChange = false;
  }
  execute() {
    throw new Error("Not Implement: Command.execute()");
  }
  set contentChange(value: boolean) {
    this._contentChange = value;
  }
  get contentChange() {
    return this._contentChange;
  }

  set selectionChange(value: boolean) {
    this._selectionChange = value;
  }

  get selectionChange() {
    return this._selectionChange;
  }

  get commandState() {
    return Command.NORMAL;
  }

  get commandValue() {
    return null;
  }
}

export const MinderCommand = class MinderCommand extends Minder {
  // private _commands = new Map<string, Command>();
  // private getCommnadByName(name: string) {
  //   return this._commands[name];
  // }
};
