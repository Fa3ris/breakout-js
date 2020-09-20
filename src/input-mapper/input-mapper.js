export class InputMapper {

    constructor() {

        this.inputContext = undefined;
        this.mappedKeyInputs = [];
        this.keyInputPublisher = undefined;
        this.gameState = undefined;
    }

    handleRawInput(event) {

        // process key input
        if (event.type === 'keydown') {

            const mappedKeyInput = this.gameState.mapRawInput(event);
            
            if (mappedKeyInput) {
                this.mappedKeyInputs.push(mappedKeyInput);
            }
        }

        // TODO process mouse input
        // process other inputs


    }

    processInputs() {

        this.processKeyInputs();

    }
    
    processKeyInputs() {

        const mappedKeyInputs = this.mappedKeyInputs.splice(0);
        
        const inputSet = this.mergeKeyInputs(mappedKeyInputs);
    
        this.keyInputPublisher.publish(inputSet);
    }

    mergeKeyInputs(mappedKeyInputs) {

        const keyInputLabels = mappedKeyInputs.map(keyInput => keyInput.label);

        return new Set(keyInputLabels);
    }
}