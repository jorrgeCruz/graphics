
export class CanvasLocal {
  //atributos
  protected graphics: CanvasRenderingContext2D;
  maxX: number;
  maxY: number ;
  pixelSize: number;
  rWidth: number = 12.0;
  rHeight: number = 10.0;
  centerX: number;
  centerY: number;

  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixelSize = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }

  iX( x: number):number { return Math.round(this.centerX + x/this.pixelSize); }
  iY( y: number):number { return Math.round(this.centerY - y/this.pixelSize); }
  
  drawLine(g: CanvasRenderingContext2D, xP: number, yP: number, xQ: number, yQ:number) {
    let x = xP, y = yP, d = 0, dx = xQ - xP, dy = yQ - yP,
        c, m, xInc = 1, yInc = 1;
      if (dx < 0){xInc = -1; dx = -dx;}
      if (dy < 0){yInc = -1; dy = -dy;}
      if (dy <= dx) {
        c = 2 * dx; m = 2 * dy;
        if (xInc < 0) dx++;
        for (; ;){
          g.fillRect(x, y,1,1);
          if (x == xQ) break;
          x += xInc;
          d += m;
          if (d >= dx){y += yInc; d -= c;}
        }
      }
      else {
        c = 2 * dy; m = 2 * dx;
        if (yInc < 0) dy++;
        for (; ;){
          g.fillRect(x, y,1,1);
          if (y == yQ) break;
          y += yInc;
          d += m;
          if (d >= dy){x += xInc; d -= c;}
      }
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
    this.drawLine(this.graphics, 10, 10, 100, 50);
  }

}

