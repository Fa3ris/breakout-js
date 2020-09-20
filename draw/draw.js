import { ctx, ball, paddle} from '../init.js';
import conf from '../conf.js'

export function draw() {
    ctx.clearRect(0, 0, conf.WIDTH, conf.HEIGHT);

    ball.draw(ctx);
    paddle.draw(ctx);
}