// handle user events
document.addEventListener('DOMContentLoaded', (event) => {
    // change the website logo when the user hovers over
    const logoImage = document.getElementById('logoImage');
    
    logoImage.addEventListener('mouseenter', () => {
        logoImage.src = 'images/WebsiteLogo2.png';
    });
    logoImage.addEventListener('mouseleave', () => {
        logoImage.src = 'images/WebsiteLogo.png';
    });

    // change the displayed content when moon is clicked
    // get elements by their id
    const jobExpLink = document.getElementById('JobExperienceLinkID');
    const skillsLink = document.getElementById('SkillsLinkID');
    const projectsLink = document.getElementById('ProjectsLinkID');
    const workExpThumbCont = document.getElementById('WorkExperienceThumbnailContainerID');
    const skillsThumbCont = document.getElementById('SkillsThumbnailContainer');
    const projectsThumbCont = document.getElementById('ProjectsThumbnailContainer');
    const moonButton = document.getElementById("MoonButton");
    const overlay = document.querySelector(".Overlay");
    const content = document.querySelector(".MainContent");
    const workExp = document.querySelector(".WorkExperienceContent");
    const skillsExp = document.querySelector(".SkillsContent");
    const projectsExp = document.querySelector(".ProjectsContent");

    moonButton.addEventListener('click', function() {
        // add class to fade out overlay and fade in content
        overlay.classList.add('hide');
        workExp.classList.add('hide');
        skillsExp.classList.add('hide');
        
        // remove overlay after fade out completes
        overlay.addEventListener('transitionend', function(){
            overlay.style.display = 'none';
            workExp.style.display = 'none';
            skillsExp.style.display = 'none';
            projectsExp.style.display = 'none';
            content.style.display = 'flex';

            content.offsetHeight;

            content.classList.add('show');
        }, { once: true });
    });

    // page navigation
    function navMainPage(){
        overlay.style.display = 'none';
        workExp.style.display = 'none';
        skillsExp.style.display = 'none';
        projectsExp.style.display = 'none';
        content.classList.add('show');
        content.style.display = 'flex';
        
    }

    function navJobPage(){
        overlay.style.display = 'none';
        content.style.display = 'none';
        skillsExp.style.display = 'none';
        projectsExp.style.display = 'none';
        workExp.classList.remove('hide');
        workExp.classList.add('show');
        workExp.style.display = 'flex';
    }
    
    function navSkillsPage(){
        overlay.style.display = 'none';
        content.style.display = 'none';
        workExp.style.display = 'none';
        projectsExp.style.display = 'none';
        skillsExp.classList.remove('hide');
        skillsExp.classList.add('show');
        skillsExp.style.display = 'flex';
    }

    function navProjectsPage(){
        overlay.style.display = 'none';
        content.style.display = 'none';
        workExp.style.display = 'none';
        skillsExp.style.display = 'none';
        projectsExp.classList.remove('hide')
        projectsExp.classList.add('show');
        projectsExp.style.display = 'flex';
    }

    // check for user input for page navigation
    logoImage.addEventListener('click', navMainPage);
    jobExpLink.addEventListener('click', navJobPage);
    workExpThumbCont.addEventListener('click', navJobPage);
    skillsThumbCont.addEventListener('click', navSkillsPage);
    skillsLink.addEventListener('click', navSkillsPage);
    projectsLink.addEventListener('click', navProjectsPage);
    projectsThumbCont.addEventListener('click', navProjectsPage);
});