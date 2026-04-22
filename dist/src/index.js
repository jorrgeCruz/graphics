import { CanvasLocal } from "./canvasLocal.js";
window.dibujar = function () {
    const labelsInput = document.getElementById("labels").value;
    const valuesInput = document.getElementById("values").value;
    const labels = labelsInput.split(",");
    const values = valuesInput.split(",").map(Number);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const grafica = new CanvasLocal(ctx, canvas);
    grafica.barrasHorizontales3D(labels, values);
};
