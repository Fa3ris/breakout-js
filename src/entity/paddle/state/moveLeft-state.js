import { MoveRightState } from "./moveRight-state.js";
import { StopState } from "./stop-state.js";
import { MoveLeft } from "../../../command/move/moveLeft.js";

export class MoveLeftState {

    constructor(entity) {
        this.entity = entity;
        new MoveLeft(this.entity).execute();
    }

    processEvent(event) {
        const label = event.detail.label;

        switch (label) {
            case "LEFT_PRESS":
                break;

            case "RIGHT_PRESS":
                return new MoveRightState(this.entity);

            case "LEFT_RELEASE":
                return new StopState(this.entity);

            case "RIGHT_RELEASE":

                break;

            default:
                break;
        }
    }
}