import Minder from "./core/minder";
import Command from "./core/command";
import "./sugar-mind.css";

// import SM from "./core/index.js";
// import Minder from "./core/minder.js";
// import Command from "./core/command.tjs";
// import Node from "./core/node.ts";

// SM.use(Minder);
// SM.use(Command);
// SM.use(Node);

export default class SugarMind {
  static readonly Minder = Minder;
  static readonly Command = Command;
  // static readonly Event = Event;
  // static readonly Node = Node;
}
