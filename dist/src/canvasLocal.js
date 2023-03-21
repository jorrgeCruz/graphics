export class CanvasLocal {
    constructor(g, canvas) {
        this.rWidth = 50.0;
        this.rHeight = 40.0;
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 10;
        this.centerY = this.maxY / 10 * 8;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    a(x, y, s) {
        /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
        this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
        
        */
        this.o(x, y, s);
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.0), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
    }
    b(x, y, s) {
        /*this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.2 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 0.8 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s));
       this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
       */ //Linea vertical
        this.o(x, y, s);
        this.drawLine(this.iX(x + 0), this.iY(y + 0.0 * s), this.iX(x + 0.0), this.iY(y + 1.7 * s));
    }
    c(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 0.8 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
    }
    d(x, y, s) {
        /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+2*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
        this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
        */
        this.o(x, y, s);
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 2 * s));
    }
    e(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0)); //bace de abajo
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s)); //digonal derecha abajo
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.5 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s)); //linea recta derecha
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.5 * s), this.iX(x + 0 * s), this.iY(y + 0.5 * s)); //linea de enmedio 
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s)); //diagonal derecha arriba
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s)); //bace arriba
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s)); //diagonal izquierda arriba 
        this.drawLine(this.iX(x + 0), this.iY(y + 0.8 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s)); //linea recta izquierda
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0)); //diagonal izquierda abajo
    }
    o(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.2 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 0.8 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
    }
    z(x, y, s) {
        this.drawLine(this.iX(x + 0 * s), this.iY(y + 1 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0 * s), this.iY(y + 0 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0 * s), this.iY(y + 0 * s), this.iX(x + 0.9 * s), this.iY(y + 0 * s));
    }
    g(x, y, s) {
        /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
        this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
        this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
        */
        this.o(x, y, s);
        //Tapa down J
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + -0.9 * s), this.iX(x + 0.9 * s), this.iY(y + -0.7 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + -0.9 * s), this.iX(x + 0.7 * s), this.iY(y + -0.9 * s));
        this.drawLine(this.iX(x + 0.1 * s), this.iY(y + -0.8 * s), this.iX(x + 0.2 * s), this.iY(y + -0.9 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + -0.7 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
    }
    s(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.3 * s));
        // this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0.6 * s), this.iX(x + 0.0 * s), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.3 * s), this.iX(x + 0.7 * s), this.iY(y + 0.6 * s));
        this.drawLine(this.iX(x + 0.85 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0.6 * s), this.iX(x + 0.2 * s), this.iY(y + 0.6 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        //this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
    }
    h(x, y, s) {
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y - 0 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 0 * s), this.iX(x + 0.0), this.iY(y + 2 * s));
    }
    k(x, y, s) {
        this.drawLine(this.iX(x), this.iY(y), this.iX(x), this.iY(y + 1.9 * s));
        this.drawLine(this.iX(x), this.iY(y + 0.5 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x), this.iY(y + 0.5 * s), this.iX(x + 0.9 * s), this.iY(y + 0 * s));
    }
    p(x, y, s) {
        this.o(x, y, s);
        this.drawLine(this.iX(x + 0), this.iY(y + 0.8 * s), this.iX(x + 0.0), this.iY(y + -0.8 * s));
    }
    t(x, y, s) {
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 0.), this.iX(x + 0.9 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.8 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 0), this.iX(x + 0.5 * s), this.iY(y + 1.5 * s));
    }
    x(x, y, s) {
        this.drawLine(this.iX(x + 0 * s), this.iY(y + 0 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0 * s), this.iY(y + 1 * s), this.iX(x + 0.9 * s), this.iY(y + 0 * s));
    }
    m(x, y, s) {
        this.drawLine(this.iX(x + 0), this.iY(y), this.iX(x), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.1 * s), this.iY(y + 1 * s), this.iX(x + 0), this.iY(y + 0.6 * s));
        this.drawLine(this.iX(x + 0.4 * s), this.iY(y + 1 * s), this.iX(x + 0.1 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0.6 * s), this.iX(x + 0.4 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 1 * s), this.iX(x + 0.45 * s), this.iY(y + 0.6 * s));
        this.drawLine(this.iX(x + 0.8 * s), this.iY(y + 1 * s), this.iX(x + 0.5 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.7 * s), this.iX(x + 0.8 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.7 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0), this.iX(x + 0.45 * s), this.iY(y + 0.6 * s));
    }
    y(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + (-0.6) * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s)); //diagonal mas larga 
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 0.1 * s), this.iX(x + 0.1 * s), this.iY(y + 1 * s));
    }
    u(x, y, s) {
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
    }
    n(x, y, s) {
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y));
    }
    j(x, y, s) {
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y - 0.4 * s), this.iX(x + 0.5 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 1.3 * s), this.iX(x + 0.5 * s), this.iY(y + 1.6 * s));
        this.drawLine(this.iX(x + 0.4 * s), this.iY(y + 1 * s), this.iX(x + 0.5 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.1 * s), this.iY(y - 0.9 * s), this.iX(x + 0.5 * s), this.iY(y - 0.4 * s));
        this.drawLine(this.iX(x - 0.3 * s), this.iY(y - 0.9 * s), this.iX(x + 0.1 * s), this.iY(y - 0.9 * s));
    }
    l(x, y, s) {
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 1.8 * s), this.iX(x + 0.35 * s), this.iY(y + 2 * s));
        this.drawLine(this.iX(x + 0.55 * s), this.iY(y + 0), this.iX(x + 0.45 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0.2 * s), this.iX(x + 0.45 * s), this.iY(y + 1.8 * s));
    }
    i(x, y, s) {
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0.0 * s), this.iX(x + 0.45 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 1.2 * s), this.iX(x + 0.45 * s), this.iY(y + 1.3 * s));
    }
    r(x, y, s) {
        this.drawLine(this.iX(x + 0.55 * s), this.iY(y + 1 * s), this.iX(x + 0.25 * s), this.iY(y + 0.6 * s));
        this.drawLine(this.iX(x + 0.25 * s), this.iY(y + 1 * s), this.iX(x + 0.25 * s), this.iY(y + 0.0 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 1 * s), this.iX(x + 0.55 * s), this.iY(y + 1 * s));
    }
    f(x, y, s) {
        //Esta digonal tiende a +X
        this.drawLine(this.iX(x + 0.0 * s), this.iY(y + 1.3 * s), this.iX(x + 0.2), this.iY(y + 1.6 * s));
        //Esta diagonal tiende a -X
        this.drawLine(this.iX(x + 0.6 * s), this.iY(y + 1.6), this.iX(x + 0.8 * s), this.iY(y + 1.3 * s));
        //this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
        //Linea vertical
        this.drawLine(this.iX(x + 0), this.iY(y + 1.3 * s), this.iX(x + 0.0), this.iY(y + 0.0 * s));
        //Horizontal up
        this.drawLine(this.iX(x + 0.6 * s), this.iY(y + 1.6 * s), this.iX(x + 0.2 * s), this.iY(y + 1.6 * s));
        //Horizontal down
        this.drawLine(this.iX(x + 0.0 * s), this.iY(y + 0.9 * s), this.iX(x + 0.5 * s), this.iY(y + 0.9 * s));
    }
    w(x, y, s) {
        this.drawLine(this.iX(x + 0.1 * s), this.iY(y + 0), this.iX(x + 0.4 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.4 * s), this.iY(y + 0), this.iX(x + 0.45 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0.2 * s), this.iX(x + 0.45 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.1 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.5 * s), this.iY(y + 0), this.iX(x + 0.8 * s), this.iY(y + 0));
        this.drawLine(this.iX(x + 0.8 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.2 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y + 0.2 * s), this.iX(x + 0.5 * s), this.iY(y + 0));
    }
    q(x, y, s) {
        /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+(-0.6)*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
        this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
        this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
        this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
        */
        this.o(x, y, s);
        this.drawLine(this.iX(x + 0.9 * s), this.iY(y + (-0.6) * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
    }
    v(x, y, s) {
        //Esta diagonal tiende a -X en meddio
        this.drawLine(this.iX(x), this.iY(y + 1 * s), this.iX(x + 0.45 * s), this.iY(y));
        //Esta digonal tiende a +X orilla
        this.drawLine(this.iX(x + 0.45 * s), this.iY(y), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
    }
    drawString(cadena, x, y, sc) {
        let posicion = 0;
        let arr = Array.from(cadena);
        arr.forEach(element => {
            switch (element) {
                case "a":
                    this.a(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "b":
                    this.b(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "c":
                    this.c(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "d":
                    this.d(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "e":
                    this.e(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "f":
                    this.f(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "g":
                    this.g(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "h":
                    this.h(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "i":
                    this.i(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "j":
                    this.j(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "k":
                    this.k(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "l":
                    this.l(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "m":
                    this.m(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "n":
                    this.n(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "o":
                    this.o(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "p":
                    this.p(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "q":
                    this.q(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "r":
                    this.r(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "s":
                    this.s(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "t":
                    this.t(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "u":
                    this.u(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "v":
                    this.v(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "w":
                    this.w(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "x":
                    this.x(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "y":
                    this.y(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case "z":
                    this.z(x + posicion, y, sc);
                    posicion += sc;
                    break;
                case " ":
                    posicion += sc;
                    break;
            }
        });
    }
    paint() {
        this.drawString("hola mundo", 0, 0, 0.2);
    }
}
