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

    let monitor = planetSurfaceDisplay.parentNode;

    var unknownWorlds = null;
    var resizeTimer = null;

    window.addEventListener('resize', function(e) {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function functionName() {
            cameraOrientation();

            adjustCameraResolution();
        }, 0);


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
        let monitorHeight = monitor.offsetHeight;
        let monitorWidth = monitor.offsetWidth;

        let imageHeight = planetSurfaceDisplay.height;
        let imageWidth = planetSurfaceDisplay.width;

        if (imageWidth < monitorWidth) {
            planetSurfaceDisplay.className = 'fill-width';
        }

        if (imageHeight < monitorHeight) {
            planetSurfaceDisplay.className = 'fill-height';
        }
    }

    cameraOrientation();
})
