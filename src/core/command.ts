/*
 * @Author: joycewil 1404241558@qq.com
 * @Date: 2022-06-06 15:30:44
 * @LastEditors: lixiaoming 1404241558@qq.com
 * @LastEditTime: 2022-06-29 19:38:00
 * @Description: command core
 */

import Minder from "./minder";
import { COMMAND_STATE } from "../config/enum";

export default abstract class Command {
  // readonly const for command state
  static readonly NORMAL = COMMAND_STATE.COMMAND_STATE_NORMAL;
  static readonly ACTIVE = COMMAND_STATE.COMMAND_STATE_ACTIVE;
  static readonly DISABLED = COMMAND_STATE.COMMAND_STATE_DISABLED;

  // flag for check minder has changed
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

class MinderCommand extends Minder {
  private getCommand(name: string) {
    return {};
    // return this._commands[name]
  }
}

export { MinderCommand };
