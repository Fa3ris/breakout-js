import { StopState } from "./stop-state.js";
import { MoveLeftState } from "./moveLeft-state.js";
import { MoveRight } from "../../../command/move/moveRight.js";

export class MoveRightState {

    constructor(entity) {
        this.entity = entity;
        new MoveRight(this.entity).execute()
    }

    processEvent(event) {
        const label = event.detail.label;

        switch (label) {
            case "LEFT_PRESS":
                return new MoveLeftState(this.entity);

            case "RIGHT_PRESS":
                break;

            case "LEFT_RELEASE":

                break;

            case "RIGHT_RELEASE":
                return new StopState(this.entity);

            default:
                break;
        }
    }
}