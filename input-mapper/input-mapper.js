export class InputMapper {


    inputContext;
    mappedInputs;
    publisher;

    constructor() {

    }

    handleRawInput(rawInput) {

        // process key input
        const mappedInput = this.inputContext.mapRawInput(rawInput);

        // TODO process mouse input
        // process other inputs


        if (mappedInput) {
            this.mappedInputs.push(mappedInput);
        }
    }

    processInputs() {

        const mappedInputs = this.mappedInputs.splice(0);

        const inputSet = mergeInputs(mappedInputs);
        
        this.publisher.publish(inputSet);
    }

    mergeInputs(mappedInputs) {
        const inputSet = new Set();

        mappedInputs.forEach(element => {
            inputSet.add(element.label);
        });

        return inputSet;
    }
}