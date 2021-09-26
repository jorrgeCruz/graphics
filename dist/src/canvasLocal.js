export class CanvasLocal {
    //pixelWidth: number;
    //pixelHeigth: number;
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 10; //le agregue
        this.rHeight = 10; //le agregue
        //this.rWidth = 6;
        //this.rHeight= 4;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
        //this.pixelWidth= this.rWidth/this.maxX;
        //this.pixelHeigth = this.rHeight/this.maxY
        // this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        //this.centerX = this.maxX/2;
        //this.centerY = this.maxY/2;
    }
    //para hacer un modo anisotropico
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return this.maxY - Math.round(this.centerY - y / this.pixelSize); }
    //dibuja las lineas 
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
        //this.graphics.fill();// le agregue
        //this.graphics.closePath();
        //this.graphics.stroke();
    }
    paint() {
        //dibuja un triangulo
        /*this.drawLine(320, 40, 480, 400);;//
        this.drawLine(320, 40, 140, 400);//
        this.drawLine(140, 400, 480, 400)//
      */
        let side = 0.9 * 480;
        let sideHalf = 0.5 * side;
        let xCenter = 320;
        let yCenter = 240;
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC, xA1, yA1, xB1, yB1, xC1, yC1, p, q;
        q = 0.05;
        p = 1 - q;
        xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xCenter;
        yC = yCenter + 0.5 * h;
        for (let i = 0; i < 50; i++) {
            this.drawLine(xA, yA, xB, yB);
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1;
            xB = xB1;
            xC = xC1;
            yA = yA1;
            yB = yB1;
            yC = yC1;
        }
        /*this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));
        */
    }
}
//}
