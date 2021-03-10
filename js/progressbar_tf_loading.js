"use strict";


export class ProgressBarStateOuterElementsManagement {
    static domElementsToHideWhenProgressNotCompleted = []
    static domElementsToShowWhenProgressFinished = []

    static addElementToDisableAndEnableForProgress(domElement) {
        ProgressBarStateOuterElementsManagement.addElementToDisable(domElement)
        ProgressBarStateOuterElementsManagement.addElementToShow(domElement)
    }

    static addElementToDisable(domElement) {
        ProgressBarStateOuterElementsManagement.domElementsToHideWhenProgressNotCompleted.push(domElement)
    }

    static addElementToShow(domElement) {
        ProgressBarStateOuterElementsManagement.domElementsToShowWhenProgressFinished.push(domElement)
    }

    static disableAllElements() {
        ProgressBarStateOuterElementsManagement.domElementsToHideWhenProgressNotCompleted.forEach((domElement) => {
            domElement.classList.add('disabled')
            domElement.disabled = false
        })
    }

    static enableAllElements() {
        ProgressBarStateOuterElementsManagement.domElementsToShowWhenProgressFinished.forEach((domElement) => {
            domElement.classList.remove('disabled')
            domElement.disabled = true
        })
    }
}


let progressbar = document.getElementById("progressbar-tf")
document.addEventListener("loadTfModelProgress",  (event) => {
    let percentage = event.detail * 100
    progressbar.style.width = `${percentage}%`
    progressbar.innerText = Math.floor(percentage) + "%"
    if (percentage === 100) {
        ProgressBarStateOuterElementsManagement.enableAllElements()
        progressbar.parentNode.hidden = true
    }

});

