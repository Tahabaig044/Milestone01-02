"use strict";
 const toggleSkillsButton = document.getElementById('toggle-skills');
    const skillsContent = document.getElementById('skills-content');
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsContent.classList.contains('hidden')) {
            skillsContent.classList.remove('hidden');
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsContent.classList.add('hidden');
            toggleSkillsButton.textContent = 'Show Skills';
        }
});
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
