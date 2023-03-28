export class CanvasLocal {
    constructor(g, canvas) {
        this.rWidth = 12.0;
        this.rHeight = 10.0;
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 10;
        this.centerY = this.maxY / 10 * 8;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(g, xP, yP, xQ, yQ) {
        let x = xP, y = yP, d = 0, dx = xQ - xP, dy = yQ - yP, c, m, xInc = 1, yInc = 1;
        if (dx < 0) {
            xInc = -1;
            dx = -dx;
        }
        if (dy < 0) {
            yInc = -1;
            dy = -dy;
        }
        if (dy <= dx) {
            c = 2 * dx;
            m = 2 * dy;
            if (xInc < 0)
                dx++;
            for (;;) {
                g.fillRect(x, y, 1, 1);
                if (x == xQ)
                    break;
                x += xInc;
                d += m;
                if (d >= dx) {
                    y += yInc;
                    d -= c;
                }
            }
        }
        else {
            c = 2 * dy;
            m = 2 * dx;
            if (yInc < 0)
                dy++;
            for (;;) {
                g.fillRect(x, y, 1, 1);
                if (y == yQ)
                    break;
                y += yInc;
                d += m;
                if (d >= dy) {
                    x += xInc;
                    d -= c;
                }
            }
        }
    }
    drawCircle(g, xC, yC, r) {
        let x = 0, y = r, u = 1, v = 2 * r - 1, e = 0;
        while (x < y) {
            g.fillRect(xC + x, yC + y, 1, 1); // NNE
            g.fillRect(xC + y, yC - x, 1, 1); // ESE
            g.fillRect(xC - x, yC - y, 1, 1); // SSW
            g.fillRect(xC - y, yC + x, 1, 1); // WNW
            x++;
            e += u;
            u += 2;
            if (v < 2 * e) {
                y--;
                e -= v;
                v -= 2;
            }
            if (x > y)
                break;
            g.fillRect(xC + y, yC + x, 1, 1); // ENE
            g.fillRect(xC + x, yC - y, 1, 1); // SSE
            g.fillRect(xC - y, yC - x, 1, 1); // WSW
            g.fillRect(xC - x, yC + y, 1, 1); // NNW
        }
    }
    /*drawLine(x1: number, y1: number, x2: number, y2:number) {
      this.graphics.beginPath();
      this.graphics.moveTo(x1, y1);
      this.graphics.lineTo(x2, y2);
      this.graphics.closePath();
      this.graphics.stroke();
    }*/
    paint() {
        this.drawCircle(this.graphics, 320, 240, 50);
    }
}
