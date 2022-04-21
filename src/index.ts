import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;
let Ejecutar= <HTMLElement>document.getElementById("ejecutar");;
let ancho: number;
let alto: number;
let jtexfieldAncho =<HTMLInputElement> document.getElementById("ancho");
let jtexfieldAlto =<HTMLInputElement> document.getElementById("alto");
Ejecutar.addEventListener('click',AnchoAlto);

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);

miCanvas.paint();

function AnchoAlto(evt: any): void{
    ancho=parseFloat(jtexfieldAncho.value);
    alto=parseFloat(jtexfieldAlto.value);
    miCanvas.rWidth=ancho;
    miCanvas.rHeight=alto;
    miCanvas.pixelSize = Math.max(miCanvas.rWidth / miCanvas.maxX, miCanvas.rHeight /miCanvas.maxY);
    miCanvas.paint();
}


