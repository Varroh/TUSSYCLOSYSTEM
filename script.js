// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const subnavBtn = document.querySelector('.subnav-btn');
    const subnavContent = document.querySelector('.subnav-content');

    subnavBtn.addEventListener('click', function() {
        subnavContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!subnavBtn.contains(e.target) && !subnavContent.contains(e.target)) {
            subnavContent.classList.remove('show');
        }
    });
});
