import conf from '/src/configuration/conf.js';
import { Entity } from '../entity.js';
import { InboundState } from './state/inbound-state.js';
import { OutboundState } from './state/outbound-state.js';
import { axisAlignedRectCircleCollision, axisAlignedIntersectEdgeCircle, circleRelativeToRectangle } from '../../collision/geometry.js';
import { Paddle } from '../paddle/paddle.js';
import { Brick } from '../brick/brick.js';

export class Ball extends Entity{

    constructor(r = 10, color = '#0095DD') {
        super();
        this.x = conf.WIDTH / 2;
        this.y = conf.HEIGHT - 30;
        this.r = r;
        this.vx = 2;
        this.vy = -1.5;
        this.color = color;
        this.dt = 1;

        this.state = new InboundState(this);
    }

    update() {
        this.updateX();
        this.updateY();
        this.checkOOB();
    }

    updateX() {
        if (this.x + this.vx < 0 + this.r || this.x + this.vx > conf.WIDTH - this.r) {
            this.vx = -this.vx;
        }
    
        this.x = this.x + this.vx * this.dt;
    }
    
    updateY() {
        
        if (this.y + this.vy < 0 + this.r) {
            this.vy = -this.vy;
        }
    
        this.y = this.y + this.vy * this.dt;
    }

    checkOOB() {
        if (!(this.state instanceof OutboundState) && this.isOOB()) {

            this.state = new OutboundState();
        }
    }

    isOOB() {
        return this.y + this.vy + this.r > conf.HEIGHT;
        // return (axisAlignedIntersectEdgeCircle(this.x, conf.HEIGHT, this));
    }

    detectCollision(entity) {

        if (entity instanceof Paddle) {

            if (axisAlignedRectCircleCollision(entity, this)) {
                circleRelativeToRectangle(this, entity);
                // this.vy = -this.vy;
                // this.y = conf.HEIGHT - entity.h - this.r;

                // TODO calculate collision response
            }
        } else if (entity instanceof Brick) {
            if (axisAlignedRectCircleCollision(entity, this)) {
                entity.collisionDetected();
                circleRelativeToRectangle(this, entity);
                // this.vy = -this.vy;
            }
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