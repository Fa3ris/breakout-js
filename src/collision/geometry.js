import { Brick } from "../entity/brick/brick.js";

/**
 * squared euclidean distance
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 */
export function computeDistSquared(x1, y1, x2, y2) {

    return (x2 - x1) ** 2 + (y2 - y1) ** 2
}

/**
 * true if distance between circle center and closest rectangle edge is less than circle radius
 * @param {*} r rectangle 
 * @param {*} c circle
 */
export function axisAlignedRectCircleCollision(r, c) {
    let testX = c.x;
    let testY = c.y;

    if (c.x < r.x) {
        testX = r.x;
    } else if (c.x > r.x + r.w) {
        testX = r.x + r.w;
    }

    if (c.y < r.y) {
        testY = r.y;
    } else if (c.y > r.y + r.h) {
        testY = r.y + r.h
    }

    const distSquared = computeDistSquared(c.x, c.y, testX, testY)

    return distSquared <= c.r ** 2;
}

/**
 * true if distance between point (x, y) and circle center is less than circle radius
 * @param {*} x 
 * @param {*} y 
 * @param {*} c 
 */
export function axisAlignedIntersectEdgeCircle(x, y, c) {
    return computeDistSquared(x, y, c.x, c.y) <= c.r ** 2;
}


export function circleRelativeToRectangle(c, r) {

    const distX = (r.x + r.w / 2) - c.x;
    const distY = (r.y + r.h / 2) - c.y;

    // const circleRadius = c.r;
    // const rectangleRadius = Math.sqrt(r.w ** 2 + r.h ** 2) / 2;

    // const radiusSum = circleRadius + rectangleRadius;

    const length = Math.sqrt(computeDistSquared(c.x, c.y, (r.x + r.w / 2), (r.y + r.h / 2)));
    const unitX = distX / length;
    const unitY = distY / length;

    // velocity of circle relative to velocity of rectangle
    const relativeVelocityCircleX = c.vx - r.vx;
    const relativeVelocityCircleY = c.vy - r.vy;

    const speed = relativeVelocityCircleX * unitX + relativeVelocityCircleY * unitY;

    let impulse = (r instanceof Brick) ? 2 : 3;
    if (speed > 0) {
        c.vx = c.vx - impulse * speed * unitX;
        c.vy = c.vy - impulse * speed * unitY;

    }

}

export function collisionCircleRectangle(c, r) {

    return circleInRectangle(c, r)
        || leftIntersect(c, r)
        || topIntersect(c, r)
        || rightIntersect(c, r)
        || bottomIntersect(c, r);
}

export function circleInRectangle(c, r) {

    const res = 0 <= (c.x - r.x) && (c.x - r.x) <= r.w && 0 <= (c.y - r.y) && (c.y - r.y) <= r.h;
    if (res) {
        console.log('not idea what to do');
    }
    return res;
}

export function leftIntersect(c, r) {

    const res = (c.x - r.x) ** 2 <= c.r ** 2 && c.y >= r.y && c.y <= r.y + r.h;
    if (res) {
        c.x = r.x - c.r;
        c.vx = -c.vx;
    }
    return res;
}

export function topIntersect(c, r) {

    const res = (c.y - r.y) ** 2 <= c.r ** 2 && c.x >= r.x && c.x <= r.x + r.w;
    if (res) {
        c.y = r.y - c.r
        c.vy = -c.vy
    }
    return res;

}

export function rightIntersect(c, r) {
    const res = (c.x - r.x - r.w) ** 2 <= c.r ** 2 && c.y >= r.y && c.y <= r.y + r.h;
    if (res) {
        c.x = r.x + r.w + c.r;
        c.vx = -c.vx;
    }
    return res;

}

export function bottomIntersect(c, r) {
    const res = (c.y - r.y - r.h) ** 2 <= c.r ** 2 && c.x >= r.x && c.x <= r.x + r.w;
    if (res) {
        c.y = r.y + r.h + c.r;
        c.vy = -c.vy
    }
    return res;

}
