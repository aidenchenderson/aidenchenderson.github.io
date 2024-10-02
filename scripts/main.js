// handle user events
document.addEventListener('DOMContentLoaded', (event) => {
    // change the website logo to C++ when the user hovers over
    const logoImage = document.getElementById('logoImage');
    logoImage.addEventListener('mouseenter', () => {
        logoImage.src = 'images/WebsiteLogo2.png';
    });
    logoImage.addEventListener('mouseleave', () => {
        logoImage.src = 'images/WebsiteLogo.png';
    });

    // get elements by their id to make the website interactive
    const jobExpLink = document.getElementById('JobExperienceLinkID');
    const skillsLink = document.getElementById('SkillsLinkID');
    const projectsLink = document.getElementById('ProjectsLinkID');
    const workExpThumbCont = document.getElementById('WorkExperienceThumbnailContainerID');
    const skillsThumbCont = document.getElementById('SkillsThumbnailContainer');
    const projectsThumbCont = document.getElementById('ProjectsThumbnailContainer');
    const moonButton = document.getElementById("MoonButton");
    const popup = document.getElementById('SkillPopup');
    const popupTitle = document.getElementById('PopupTitle');
    const popupDescription = document.getElementById('PopupDescription');
    const popupClose = document.getElementById('ClosePopup');

    // query selector for different parts of the HTML
    const overlay = document.querySelector(".Overlay");
    const content = document.querySelector(".MainContent");
    const workExp = document.querySelector(".WorkExperienceContent");
    const skillsExp = document.querySelector(".SkillsContent");
    const projectsExp = document.querySelector(".ProjectsContent");
    

    // function to make the moon button transition to the rest of the website
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

    // page navigation function for all navigation
    function pageNavigation(element){
        // return a navigation function to fix automatically changing pages problem
        return function() {
            // initialize all of the elements to none
            overlay.style.display = 'none';
            workExp.style.display = 'none';
            content.style.display = 'none';
            skillsExp.style.display = 'none';
            projectsExp.style.display = 'none';
            // then show the page that needs to be displayed
            element.classList.remove('hide');
            element.classList.add('show');
            element.style.display = 'flex';
        };
    }

    // check for user input for page navigation
    logoImage.addEventListener('click', pageNavigation(content));
    jobExpLink.addEventListener('click', pageNavigation(workExp));
    workExpThumbCont.addEventListener('click', pageNavigation(workExp));
    skillsThumbCont.addEventListener('click', pageNavigation(skillsExp));
    skillsLink.addEventListener('click', pageNavigation(skillsExp));
    projectsLink.addEventListener('click', pageNavigation(projectsExp));
    projectsThumbCont.addEventListener('click', pageNavigation(projectsExp));

    // unique descriptions for the skills.
    const skillDescriptions = {
        "C++": "I use C++ in my free time because of its versatility and power. I enjoy testing my linear algebra and graphics programming skills with tools like OpenGL and CMake. In my class, 'Data Structures and Algorithms 2C03', I use C++ for its speed and its support for both procedural and object-oriented paradigms.",
        "Linux": "I currently use Linux as my 'daily driver' machine. I am familiar with using the Gnome terminal to navigate my way around files, applications, code, and more. As a byproduct of using Linux, I have become familiar with compiling my own C/C++ files using Make files and CMakeLists. I also enjoy using Linux for ease of access programming, open source contributions, and KDE software.",
        "Bash": "Since I use Linux daily, I am also very familiar with bash commands and bash scripting, as I use it daily to navigate around my working directories for school. I have used Bash in classes such as 'Scientific Computing 2G03' where we used a secure shell to access a Unix system and create homework projects.",
        "C": "I've used C in classes such as 'Computer Science Practice 1XC3' and 'Computer Architecture 2GA3'. I would like to continue learning about C since it has many close-to-hardware capabilities. I've also done a lot of digital logic in C to better my understanding of how computers really work.",
        "Java": "For my final project of high school, I used Java to make a wave-based survival game and achieved the highest grade in the class for completeness and complexity. In both 'Data Structures and Algorithms 2C03' and 'Software Development 2ME3', I used Java to write algorithms that required object-oriented implementations.",
        "SQL": "At my first university-level co-op, I became very proficient in Microsoft SQL and was able to help solve problems for senior interns. I extracted data from databases to automate the process of gathering information on outdated company procedures and created advanced queries that helped find backend information from a large and messy database. This data was then used for a large-scale webapp that I worked on in the early stages of its development.",
        "HTML5": "I used HTML to make most of this website, and to learn the basics of front end. I chose to use mostly HTML as I was dealing with wifi problems while coding, so using HTML let me load my webpage once and then still be able to navigate even if I lost connection. Notice how there are no refreshes once you change pages on my site? It also makes the buffer refresh less so there are no white flashes on the screen!",
        "JavaScript": "This website is interactive thanks to JavaScript! I used many different functions, and created my own to make pop-ups, page changes, changes to element visibilities, and much more. I am also learning React.js for school clubs.",
        "CSS": "I styled my website using CSS. My skills let me create a responsive design that formats all of the elements/visuals to change shape and position for different devices, and different readers! I use techniques like Flexbox for content organization and tried to make my website accessible for everyone by making text emphasis bigger, and elements stand out.",
        "Python": "In 'Introduction to Programming 1MD3' I used Python to write basic sorting algorithms and create functions that would solve problems recursively. I also can create basic GUIs using inbuilt libraries like tkinter or pygame, and have an interest in learning more for AI and Machine learning!"
    };

    // make the popup appear on screen
    function openPopup(skill) {
        popupTitle.textContent = skill;
        popupDescription.textContent = skillDescriptions[skill] || "Error loading skill description";
        popup.style.display = 'flex';
    }

    /* popup closing */
    // close the popup using the X
    popupClose.onclick = function() {
        popup.style.display = 'none';
    }

    // or click on the rest of the window anywhere to close the popup
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }

    // add click event to each skill
    const skillItems = document.querySelectorAll('.Skill');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const skillName = item.textContent.trim();
            openPopup(skillName);
        });
    });
});