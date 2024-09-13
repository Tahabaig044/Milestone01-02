"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Utility function to convert image file to Base64 string
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
// Function to generate resume HTML
const generateResumeHTML = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Get all inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const institutionInput = document.getElementById('institution');
    const degreeInput = document.getElementById('degree');
    const graduationDateInput = document.getElementById('graduation-date');
    const skillsInput = document.getElementById('skills');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const responsibilitiesInput = document.getElementById('responsibilities');
    const aboutInput = document.getElementById('about-me');
    const photoInput = document.getElementById('photo');
    // Basic validation
    if (!nameInput || !emailInput || !phoneInput || !addressInput ||
        !institutionInput || !degreeInput || !graduationDateInput ||
        !skillsInput || !companyInput || !positionInput ||
        !startDateInput || !endDateInput || !responsibilitiesInput) {
        alert('Please ensure all required fields are present.');
        return '';
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const photoBase64 = photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? yield fileToBase64(photoInput.files[0]) : '';
    const institution = institutionInput.value.trim();
    const degree = degreeInput.value.trim();
    const graduationDate = graduationDateInput.value.trim();
    const skills = skillsInput.value.trim();
    const company = companyInput.value.trim();
    const position = positionInput.value.trim();
    const startDate = startDateInput.value.trim();
    const endDate = endDateInput.value.trim();
    const responsibilities = responsibilitiesInput.value.trim();
    const about = aboutInput ? aboutInput.value.trim() : '';
    // Validate if all fields are filled
    if (!name || !email || !phone || !address || !institution ||
        !degree || !graduationDate || !skills || !company ||
        !position || !startDate || !endDate || !responsibilities) {
        alert('Please fill in all required fields.');
        return '';
    }
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return '';
    }
    // Validate phone number (example: basic validation for 10-digit phone numbers)
    const phonePattern = /^\d{10}$/; // Adjust regex pattern as needed
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return '';
    }
    // Validate dates (simple check)
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date cannot be before the start date.');
        return '';
    }
    // Generate resume HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
        </head>
        <body>
            <div class="resume-container">
                <div class="resume-header">
                    ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
                    <div class="personalinfo">
                    <h1>${name}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                </div>
                </div>
                <div class="resume-section">
                    <h1>Education</h1>
                    <p><strong>Institution: ${institution}</strong></p>
                    <p>Degree: ${degree}</p>
                    <p>Graduation Date: ${graduationDate}</p>
                </div>
                <div class="resume-section">
                    <h1>Skills</h1>
                    <p>${skills}</p>
                </div>
                <div class="resume-section">
                    <h1>Work Experience</h1>
                    <p><strong>${company}</strong> - ${position}</p>
                    <p>Start Date: ${startDate}</p>
                    <p>End Date: ${endDate || 'Present'}</p>
                    <p>Responsibilities: ${responsibilities}</p>
                </div>
                <div class="resume-section">
                    <h1>About</h1>
                    <p>${about}</p>
                </div>
            </div>
        </body>
        </html>
    `;
});
// Event listeners and functions
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume');
    const downloadButton = document.getElementById('download-resume');
    const editButton = document.getElementById('edit-resume');
    const shareButton = document.getElementById('share-resume');
    const resumeOutput = document.getElementById('resume-output');
    const resumeContent = document.getElementById('resume-content');
    generateButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        const resumeHTML = yield generateResumeHTML();
        if (resumeHTML) {
            resumeContent.innerHTML = resumeHTML;
            resumeOutput.classList.remove('hidden');
            downloadButton.classList.remove('hidden');
            editButton.classList.remove('hidden');
            shareButton.classList.remove('hidden');
        }
    }));
    downloadButton.addEventListener('click', () => {
        const opt = {
            margin: 0.2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Generate PDF from the resume content
        html2pdf().from(resumeContent).set(opt).save();
    });
    editButton.addEventListener('click', () => {
        resumeOutput.classList.add('hidden');
    });
    shareButton.addEventListener('click', () => {
        const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
        window.open(resumeURL, '_blank');
    });
    // Toggle skills visibility
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
    // Navigation toggle script
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
