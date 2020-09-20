import conf from '../../conf.js';

export class Game {

    constructor(ctx, handler) {
        this.ctx = ctx;
        this.handler = handler;

        this.gameState;
        this.entities;
    }

    initRenderer() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        this.a = 'hello';
    }

    initEntities() {
        
        
        let ball = new Ball(conf.BALL_RADIUS, conf.BALL_COLOR);
        let paddle = new Paddle(conf.PADDLE_WIDTH, conf.PADDLE_HEIGHT, conf.PADDLE_COLOR);
        
        this.entities = new Array(ball,paddle);
    }

    loga() {
        console.log(this.a);
    }

    update() {
        this.entities.forEach(element => {
            element.update();
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, conf.WIDTH, conf.HEIGHT);

        this.entities.forEach(element => {
            element.draw(this.ctx);
        });
    }

    reset() {
        this.entities.forEach(element => {
           element =  element.constructor.reset();
        });
    }

}