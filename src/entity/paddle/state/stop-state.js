import { MoveLeft } from "../../../command/move/moveLeft.js";
import { MoveRight } from "../../../command/move/moveRight.js";
import { MoveLeftState } from "./moveLeft-state.js";
import { MoveRightState } from "./moveRight-state.js";

export class StopState {

    constructor(entity) {
        this.entity = entity;
    }

    processInputSet(inputSet) {
        // console.log('%cstop state', 'color:blue');
        if (inputSet.has('MOVE_PADDLE_LEFT')) {
            // console.log('to left')
            new MoveLeft(this.entity).execute();
            return new MoveLeftState(this.entity);
        } else if (inputSet.has('MOVE_PADDLE_RIGHT')) {
            // console.log('to right')
            new MoveRight(this.entity).execute();
            return new MoveRightState(this.entity);
        } else {
            // console.log('stay still')
            return null;
        }
    }
}