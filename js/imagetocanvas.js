"use strict";

const doge_or_not_canvas = document.getElementById("doge-or-not-doge-canvas");
const ctx = doge_or_not_canvas.getContext("2d");

document.addEventListener("uploadedImage", (event) => {
    let imageFileContent = event.detail

    const img = new Image();
    img.addEventListener("load", () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 224, 224);
        dispatchImageDrawnInCanvas(ctx)
    });

    img.src = imageFileContent;
})

function dispatchImageDrawnInCanvas(canvasElement) {
    // console.log("dispatchImageDrawnInCanvas")

    let event = new CustomEvent("canvasImageDrawn", {detail: canvasElement})
    setTimeout(function(){
        document.dispatchEvent(event)
    },0);
}
