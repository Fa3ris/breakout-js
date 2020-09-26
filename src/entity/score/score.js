import { Entity } from "../entity.js";

export class Score extends Entity {

    constructor() {
        super();
        this.score = 0;
    }

    draw(ctx) {
        ctx.save();
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+ this.score, 8, 20);
        ctx.restore();
    }

}