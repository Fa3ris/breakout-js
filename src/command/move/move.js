import { Command } from "../command.js";

export class Move extends Command {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.move = true;
    }
}