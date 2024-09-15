 const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
 const skillsContent = document.getElementById('skills-content') as HTMLElement;

 toggleSkillsButton.addEventListener('click', () => {
     if (skillsContent.classList.contains('hidden')) {
            skillsContent.classList.remove('hidden');
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsContent.classList.add('hidden');
            toggleSkillsButton.textContent = 'Show Skills';
        }
 });

    const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement;
    const navLinks = document.getElementById('nav-links') as HTMLElement;

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
