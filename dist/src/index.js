import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
let Ejecutar = document.getElementById("ejecutar");
;
let ancho;
let alto;
let jtexfieldAncho = document.getElementById("ancho");
let jtexfieldAlto = document.getElementById("alto");
Ejecutar.addEventListener('click', AnchoAlto);
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new CanvasLocal(graphics, canvas);
miCanvas.paint();
function AnchoAlto(evt) {
    ancho = parseFloat(jtexfieldAncho.value);
    alto = parseFloat(jtexfieldAlto.value);
    miCanvas.rWidth = ancho;
    miCanvas.rHeight = alto;
    miCanvas.pixelSize = Math.max(miCanvas.rWidth / miCanvas.maxX, miCanvas.rHeight / miCanvas.maxY);
    miCanvas.paint();
}
