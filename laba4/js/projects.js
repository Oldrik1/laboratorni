const data = [
  {
    img: './img/jpg/projects/1.jpg',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content',
    technology: [
      { title: 'HTML', id: 'html' },
      { title: 'JavaScript', id: 'java-script' },
      { title: 'SASS', id: 'sass' },
      { title: 'React', id: 'react' },
    ],
    theme: [{ title: 'Landing', id: 'landing' }],
    platform: [{ title: 'Web', id: 'web' }],
  },
  {
    img: './img/jpg/projects/1.jpg',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content',
    technology: [
      { title: 'HTML', id: 'html' },
      { title: 'React', id: 'react' },
    ],
    theme: [{ title: 'Ecommerce', id: 'ecommerce' }],
    platform: [{ title: 'Ios', id: 'ios' }],
  },
  {
    img: './img/jpg/projects/1.jpg',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content',
    technology: [
      { title: 'HTML', id: 'html' },
      { title: 'JavaScript', id: 'java-script' },
      { title: 'SASS', id: 'sass' },
      { title: 'React', id: 'react' },
    ],
    theme: [{ title: 'Blog', id: 'blog' }],
    platform: [{ title: 'Android', id: 'android' }],
  },
  {
    img: './img/jpg/projects/1.jpg',
    title: 'Project Tile goes here',
    desc: 'This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content',
    technology: [{ title: 'HTML', id: 'html' }],
    theme: [{ title: 'Landing', id: 'landing' }],
    platform: [{ title: 'Web', id: 'web' }],
  },
];

const projectsContainer = document.querySelector('.js-projects-container');
const filtersForm = document.querySelector('.js-filters');
const activeFilters = {};

const createProjectTemplate = (project) => `
  <article class="project-card">
    <img class="img" src="${project.img}" alt="">
    <div class="content">
      <h3 class="name">${project.title}</h3>
      <p class="desc">${project.desc}</p>
      <p class="stack"><b>Tech stack:</b> ${project.technology.map(item => item.title).join(', ')}</p>
      <p class="stack"><b>Platform:</b> ${project.platform.map(item => item.title).join(', ')}</p>
      <p class="stack"><b>Theme:</b> ${project.theme.map(item => item.title).join(', ')}</p>
      <div class="actions">
        <a href="" class="link">
          <img class="icon" src="./img/svg/link.svg" alt="">
          Live Preview
        </a>
        <a href="" class="link">
          <img class="icon" src="./img/svg/github.svg" alt="">
          View Code
        </a>
      </div>
    </div>
  </article>
`;

const dataRender = (data, container) => {
  if (!Array.isArray(data)) return;
  container.innerHTML = data.map(createProjectTemplate).join('');
};

const itemIsValid = (dataItem, activeFilters) => {
  return Object.entries(activeFilters).every(([key, value]) =>
    dataItem[key].some(item => item.id === value)
  );
};

const handleFormChange = (event) => {
  const { name, value } = event.target;

  if (value === '') {
    delete activeFilters[name];
  } else {
    activeFilters[name] = value;
  }

  const filteredData = Object.keys(activeFilters).length
    ? data.filter(item => itemIsValid(item, activeFilters))
    : data;

  dataRender(filteredData, projectsContainer);
};

filtersForm.addEventListener('change', handleFormChange);
dataRender(data, projectsContainer);

const toggleViewBtn = document.querySelector('.toggle-view-btn');
const projectsSection = document.querySelector('.projects-section');

toggleViewBtn.addEventListener('click', () => {
  projectsSection.classList.toggle('list-view');
});