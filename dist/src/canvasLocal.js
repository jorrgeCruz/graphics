export class CanvasLocal {
    //pixelWidth: number;
    //pixelHeigth: number;
    constructor(g, canvas) {
        this.rWidth = 5;
        this.rHeight = 5;
        this.graphics = g;
        this.rWidth = 640; //le agregue
        this.rHeight = 480; //le agregue
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
    iX(x) { return Math.round(this.centerX - x / this.pixelSize); }
    iY(y) { return this.maxY - Math.round(this.centerY + y / this.pixelSize); }
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
        this.drawLine(320, 40, 480, 400);
        ; // le agregue 120,30,380,300
        this.drawLine(320, 40, 140, 400); //le agregue   120, 30, 40,300
        this.drawLine(140, 400, 480, 400); // le agregue  40,300,380,300
        //this.drawLine(320,40,420,400);//le agregue
        /*this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));
        */
    }
}
//}
