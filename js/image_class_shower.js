"use strict";

document.addEventListener("foundClassOfImage", async (event) => {

    let imageClass = event.detail
    console.log(imageClass)
    if (imageClass === "NOT doge") {
        document.getElementById("result-not-doge").hidden = false
        document.getElementById("result-doge").hidden = true
        document.getElementById("result-dogecoin").hidden = true
    } else if (imageClass === "doge") {
        document.getElementById("result-not-doge").hidden = true
        document.getElementById("result-doge").hidden = false
        document.getElementById("result-dogecoin").hidden = true
    }

});

document.addEventListener("searchingClassOfImage", async (event) => {
    document.getElementById("result-not-doge").hidden = true
    document.getElementById("result-doge").hidden = true
    document.getElementById("result-dogecoin").hidden = true
});
