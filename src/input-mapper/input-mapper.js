export class InputMapper {

    constructor() {}

    handleRawInput(event, gameState) {

        // process key input
        if (event.type === 'keydown' || event.type === 'keyup') {

            const mappedKeyInput = gameState.mapRawInput(event);

            if (mappedKeyInput) {
                this.dispatchKeyInput(mappedKeyInput);
            }
        }

        // TODO process mouse input
        // process other inputs
    }

    dispatchKeyInput(mappedKeyInput) {
        document.dispatchEvent(new CustomEvent('mapped-keyinput', {detail: mappedKeyInput}));
    }

}