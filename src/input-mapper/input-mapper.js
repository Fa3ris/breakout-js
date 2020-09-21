export class InputMapper {

    constructor(...observers) {

        this.mappedKeyInputs = new Array();
        this.inputSetObservers = new Array(...observers);
    }

    handleRawInput(event, gameState) {

        // process key input
        if (event.type === 'keydown') {

            const mappedKeyInput = gameState.mapRawInput(event);

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



        this.inputSetObservers.forEach(observer => {
            observer.notifyInputSet(inputSet);
        });


    }

    mergeKeyInputs(mappedKeyInputs) {

        const keyInputLabels = mappedKeyInputs.map(keyInput => keyInput.label);

        return new Set(keyInputLabels);
    }
}