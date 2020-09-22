export class OutboundState {

    constructor() {
        document.dispatchEvent(new CustomEvent('OOB'));
    }
}