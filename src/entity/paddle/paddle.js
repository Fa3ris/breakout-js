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
        this.v = 0;

        this.dt = 1;

        this.friction = .9;

    }

    static reset() {
        return new Paddle();
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

    notifyInputSet(inputSet) {
        this._processInputSet(inputSet);
    }

    _processInputSet(inputSet) {
        const state = this.state.processInputSet(inputSet);
        
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
        this.v = this.a * this.dt + this.v;
        this.v = this.friction * this.v;
    }

    updatePosition() {
        this.x = this.v * this.dt + this.x;
    }

    checkOOB() {
        if (this.x < 0) {
            this.x = 0;
            this.v = 0;
        } else if (this.x > (conf.WIDTH - this.w)) {
            this.x = conf.WIDTH - this.w;
            this.v = 0;
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