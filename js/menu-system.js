document.addEventListener('DOMContentLoaded', function() {

    let systemMenuItems = document.querySelectorAll('.quadrant button');
    let systemMenuButton = document.getElementById('primary-menu-button');

    systemMenuButton.addEventListener('mouseover', function() {
        for (item of systemMenuItems) {
            item.classList.add('active');
        }
    });

    systemMenuButton.addEventListener('mouseout', function() {
        for (item of systemMenuItems) {
            item.classList.remove('active');
        }
    });
})
