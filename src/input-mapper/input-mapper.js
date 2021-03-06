export class InputMapper {

    constructor(...observers) {

        // this.mappedKeyInputs = new Array();
        this.inputSetObservers = new Array(...observers);
    }

    handleRawInput(event, gameState) {

        // process key input
        if (event.type === 'keydown' || event.type === 'keyup') {

            const mappedKeyInput = gameState.mapRawInput(event);

            if (mappedKeyInput) {
                this.dispatchKeyInput(mappedKeyInput);
                // this.mappedKeyInputs.push(mappedKeyInput);
            }
        }

        // TODO process mouse input
        // process other inputs


    }

    dispatchKeyInput(mappedKeyInput) {
        document.dispatchEvent(new CustomEvent('mapped-keyinput', {detail: mappedKeyInput}));
    }

    processInputs() {

        // this.processKeyInputs();

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