import conf from '../conf.js';

export class Handler {

    constructor(paddleHandler, resetHandler) {
        this.paddleHandler = paddleHandler;
        this.resetHandler = resetHandler;
    }

    handleEvent(event) {

        const type = event.type;

        if (type === 'keydown' || type === 'keyup') {

            this.handleKeyboardEvent(event);
        }

        if (type === 'ball-oob') {
            // decrease player live 
            // and reset world

            this.resetHandler.handle(event);
            // alert("GAME OVER");
            // document.location.reload();
        }

    }

    handleKeyboardEvent(event) {
        const key = event.key;

        if (key === conf.LEFT_CONTROL || key === conf.RIGHT_CONTROL) {
            this.handlePaddleCommand(event);
        }
    }

    handlePaddleCommand(event) {
        this.paddleHandler.handle(event);
    }

}