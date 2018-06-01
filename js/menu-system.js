document.addEventListener('DOMContentLoaded', function() {

    const menuContainer = document.getElementById('menu-container');
    const systemMenuItems = document.querySelectorAll('.quadrant button');
    const systemMenuButton = document.getElementById('primary-menu-button');


    systemMenuButton.addEventListener('mouseover', function() {
        for (item of systemMenuItems) {
            item.classList.add('active');
        }
    });

    systemMenuButton.addEventListener('mouseout', function() {
        for (item of systemMenuItems) {
            item.classList.remove('active');
        }
    })
})
