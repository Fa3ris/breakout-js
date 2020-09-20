import { InputContext } from "./input-context.js";
import { KeyInput } from "../keyInput.js";

export class PlayContext extends InputContext {

    

    /**
     * map a rawInput to a normalized input
     * @param {*} rawInput 
     */
    _map(event) {


        if (event.type === 'keyup') {

            // release event
        } else if (event.type === 'keydown') {
        
            if (event.code === 'arrowleft') {
                return new KeyInput(event, 'MOVE_PADDLE_LEFT');
            } else if (event.code === 'arrowRight') {
                return new KeyInput(event, 'MOVE_PADDLE_RIGHT');
            }

            // cannot map for now
        } else {
            return null;
        }
        // handle left and right keydown and keyup to move paddle
        // handle go into menu state
    }


}