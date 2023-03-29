import { Point2D } from "./Point2D.js";
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
    iX(x) { return Math.round(x); }
    iY(y) { return Math.round(y); }
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
    middle(a, b) {
        return new Point2D((a.x + b.x) / 2, (a.y + b.y) / 2);
    }
    bezier(g, p0, p1, p2, p3) {
        let x0 = this.iX(p0.x), y0 = this.iY(p0.y), x3 = this.iX(p3.x), y3 = this.iY(p3.y);
        if (Math.abs(x0 - x3) <= 1 && Math.abs(y0 - y3) <= 1)
            this.drawLine(g, x0, y0, x3, y3);
        else {
            let a = this.middle(p0, p1), b = this.middle(p3, p2), c = this.middle(p1, p2), a1 = this.middle(a, c), b1 = this.middle(b, c), c1 = this.middle(a1, b1);
            this.bezier(g, p0, a, a1, c1);
            this.bezier(g, c1, b1, b, p3);
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
        //this.drawCircle(this.graphics, 320, 240, 50);
        //debugger
        this.bezier(this.graphics, new Point2D(50, 150), new Point2D(100, 50), new Point2D(180, 50), new Point2D(200, 100));
    }
}
