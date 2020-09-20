import { MappedInput } from "./mappedInput";

export class KeyInput extends MappedInput {   
    
    constructor(event, label) {

        this.type = 'keyinput';
        // original event
        super(event);
        // context-dependent action
        this.label = label;
    }
}