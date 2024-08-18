// change the website logo when the user hovers over
document.addEventListener('DOMContentLoaded', (event) => {
    const logoImage = document.getElementById('logoImage');

    logoImage.addEventListener('mouseover', () => {
        logoImage.src = 'images/WebsiteLogo2.png';
    });

    logoImage.addEventListener('mouseout', () => {
        logoImage.src = 'images/WebsiteLogo.png';
    });
});