// handle user events
document.addEventListener('DOMContentLoaded', (event) => {
    // change the website logo when the user hovers over
    const logoImage = document.getElementById('logoImage');
    logoImage.addEventListener('mouseover', () => {
        logoImage.src = 'images/WebsiteLogo2.png';
    });
    logoImage.addEventListener('mouseout', () => {
        logoImage.src = 'images/WebsiteLogo.png';
    });

    // change the displayed content when moon is clicked
    const moonButton = document.getElementById("MoonButton");
    const overlay = document.querySelector(".Overlay");
    const content = document.querySelector(".MainContent");

    moonButton.addEventListener("click", function() {
        // add class to fade out overlay and fade in content
        overlay.classList.add("hide");
        content.classList.add("show");
        
        // remove overlay after fade out completes
        overlay.addEventListener('transitionend', function() {
            overlay.style.display = "none";
            content.style.display = "flex";
        }, { once: true });
    });
});