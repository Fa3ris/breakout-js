import { MoveRight } from "../../../command/move/moveRight.js";
import { Stop } from "../../../command/move/stop.js";
import { MoveRightState } from "./moveRight-state.js";
import { StopState } from "./stop-state.js";

export class MoveLeftState {

    constructor(entity) {
        this.entity = entity;
    }

    processInputSet(inputSet) {
        // console.log('%cto left state', 'color:blue');
        if (inputSet.has('MOVE_PADDLE_RIGHT')) {
            // console.log('to right')
            new MoveRight(this.entity).execute;
            return new MoveRightState(this.entity);
        } else if (!inputSet.has('MOVE_PADDLE_LEFT')) {
            // console.log('stop')
            new Stop(this.entity).execute();
            return new StopState(this.entity);
        } else {
            // console.log('continue to left');
            return null;
        }
    }
}