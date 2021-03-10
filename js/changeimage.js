"use strict";

let defaultImageDogeOrNot = document.getElementById("default-doge-img")

document.addEventListener("uploadedImage", (event) => {
    let imageFileContent = event.detail

    defaultImageDogeOrNot.src = imageFileContent
})
