import {projectsPack} from '/projectsPack.js';

const projectsGroup = document.querySelector(".projects-group");

projectsPack.forEach(projectPack => {
  const projectHTML = `
    <div class="project">
      <iframe name="targetWindow" src="${projectPack.src}" scrolling="no">
      </iframe>
      <div class="project-details">
        <p class="project-name">
          <a href="${projectPack.src}">
            ${projectPack.name}
          </a>
        </p>
        <p class="project-date">
          ${projectPack["date created"]}
        </p>
      </div>
    </div>
  `;
  projectsGroup.innerHTML += projectHTML;
})