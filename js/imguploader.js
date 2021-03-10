"use strict";

const {ProgressBarStateOuterElementsManagement} = require("./progressbar_tf_loading");
let uploadedFile = null
    let fileInputDogeOrNot = document.getElementById("doge-or-not-input")
    let btnInputDogeOrNot = document.getElementById("doge-or-not-input-btn")
    ProgressBarStateOuterElementsManagement.addElementToDisableAndEnableForProgress(btnInputDogeOrNot)

     function processUploadedImage(data) {
        // console.log("processUploadedImage")
        let reader = new FileReader()
        let file = data.target.files[0]

        reader.addEventListener("load", (evt) => {
            uploadedFile = evt.target.result;
            dispatchUploadedFileEvent(uploadedFile)
        }, false)

        reader.readAsDataURL(file);
    }

    fileInputDogeOrNot.addEventListener("change", processUploadedImage)

     function dispatchUploadedFileEvent(fileContent) {
        // console.log("dispatchUploadedFileEvent")
        let event = new CustomEvent("uploadedImage", {'detail': fileContent})
         setTimeout(function(){
             document.dispatchEvent(event)
         },0);
    }
// }
