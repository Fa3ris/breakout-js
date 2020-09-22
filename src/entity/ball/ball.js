import conf from '/src/configuration/conf.js';
import { Entity } from '../entity.js';
import { InboundState } from './state/inbound-state.js';
import { OutboundState } from './state/outbound-state.js';

export class Ball extends Entity{

    constructor(r = 10, color = '#0095DD') {
        super();
        this.x = conf.WIDTH / 2;
        this.y = conf.HEIGHT - 30;
        this.r = r;
        this.dx = 2;
        this.dy = -2;
        this.color = color;

        this.state = new InboundState(this);
    }

    update() {
        this.updateX();
        this.updateY();
        this.checkOOB();
    }

    updateX() {
        if (this.x + this.dx < 0 + this.r || this.x + this.dx > conf.WIDTH - this.r) {
            this.dx = -this.dx;
        }
    
        this.x = this.x + this.dx;
    }
    
    updateY() {
        
        if (this.y + this.dy < 0 + this.r) {
            this.dy = -this.dy;
        }
    
        this.y = this.y + this.dy;
    }

    checkOOB() {
        if (this.isOOB()) {
            if (!(this.state instanceof OutboundState)) {

                this.state = new OutboundState();
            }
        }
    }

    isOOB() {
        return (this.y + this.r + this.dy > conf.HEIGHT);
    }

    detectCollision(paddle) {
        if (this.y + this.r > conf.HEIGHT - paddle.h
        && this.x > paddle.x && this.x < paddle.x + paddle.w) {
            this.dy = -this.dy;
            this.y = conf.HEIGHT - paddle.h - this.r;

        }
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}