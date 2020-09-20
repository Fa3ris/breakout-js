import { Ball } from './model/ball.js';
import { Paddle } from './model/paddle.js';
import { Handler } from './handler/handler.js';
import { PaddleHandler } from './handler/paddleHandler.js';
import conf from './conf.js';
import { ResetHandler } from './handler/resetHandler.js';
import { Game } from './model/game.js';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = conf.WIDTH;
canvas.height = conf.HEIGHT;

document.body.appendChild(canvas);

const ball = new Ball(conf.BALL_RADIUS, conf.BALL_COLOR);
const paddle = new Paddle(conf.PADDLE_WIDTH, conf.PADDLE_HEIGHT, conf.PADDLE_COLOR);

const paddleHandler = new PaddleHandler(paddle);

const resetHandler = new ResetHandler([ball, paddle]);

const handler = new Handler(paddleHandler, resetHandler);

const game = new Game(ctx, handler, ball, paddle);

document.addEventListener("keydown", game.handler);
document.addEventListener("keyup", game.handler);
document.addEventListener("ball-oob", game.handler);


export {
    ctx,
    ball,
    paddle,
    handler,
    game,
};