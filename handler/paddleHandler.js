import { MoveLeft } from "./action/move/moveLeft.js";
import { MoveRight } from "./action/move/moveRight.js";
import { Stop } from "./action/move/stop.js";
import conf from '../conf.js'


export class PaddleHandler {


    keysPressed = {};

    constructor(paddle) {
        this.paddle = paddle;

        this.LEFT_CONTROL = conf.LEFT_CONTROL;
        this.RIGHT_CONTROL = conf.RIGHT_CONTROL;
    }

    handle(event) {

        this.updateKeysPressed(event);
        this.getAction(event).execute();

    }

    getAction(event) { 

        if (this.keysPressed[this.RIGHT_CONTROL]) {
            return new MoveRight(this.paddle, event);
        } else if (this.keysPressed[this.LEFT_CONTROL]) {
            return new MoveLeft(this.paddle, event);
        } else {
            return new Stop(this.paddle, event);
        }
    }


    updateKeysPressed(event) {

        if (event.type === 'keyup') {

            delete this.keysPressed[event.key];

        } else if (event.type === 'keydown') {

            if (event.key === this.LEFT_CONTROL) {

                delete this.keysPressed[this.RIGHT_CONTROL];
                this.keysPressed[event.key] = true;
                
            } else if (event.key === this.RIGHT_CONTROL) {
                
                delete this.keysPressed[this.LEFT_CONTROL];
                this.keysPressed[event.key] = true;
            }
        }
    }
}