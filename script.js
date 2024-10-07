document.addEventListener('DOMContentLoaded', () => {
    // Example: Dynamic project loading
    const projects = [
        {
            title: 'Project Title 1',
            description: 'Brief description of Project 1.',
            link: 'project1.html'
        },
        {
            title: 'Project Title 2',
            description: 'Brief description of Project 2.',
            link: 'project2.html'
        }
        // Add more projects as needed
    ];

    const projectsContainer = document.querySelector('#projects-container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Read More</a>
        `;
        
        projectsContainer.appendChild(projectDiv);
    });

    // Example: Adding interactivity to the navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Modal functionality
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modal-body"></div>
    </div>
`;
document.body.appendChild(modal);

const modalContent = modal.querySelector('#modal-body');
const closeModal = modal.querySelector('.close');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Dynamic project details in modal
projectsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const project = projects.find(p => p.link === event.target.getAttribute('href'));
        if (project) {
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <p>Additional details about the project...</p>
            `;
            modal.style.display = 'block';
        }
    }
});
