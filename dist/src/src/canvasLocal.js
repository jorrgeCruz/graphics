export class CanvasLocal {
    constructor(g, canvas) {
        this.funcion = "Math.sin(x)";
        this.zoom = 40;
        this.graphics = g;
        this.rWidth = 6;
        this.rHeight = 4;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    setFuncion(f) {
        this.funcion = f;
    }
    setZoom(z) {
        this.zoom = z;
    }
    getZoom() {
        return this.zoom;
    }
    iX(x) {
        return Math.round(this.centerX + x * this.zoom);
    }
    iY(y) {
        return Math.round(this.centerY - y * this.zoom);
    }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.stroke();
    }
    evaluarFuncion(x) {
        try {
            return eval(this.funcion);
        }
        catch (_a) {
            return 0;
        }
    }
    paint() {
        // limpiar canvas
        this.graphics.clearRect(0, 0, this.maxX, this.maxY);
        // 🔲 CUADRICULA
        this.graphics.strokeStyle = '#ddd';
        for (let x = -10; x <= 10; x++) {
            this.drawLine(this.iX(x), this.iY(-10), this.iX(x), this.iY(10));
        }
        for (let y = -10; y <= 10; y++) {
            this.drawLine(this.iX(-10), this.iY(y), this.iX(10), this.iY(y));
        }
        // 🧭 EJES
        this.graphics.strokeStyle = 'black';
        this.drawLine(this.iX(-10), this.iY(0), this.iX(10), this.iY(0)); // X
        this.drawLine(this.iX(0), this.iY(-10), this.iX(0), this.iY(10)); // Y
        // 🔴 FUNCION
        this.graphics.strokeStyle = 'red';
        let paso = 0.05;
        for (let x = -10; x <= 10; x += paso) {
            let y1 = this.evaluarFuncion(x);
            let y2 = this.evaluarFuncion(x + paso);
            this.drawLine(this.iX(x), this.iY(y1), this.iX(x + paso), this.iY(y2));
        }
    }
}
