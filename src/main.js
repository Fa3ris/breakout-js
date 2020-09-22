import { Game } from './entity/game/game.js';


(function () {

    const game = new Game();
    main();

    function main(timeFrame) {

        let cancelId = window.requestAnimationFrame(main);

        game.update();
        game.detectCollision();
        game.draw();

         if (timeFrame > Math.pow(10, 6)) {
            const style = 'color:red; font-weight: bold; font-size: 20px';
            console.log('%cstopping', style);
            window.cancelAnimationFrame(cancelId);
        }
    }

})();