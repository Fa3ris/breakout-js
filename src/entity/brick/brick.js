export class Brick {


    constructor(x, y, w, h, color = '#0095DD') {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
        this.active = true;
    }



    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}