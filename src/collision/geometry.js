export function computeDistSquared(x1, y1, x2, y2) {

    return  (x2 - x1) ** 2 + (y2 - y1) ** 2
}

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

