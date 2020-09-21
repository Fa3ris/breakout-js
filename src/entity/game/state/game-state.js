export class GameState {

    constructor(inputContext) {
        this.inputContext = inputContext;
    }

    mapRawInput(event) {
        return this.inputContext.mapRawInput(event);
    }
}