const roFrameCorners = document.querySelectorAll('.ro-frame-corners');

let dimPoint = Math.random() / 4;
let brightPoint = Math.random() / 2;

for (let x = 0; x < roFrameCorners.length; x++) {

    let brightnessInterval = Math.random() / 1000;

    roFrameCorners[x].style.setProperty('--frame-brightness-interval', brightnessInterval + 's');

    roFrameCorners[x].style.setProperty('--frame-dim-point', dimPoint);

    roFrameCorners[x].style.setProperty('--frame-bright-point', brightPoint);
}
