export class InputContext {

    
    constructor() {}


    mapRawInput(rawInput) {

        if (this.active) {

            // try to map
            const mappedInput = this._map(rawInput);

            if (mappedInput) {
                return mappedInput;
            } else {
                // if cannot map => delegate
                return this._delegate(rawInput);
            }

        } else {
            return this._delegate(rawInput);
        }


    }

    /**
     * map a rawInput to a normalized input
     * @param {*} rawInput 
     */
     _map(rawInput) {
        throw new Error('must implement _map');
    }

    _delegate(rawInput) {
        if (this.delegate) {
            return this.delegate.map(rawInput);
        } else {
            return null;
        }
    }

}