import { MoveLeft } from "../../../command/move/moveLeft.js";
import { MoveRight } from "../../../command/move/moveRight.js";
import { MoveLeftState } from "./moveLeft-state.js";
import { MoveRightState } from "./moveRight-state.js";
import { Stop } from "../../../command/move/stop.js";

export class StopState {

    constructor(entity) {
        this.entity = entity;
        new Stop(this.entity).execute();
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

    processEvent(event) {
        const label = event.detail.label;

        switch (label) {
            case "LEFT_PRESS":
                return new MoveLeftState(this.entity);

            case "RIGHT_PRESS":
                return new MoveRightState(this.entity);

            case "LEFT_RELEASE":

                break;

            case "RIGHT_RELEASE":

                break;

            default:
                break;
        }
    }
}