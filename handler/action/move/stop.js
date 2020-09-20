import { Action } from "../action.js";

export class Stop extends Action {

    constructor(target, event) {
        super(target, event);
    }

    execute() {
        super.execute();
        this.target.move = false;
    }
}