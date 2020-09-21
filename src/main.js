import { Game } from './entity/game/game.js';


(function () {

    let game;

    function init() {
        game = new Game();
        game.draw();
        main();
    }

    function main(timeFrame) {

        let cancelId = window.requestAnimationFrame(main);

        game.processInputs();
        game.update();
        game.draw();

         if (timeFrame > Math.pow(10, 6)) {
            const style = 'color:red; font-weight: bold; font-size: 20px';
            console.log('%cstopping', style);
            window.cancelAnimationFrame(cancelId);
        }
    }

    init();
})();