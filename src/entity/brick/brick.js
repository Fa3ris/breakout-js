import { Entity } from "../entity.js"

export class Brick extends Entity {


    constructor(x, y, w, h, color = '#0095DD') {
        super();
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.active = true;
        this.lives = 1;
    }

    collisionDetected() {
        if (this.lives > 0) {
            this.lives--;
            this.color = '#FFA500'
        } else {
            this.active = false;
        }
    }

    draw(ctx) {
        if (this.active) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }
    }
}