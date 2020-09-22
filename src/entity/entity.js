export class Entity {

    constructor() {
        this.renderer;
        this.state;
        this.stateStack;
    }

    handleEvent(event){}

    update() {}

    draw(ctx) {}

    detectCollision() {}
}