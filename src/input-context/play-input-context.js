import { InputContext } from "./input-context.js";
import { KeyInput } from "../input-mapper/mapped-input/key-input.js";

export class PlayInputContext extends InputContext {

    /**
     * map a rawInput to a normalized input
     * @param {*} event 
     */
    _map(event) {

       if (event.type === 'keydown') {
        
            if (event.code === 'ArrowLeft') {
                return new KeyInput(event, 'MOVE_PADDLE_LEFT');
            } else if (event.code === 'ArrowRight') {
                return new KeyInput(event, 'MOVE_PADDLE_RIGHT');
            }

        } else {
            return null;
        }
        // TODO handle go into menu state
    }


}