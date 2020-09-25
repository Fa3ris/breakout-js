import { Game } from './entity/game/game.js';


(function () {

    const game = new Game();
    let oldTime = performance.now();
    main(oldTime);

    function main(timeFrame) {

        let cancelId = window.requestAnimationFrame(main);
        
        const elapsed = (timeFrame - oldTime) / 1000;

        oldTime = timeFrame;

        // Calculate fps
        const fps = Math.round(1 / elapsed);

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