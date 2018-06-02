document.addEventListener('DOMContentLoaded', function() {

    const unknownWorldsOrientation = {
        landscape: [
            '<img src="images/1018-l.jpg">',
            '<img src="images/1095-l.jpg">',
            '<img src="images/1104-l.jpg">',
            '<img src="images/1325-l.jpg">',
            '<img src="images/1548-l.jpg">',
            '<img src="images/1716-l.jpg">',
            '<img src="images/2047-l.jpg">',
            '<img src="images/2063-l.jpg">',
            '<img src="images/6344-l.jpg">',
            '<img src="images/6590-l.jpg">',
        ],
        portrait: [
            '<img src="images/1018-e.jpg">',
            '<img src="images/1095-e.jpg">',
            '<img src="images/1104-e.jpg">',
            '<img src="images/1325-e.jpg">',
            '<img src="images/1548-e.jpg">',
            '<img src="images/1716-e.jpg">',
            '<img src="images/2047-e.jpg">',
            '<img src="images/2063-e.jpg">',
            '<img src="images/6344-e.jpg">',
            '<img src="images/6590-e.jpg">',
        ]
    }
    const planetarySurfaceDisplay = document.getElementById('planetary-surface');
    const selectStarSystem = Math.floor(Math.random() * Math.floor(10));
    var unknownWorlds = null;

    function cameraOrientation() {

        if (window.innerHeight > window.innerWidth) {

            planetarySurfaceDisplay.className = 'portrait';;
            unknownWorlds = unknownWorldsOrientation["portrait"];

        } else {

            planetarySurfaceDisplay.className = 'landscape';
            unknownWorlds = unknownWorldsOrientation["landscape"];
        }

        missionDisplay();
    }

    var chosenWorld = function() {
        return unknownWorlds[selectStarSystem];
    }

    function missionDisplay() {
        planetarySurfaceDisplay.innerHTML = chosenWorld();
    }

    cameraOrientation();
    missionDisplay();

    window.addEventListener('resize', function(e) {
        cameraOrientation();
    });
})
