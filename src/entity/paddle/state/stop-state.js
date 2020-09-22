import { MoveLeftState } from "./moveLeft-state.js";
import { MoveRightState } from "./moveRight-state.js";
import { Stop } from "../../../command/move/stop.js";

export class StopState {

    constructor(entity) {
        this.entity = entity;
        new Stop(this.entity).execute();
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