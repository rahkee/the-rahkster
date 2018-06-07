document.addEventListener('DOMContentLoaded', function() {

    const unknownWorldsOrientation = {
        landscape: [
            'images/1018-l.jpg',
            'images/1095-l.jpg',
            'images/1104-l.jpg',
            'images/1325-l.jpg',
            'images/1548-l.jpg',
            'images/1716-l.jpg',
            'images/2047-l.jpg',
            'images/2063-l.jpg',
            'images/6344-l.jpg',
            'images/6590-l.jpg',
        ],
        portrait: [
            'images/1018-e.jpg',
            'images/1095-e.jpg',
            'images/1104-e.jpg',
            'images/1325-e.jpg',
            'images/1548-e.jpg',
            'images/1716-e.jpg',
            'images/2047-e.jpg',
            'images/2063-e.jpg',
            'images/6344-e.jpg',
            'images/6590-e.jpg',
        ]
    }

    const planetSurface = document.getElementById('planet-surface');
    const planetSurfaceDisplay = document.getElementById('planet-surface-image');
    const selectStarSystem = Math.floor(Math.random() * Math.floor(10));

    let imageHeight = null;
    let imageWidth = null;
    let monitor = planetSurfaceDisplay.parentNode;
    let monitorHeight = null;
    let monitorWidth = null;
    let offsetDifference = null;
    let resizeTimer = null;
    let unknownWorlds = null;

    window.addEventListener('resize', function(e) {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function functionName() {
            cameraOrientation();
            adjustCameraResolution();
        }, 100);
    });

    planetSurfaceDisplay.addEventListener('load', function() {
        adjustCameraResolution();
    });

    function cameraOrientation() {

        planetSurfaceDisplay.src = '';

        if (window.innerHeight >= window.innerWidth) {
            unknownWorlds = unknownWorldsOrientation["portrait"];
            planetSurface.className = 'portrait';

        } else {
            unknownWorlds = unknownWorldsOrientation["landscape"];
            planetSurface.className = 'landscape';
        }

        planetSurfaceDisplay.src = unknownWorlds[selectStarSystem];
    };

    function adjustCameraResolution() {
        imageHeight = planetSurfaceDisplay.height;
        imageWidth = planetSurfaceDisplay.width;
        monitorHeight = monitor.offsetHeight;
        monitorWidth = monitor.offsetWidth;

        if (imageWidth < monitorWidth) {
            planetSurfaceDisplay.className = 'fill-width';
        }

        if (imageHeight < monitorHeight) {
            planetSurfaceDisplay.className = 'fill-height';
        }

        scanSurface();
    }

    function scanSurface() {

        debugger

        if (planetSurfaceDisplay.classList.value === 'fill-width') {

            imageHeight = planetSurfaceDisplay.height;
            offsetDifference = monitorHeight - imageHeight;

            console.log('HEIGHT DIFF:', offsetDifference);

            planetSurfaceDisplay.style.setProperty('--scanSensorInputY', 500 + 'px')
            planetSurfaceDisplay.style.setProperty('--scanDuration', 5 + 's')
        }

        if (planetSurfaceDisplay.classList.value === 'fill-height') {

            imageWidth = planetSurfaceDisplay.width;
            offsetDifference = monitorWidth - imageWidth;

            console.log('WIDTH DIFF:', offsetDifference);

            planetSurfaceDisplay.style.setProperty('--scanSensorInputX', 500 + 'px')
            planetSurfaceDisplay.style.setProperty('--scanDuration', 5 + 's')
        }
    }

    cameraOrientation();
})
