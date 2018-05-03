const roFrameCorners = document.querySelectorAll('.ro-frame-corners');

var brightnessInterval = .01;
var dimPoint = Math.random() / 3;
var brightPoint = Math.random() / 2;

for (let x = 0; x < roFrameCorners.length; x++) {

    roFrameCorners[x].style.setProperty('--frame-brightness-interval', brightnessInterval + 's');

    roFrameCorners[x].style.setProperty('--frame-dim-point', dimPoint);

    roFrameCorners[x].style.setProperty('--frame-bright-point', brightPoint);
}
