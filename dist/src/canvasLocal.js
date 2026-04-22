export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
    }
    barrasHorizontales3D(labels, values) {
        const barHeight = 30;
        const spacing = 20;
        const depth = 10;
        const max = Math.max(...values);
        const scale = 400 / max;
        for (let i = 0; i < values.length; i++) {
            const y = i * (barHeight + spacing) + 50;
            const width = values[i] * scale;
            // Cara frontal
            this.graphics.fillStyle = "#4CAF50";
            this.graphics.fillRect(100, y, width, barHeight);
            // Cara superior
            this.graphics.fillStyle = "#66BB6A";
            this.graphics.beginPath();
            this.graphics.moveTo(100, y);
            this.graphics.lineTo(100 + depth, y - depth);
            this.graphics.lineTo(100 + width + depth, y - depth);
            this.graphics.lineTo(100 + width, y);
            this.graphics.closePath();
            this.graphics.fill();
            // Cara lateral
            this.graphics.fillStyle = "#388E3C";
            this.graphics.beginPath();
            this.graphics.moveTo(100 + width, y);
            this.graphics.lineTo(100 + width + depth, y - depth);
            this.graphics.lineTo(100 + width + depth, y + barHeight - depth);
            this.graphics.lineTo(100 + width, y + barHeight);
            this.graphics.closePath();
            this.graphics.fill();
            // Texto
            this.graphics.fillStyle = "black";
            this.graphics.fillText(labels[i], 20, y + 20);
            this.graphics.fillText(values[i].toString(), 110 + width, y + 20);
        }
    }
}
