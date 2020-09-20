import { Move } from "./move.js";

export class MoveRight extends Move {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.direction = +1;
    }
}