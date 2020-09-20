import { MappedInput } from "./mappedInput";

export class KeyInput extends MappedInput {   
    
    constructor(event, label) {

        // original event
        super(event);

        this.type = 'key-input';
        
        // context-dependent action
        this.label = label;
    }
}