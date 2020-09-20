import { InputContext } from "./input-context.js";


export class MenuContext extends InputContext {


    /**
     * map a rawInput to a normalized input
     * @param {*} rawInput 
     */
    _map(rawInput) {
        throw new Error('must implement _map');
        // handle keys to move option
        // handle validation or cancel
        // handle exit menu
    }
}