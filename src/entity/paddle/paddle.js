import conf from '/src/configuration/conf.js';
import { Entity } from '../entity.js';
import { StopState } from './state/stop-state.js';

export class Paddle extends Entity {

    constructor(w = 75, h = 10, color = '#0095DD') {
        super();

        this.state = new StopState(this);

        /* dimensions */
        this.w = w;
        this.h = h;

        /* position */
        this.x = (conf.WIDTH - this.w) / 2;
        this.y = conf.HEIGHT - this.h;

        this.color = color;

        /* state */
        this.move = false;
        this.direction = 1;

        this.force = 1;

        this.a = 0;
        this.vx = 0;
        this.vy = 0;

        this.dt = 1;

        this.friction = .9;

    }

    handleEvent(event) {
        this._handleEvent(event);
    }

    _handleEvent(event) {
        const state = this.state.processEvent(event);

        if (state) {
            this.state = state;
        }
    }

    update() {

        this.updateAcceleration();
        this.updateVelocity()
        this.updatePosition();
        this.checkOOB();

    }

    updateAcceleration() {
        if (this.move) {
            this.a = this.force * this.direction;
        } else {
            this.a = 0;
        }
    }

    updateVelocity() {
        this.vx = this.a * this.dt + this.vx;
        this.vx = this.friction * this.vx;
    }

    updatePosition() {
        this.x = this.vx * this.dt + this.x;
    }

    checkOOB() {
        if (this.x < 0) {
            this.x = 0;
            this.vx = 0;
        } else if (this.x > (conf.WIDTH - this.w)) {
            this.x = conf.WIDTH - this.w;
            this.vx = 0;
        }
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