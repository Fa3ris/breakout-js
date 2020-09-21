import { Entity } from "../entity.js";

export class Player extends Entity {

    constructor() {
        super();
        this.lives = 1;
        this.score = 0;

    }
}