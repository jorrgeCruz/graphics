
export class CanvasLocal {
  //atributos
  protected graphics: CanvasRenderingContext2D;
  protected rWidth:number;
  protected rHeight:number;
  protected maxX: number;
  protected maxY: number;
  protected pixelSize: number;
  protected centerX: number;
  protected centerY: number;
  
      
  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this. rWidth = 10;
    this.rHeight= 10;
    this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX / 2;
    this.centerY = this.maxY / 2;
  }

  iX( x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
  iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }

  paint() {
    //this.graphics.arc(this.iX(0), this.iY(0), Math.abs(this.iX(4)-this.iX(0)), 0,2*Math.PI, false);
    //this.graphics.stroke();
    //this.graphics.fillText("Lienzo listo desde ts", this.iX(2), this.iY(3.7));
    //debugger;
    //this.drawLine(320, 40, 480, 400);
    //this.drawLine(320, 40, 140, 400);
    //this.drawLine(140, 400, 480, 400);
    let lado = 100;
    let side = 0.95 * lado;
    let sideHalf = 0.5 * side;
    let xCenter = 320;
    let yCenter = 240;
      
    let h = sideHalf * Math.sqrt(3);
    let xA, yA, xB, yB, xC, yC,
    xA1, yA1, xB1, yB1, xC1, yC1, p, q;
     q = 0.05;
    p = 1 - q;
    /*xA = xCenter - sideHalf;
    yA = yCenter - 0.5 * h;
    xB = xCenter + sideHalf;
    yB = yA;
    xC = xCenter;
    yC = yCenter + 0.5 * h; */

    for (let m = 0; m < 4; m++){
      for (let n = 0; n < 4; n++){
        xA = 100+n*lado - sideHalf;
        yA = 100+m*lado - 0.5 * h;
        xB = 100+n*lado+ sideHalf;
        yB = yA;
        xC = 100+n*lado;
        yC = 100+m*lado + 0.5 * h; 
        for (let i = 0; i < 20; i++){
          this.drawLine(xA, yA, xB, yB);
          this.drawLine(xB, yB, xC, yC);
          this.drawLine(xC, yC, xA, yA);
          xA1 = p * xA + q * xB;
          yA1 = p * yA + q * yB;
          xB1 = p * xB + q * xC;
          yB1 = p * yB + q * yC;
          xC1 = p * xC + q * xA;
          yC1 = p * yC + q * yA;
          xA = xA1; xB = xB1; xC = xC1;
          yA = yA1; yB = yB1; yC = yC1;
        }
      }
    }

    /* for (let i = 0; i < 50; i++){
        this.drawLine(xA, yA, xB, yB);
        this.drawLine(xB, yB, xC, yC);
        this.drawLine(xC, yC, xA, yA);
        xA1 = p * xA + q * xB;
        yA1 = p * yA + q * yB;
        xB1 = p * xB + q * xC;
        yB1 = p * yB + q * yC;
        xC1 = p * xC + q * xA;
        yC1 = p * yC + q * yA;
        xA = xA1; xB = xB1; xC = xC1;
        yA = yA1; yB = yB1; yC = yC1;
    } */
    
  }

}