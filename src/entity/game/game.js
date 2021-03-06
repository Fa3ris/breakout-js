import conf from '/src/configuration/conf.js';
import { Ball } from '../ball/ball.js';
import { Paddle } from '../paddle/paddle.js';
import { InputMapper } from '../../input-mapper/input-mapper.js';
import { PlayState } from './state/play-state.js';
import { PlayInputContext } from '../../input-context/play-input-context.js';
import { Entity } from '../entity.js';

export class Game extends Entity {

    constructor() {

        super();
        this._initEntities();
        this._initRenderer();
        this._initGameState();
        this._initInputMapper();
    }

    _initRenderer() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = conf.WIDTH;
        this.canvas.height = conf.HEIGHT;

        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);
    }

    _initEntities() {

        const ball = new Ball(conf.BALL_RADIUS, conf.BALL_COLOR);

        this.entities = new Array(ball, this._createPaddle());
    }

    _createPaddle() {
        const paddle = new Paddle(conf.PADDLE_WIDTH, conf.PADDLE_HEIGHT, conf.PADDLE_COLOR);
        this._listenToKeyInput(paddle);
        return paddle;
    }

    _listenToKeyInput(entity) {
        document.addEventListener("mapped-keyinput", entity);
    }

    _initGameState() {
        this.gameState = new PlayState(new PlayInputContext());
    }

    _initInputMapper() {
        this.inputMapper = new InputMapper(...this.entities, this);

        document.addEventListener("keydown", this);
        document.addEventListener("keyup", this);
    }

    handleEvent(event) {
        this.inputMapper.handleRawInput(event, this.gameState);
    }

    processInputs() {
        this.inputMapper.processInputs();
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

}