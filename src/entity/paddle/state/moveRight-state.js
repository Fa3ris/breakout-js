import { Stop } from "../../../command/move/stop.js";
import { MoveLeft } from "../../../command/move/moveLeft.js";
import { StopState } from "./stop-state.js";
import { MoveLeftState } from "./moveLeft-state.js";

export class MoveRightState {

    constructor(entity) {
        this.entity = entity;
    }

    processInputSet(inputSet) {
        // console.log('%cto right state', 'color:blue');
        if (inputSet.has('MOVE_PADDLE_LEFT')) {
            // console.log('to left')
            new MoveLeft(this.entity).execute;
            return new MoveLeftState(this.entity);
        } else if (!inputSet.has('MOVE_PADDLE_RIGHT')) {
            // console.log('stop')
            new Stop(this.entity).execute();
            return new StopState(this.entity);
        } else {
            // console.log('continue to right')
            return null;
        }
    }
}