// handle user events
document.addEventListener('DOMContentLoaded', (event) => {
    // get elements by their id
    const jobExpLink = document.getElementById('JobExperienceLinkID');
    const workExpThumbCont = document.getElementById('WorkExperienceThumbnailContainerID');

    // change the website logo when the user hovers over
    const logoImage = document.getElementById('logoImage');
    
    logoImage.addEventListener('mouseenter', () => {
        logoImage.src = 'images/WebsiteLogo2.png';
    });
    logoImage.addEventListener('mouseleave', () => {
        logoImage.src = 'images/WebsiteLogo.png';
    });

    // change the displayed content when moon is clicked
    const moonButton = document.getElementById("MoonButton");
    const overlay = document.querySelector(".Overlay");
    const content = document.querySelector(".MainContent");
    const workExp = document.querySelector(".WorkExperienceContent");

    moonButton.addEventListener('click', function() {
        // add class to fade out overlay and fade in content
        overlay.classList.add('hide');
        workExp.classList.add('hide');
        
        // remove overlay after fade out completes
        overlay.addEventListener('transitionend', function(){
            overlay.style.display = 'none';
            content.style.display = 'flex';

            content.offsetHeight;

            content.classList.add('show');
        }, { once: true });
    });

    // initialize pages to be hidden
    

    // page navigation
    function navMainPage(){
        overlay.style.display = 'none';
        workExp.style.display = 'none';
        content.classList.add('show');
        content.style.display = 'flex';
    }

    function navJobPage(){
        overlay.style.display = 'none';
        content.style.display = 'none';
        workExp.classList.add('show');
        workExp.style.display = 'flex';
    }

    // check for user input for page navigation
    logoImage.addEventListener('click', navMainPage);
    jobExpLink.addEventListener('click', navJobPage);
    workExpThumbCont.addEventListener('click', navJobPage);
});