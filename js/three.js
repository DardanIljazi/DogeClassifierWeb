//**
//* Kept for history only
//**
// // Option 1: Import the entire three_files.js core library.
// import * as THREE from 'three';
// import {WEBGL} from "./webgl"
// import {FileLoader} from "three";
// import {RGBMLoader} from "three/examples/jsm/loaders/RGBMLoader";
// import {Three_logic} from "../three_files/three_logic";
//
// window.THREE = THREE; // Used by Three_logic Scripts.
// let loader = new THREE.FileLoader();
// loader.load( 'http://localhost:63342/web/three_files/app.json', function ( text ) {
//     let player = new Three_logic.Player();
//     player.load( JSON.parse( text ) );
//     let scene = player.getScene()
//     let camera = player.getCamera()
//     let renderer = player.getRenderer()
//     console.log(scene)
//     let imageContainerMesh = scene.getObjectByName('PlaneImageContainer')
//     imageContainerMesh.visible = false
//     console.log(imageContainerMesh)
//     player.play()
//
//     let scaleToFillAllScreenInHeight = 7.9
//     let scaleToFillAllScreenInWidth = 14.0
//
//
//     let loader = new THREE.TextureLoader()
//
//     document.addEventListener('uploadedImage', function (e) {
//         let eventDetail = e.detail
//         console.log('event: ', eventDetail)
//         console.log(imageContainerMesh)
//         console.log('yes')
//         // console.log(texture)
//         let image = new Image();
//         image.src = eventDetail
//
//         image.addEventListener("load", () => {
//             console.log(image)
//             // let imageWidth = texture.image.width
//             let imageWidth = image.width
//             // let imageHeight = texture.image.height
//             let imageHeight = image.height
//             // let ratioHeightWidth = imageHeight/imageWidth
//             let ratioHeightWidth = imageWidth/imageHeight
//
//             console.log('imageHeight:', imageHeight, 'imageWidth:', imageWidth, 'ratioHeightWidth:', ratioHeightWidth)
//
//             imageContainerMesh.scale.y = scaleToFillAllScreenInHeight
//             imageContainerMesh.scale.x = scaleToFillAllScreenInHeight * ratioHeightWidth
//             let newScaleInHorizontal = imageContainerMesh.scale.x
//
//             if (newScaleInHorizontal <= scaleToFillAllScreenInWidth) {
//                 imageContainerMesh.scale.x = scaleToFillAllScreenInHeight * ratioHeightWidth
//             } else { // Image will be too big horizontally to fit in screen, let's diminish height to fit max width in screen
//                 let ratioToGetRideOff = newScaleInHorizontal / scaleToFillAllScreenInWidth
//                 imageContainerMesh.scale.y = imageContainerMesh.scale.y / ratioToGetRideOff
//                 imageContainerMesh.scale.x = imageContainerMesh.scale.x / ratioToGetRideOff
//             }
//
//             imageContainerMesh.material.map = THREE.ImageUtils.loadTexture( image.src );
//             imageContainerMesh.needsUpdate = true
//             imageContainerMesh.visible = true
//             renderer.render(scene, camera)
//         })
//
//         // player.render(1)
//     }, true);
//
//     player.render()
//
//     // loader.load( "http://localhost:63342/web/images/doge/1.jpg",
//     //     function (texture) {
//     //     console.log(imageContainerMesh)
//     //         console.log('yes')
//     //         console.log(texture)
//     //         let imageWidth = texture.image.width
//     //         let imageHeight = texture.image.height
//     //         let ratioHeightWidth = imageHeight/imageWidth
//     //
//     //         imageContainerMesh.scale.y = scaleToFillAllScreenInHeight
//     //         imageContainerMesh.scale.x = scaleToFillAllScreenInHeight * ratioHeightWidth
//     //
//     //         imageContainerMesh.material.map = texture
//     //         imageContainerMesh.needsUpdate = true
//     //         renderer.render(scene, camera)
//     //         player.render(1)
//     //     },
//     //     undefined, function ( error ) {
//     //
//     //         console.error( 'error', error );
//     //
//     //     });
//
//     let doge3d = document.getElementById("3d-doge")
//     console.log('doge3d:', doge3d)
//     if (doge3d) {
//         doge3d.appendChild(player.dom);
//         let doge3dHeight = doge3d.clientHeight
//         let doge3dWidth = doge3d.clientWidth
//
//         player.setSize(doge3dWidth, doge3dHeight)
//     }
//
//     // window.addEventListener( 'resize', function () {
//     //
//     //     player.setSize(doge3dWidth, doge3dHeight);
//     //
//     // } );
//
// } );
