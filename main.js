import { game } from './init.js'
import { Game } from './model/game.js';


(function () {

    function init() {
        const g = new Game();
        g.init();
        g.loga();
        game.draw();
        main();
    }

    function main(timeFrame) {

        let cancelId = window.requestAnimationFrame(main);

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