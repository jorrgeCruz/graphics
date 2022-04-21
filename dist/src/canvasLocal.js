export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 18;
        this.rHeight = 4;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
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
    fx(x) {
        return Math.pow(x, 2);
    }
    paint() {
        //dibuja la cuadricula
        this.graphics.clearRect(0, 0, this.maxX + 1, this.maxY + 1);
        this.graphics.strokeStyle = 'red';
        for (let x = -7; x <= 7; x++) {
            this.drawLine(this.iX(x), this.iY(-3), this.iX(x), this.iY(3));
            for (let y = -3; y <= 3; y++) {
                this.drawLine(this.iX(-5), this.iY(y), this.iX(2), this.iY(y));
            }
        }
        this.graphics.strokeStyle = 'lightgray';
        for (let x = -7; x <= 8; x += 0.25) {
            this.drawLine(this.iX(x), this.iY(-3), this.iX(x), this.iY(3));
            for (let y = -3; y <= 3; y += 0.25) {
                this.drawLine(this.iX(-7), this.iY(y), this.iX(8), this.iY(y));
            }
        }
        this.graphics.strokeStyle = 'gray';
        for (let x = -7; x <= 8; x++) {
            this.drawLine(this.iX(x), this.iY(-3), this.iX(x), this.iY(3));
            for (let y = -3; y <= 3; y++) {
                this.drawLine(this.iX(-7), this.iY(y), this.iX(8), this.iY(y));
            }
        }
        //dibuja las divisiones
        this.graphics.strokeStyle = 'black';
        for (let x = -7; x <= 8; x++) {
            /*this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0.1));*/
            this.graphics.fillText(x + "", this.iX(x - 0.1), this.iY(-0.2));
        }
        this.graphics.strokeStyle = 'black';
        for (let y = -3; y <= 3; y++) {
            /*this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0.1), this.iY(y));*/
            this.graphics.fillText(y + "", this.iX(-0.2), this.iY(y));
        }
        //dibuja el plano cartesiano
        this.drawLine(this.iX(-7), this.iY(0), this.iX(8), this.iY(0));
        this.drawLine(this.iX(0), this.iY(3), this.iX(0), this.iY(-3));
        //dibujar la funcion
        this.graphics.strokeStyle = 'blue';
        for (let x = -1.7; x <= 1.5; x += 0.1) {
            this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + 0.3), this.iY(this.fx(x + 0.3)));
        }
    }
}
