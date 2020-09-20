import { Command } from "../command.js";

export class Stop extends Command {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.move = false;
    }
}