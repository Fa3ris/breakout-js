import { ball, paddle } from '../init.js';

export function update() {
    updateBall();
    updatePaddle();
}

function updateBall() {
    ball.update();
}

function updatePaddle() {
    paddle.update();
}