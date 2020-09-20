import { Move } from "./move.js";

export class MoveLeft extends Move {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.direction = -1;
    }
}