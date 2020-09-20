export class ResetHandler {


    constructor(items) {
        this.items = items;
    }

    handle(event) {

        for (let item of this.items) {
            item = item.constructor.reset();
        }

    }
}