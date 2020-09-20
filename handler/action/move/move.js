import { Action } from "../action.js";

export class Move extends Action {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.move = true;
    }
}