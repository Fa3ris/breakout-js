import conf from '/src/configuration/conf.js';
import { Ball } from '../ball/ball.js';
import { Paddle } from '../paddle/paddle.js';
import { InputMapper } from '../../input-mapper/input-mapper.js';
import { PlayState } from './state/play-state.js';
import { PlayInputContext } from '../../input-context/play-input-context.js';
import { Entity } from '../entity.js';
import { Brick } from '../brick/brick.js';

export class Game extends Entity {

    constructor() {

        super();
        this._initCanvas();
        this._initGameState();
        this._initEntities();
        this._initInputMapper();
        this._addEventListeners();
    }

    _initCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = conf.WIDTH;
        this.canvas.height = conf.HEIGHT;

        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);
    }
    
    _initGameState() {
        this.gameState = new PlayState(new PlayInputContext());
    }

    _initEntities() {

        this.ball = this._createBall()
        this.paddle = this._createPaddle()
        this.bricks = this._createBricks();
        this.entities = new Array(this.ball, this.paddle, ...this.bricks);
    }
    
    _initInputMapper() {
        this.inputMapper = new InputMapper();
    }

    _createBall() {
        return new Ball(conf.BALL_RADIUS, conf.BALL_COLOR);
    }
    
    _createPaddle() {
        const paddle = new Paddle(conf.PADDLE_WIDTH, conf.PADDLE_HEIGHT, conf.PADDLE_COLOR);
        this._listenToKeyInput(paddle);
        return paddle;
    }

    _createBricks() {
        const rows = 3;
        const columns = 6;

        const w = 50;
        const h = 20;
        
        const marginRight = 12;
        const marginBotton = 10;
        
        const vOffset = 10;
        const hOffset = conf.WIDTH / 2 - (columns * w + (columns - 1) * marginRight) / 2;
        let x, y;

        const bricks = new Array();

        for (let i = 0; i < columns ; i++) {

            for (let j = 0; j < rows; j++) {
                x = hOffset + i * (w + marginRight);
                y = vOffset + j * (h + marginBotton);

                bricks.push(new Brick(x, y, w, h))
            }

        }
        return bricks;
    }
    
    _listenToKeyInput(entity) {
        document.addEventListener("mapped-keyinput", entity);
    }

    _addEventListeners() {
        document.addEventListener("keydown", this);
        document.addEventListener("keyup", this);
        document.addEventListener("OOB", this);
    }

    handleEvent(event) {
        if (event.type === 'OOB') {
            document.location.reload();
        }
        this.inputMapper.handleRawInput(event, this.gameState);
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

    detectCollision() {
        this.ball.detectCollision(this.paddle);
        for (const brick of this.bricks) {
            if (brick.active) {

                this.ball.detectCollision(brick);
            }
        }
    }

}