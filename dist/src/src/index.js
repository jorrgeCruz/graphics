import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
let miCanvas;
window.onload = () => {
    canvas = document.getElementById('circlechart');
    graphics = canvas.getContext('2d');
    miCanvas = new CanvasLocal(graphics, canvas);
    miCanvas.paint();
};
// 👇 FUNCION PARA GRAFICAR
function graficar() {
    const input = document.getElementById("funcion");
    miCanvas.setFuncion(input.value);
    miCanvas.paint();
}
// 👇 ZOOM +
function zoomIn() {
    miCanvas.setZoom(miCanvas.getZoom() + 5);
    miCanvas.paint();
}
// 👇 ZOOM -
function zoomOut() {
    miCanvas.setZoom(miCanvas.getZoom() - 5);
    miCanvas.paint();
}
