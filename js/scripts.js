/* eslint-disable no-unused-vars */
/* Form validation */
const formName = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('formId');

function checkForm(form) {
  const error = document.getElementById('errorMessage');

  if (email.value === email.value.toLowerCase()) {
    return true;
  }

  email.style.border = '1px solid red';
  email.style.boxShadow = '0 0 5pt 1pt #ffb3b3';

  error.innerHTML = 'Email must be lowercase!';
  error.style.display = 'block';
  error.style.color = '#ff0000';

  form.email.focus();
  return false;
}

/* localStorage */

const formData = [];

function UserData(name, email) {
  this.name = name;
  this.email = email;
}

function setLocalStorage() {
  localStorage.setItem('data', JSON.stringify(formData));
}

function getFormDetail() {
  const newUser = new UserData(formName.value, email.value);
  formData.push(newUser);
  setLocalStorage();
}
form.addEventListener('submit', getFormDetail);

function getDataFromLocalStorage() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
  if (dataFromLocalStorage) {
    dataFromLocalStorage.forEach((data) => {
      formName.value = data.name;
      email.value = data.email;
    });
  }
}

/* mobile full screen overlay */
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const closeBtn = document.getElementById('close-btn');
const IconMenu = document.getElementById('click-image');
const hamItem = document.getElementsByClassName('nav-list');

closeBtn.addEventListener('click', () => {
  closeNav();
});
IconMenu.addEventListener('click', () => {
  openNav();
});

for (let index = 0; index < hamItem.length; index += 1) {
  hamItem[index].addEventListener('click', () => {
    closeNav();
  });
}

/* projects items */
const portfolioSection = document.querySelector('.portfolio');
const projects = [
  {
    id: 1,
    featuredImage: 'images/synergy-image.png',
    name: 'Synergy Industries',
    frame: [
      'Investment', '• Full-Stack Dev', '• 2021',
    ],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML', 'CSS', 'Javascript',
    ],
    year: 2015,
    liveDemo: 'https://objective-kare-8355a6.netlify.app/',
    sourceDemo: 'https://github.com/Emmy-github-webdev/investment_project',
  },

  {
    id: 2,
    featuredImage: 'images/softdev.jpg',
    name: 'SoftDev Square',
    frame: [
      'Collaboration', '• Back End Dev', '• 2022',
    ],
    description: 'A SoftDev is a collaboration platform.',
    technologies: [
      'HTML', 'CSS', 'Javascript',
    ],
    year: 2022,
    liveDemo: 'https://devsquareapp.herokuapp.com/',
    sourceDemo: 'https://github.com/Emmy-github-webdev/meetup',
  },

  {
    id: 3,
    featuredImage: 'images/tronicshop.jpg',
    name: 'TronicShop',
    frame: [
      'eCommerce', '• Back End Dev', '• 2022',
    ],
    description: 'Tronicshop is an eCommerce application built for the sales of electronic.',
    technologies: [
      'HTML', 'CSS', 'Javascript',
    ],
    year: 2022,
    liveDemo: 'https://tronicshopapp.herokuapp.com/',
    sourceDemo: 'https://github.com/Emmy-github-webdev/tronicshop',
  },

  {
    id: 4,
    featuredImage: 'images/mobile/portfolio4.svg',
    name: 'Multi-Post Stories',
    frame: [
      'CANOPY', '• Back End Dev', '• 2015',
    ],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML', 'CSS', 'Javascript',
    ],
    year: 2015,
    liveDemo: '#',
    sourceDemo: '#',
  },
];

/* Create project dynamically */
function createProject() {
  projects.forEach((project) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'portfolio-card';
    const imgDiv = document.createElement('div');
    imgDiv.className = 'portfolio-image';
    cardDiv.appendChild(imgDiv);
    const img = document.createElement('img');
    img.src = project.featuredImage;
    imgDiv.appendChild(img);
    const portfolioInfoDiv = document.createElement('div');
    portfolioInfoDiv.className = 'portfolio-info';
    const portfolioInfoh3 = document.createElement('h3');
    portfolioInfoh3.className = 'portfolio-info-h3';
    portfolioInfoh3.textContent = project.name;
    portfolioInfoDiv.appendChild(portfolioInfoh3);
    const portFolioRoleDiv = document.createElement('div');
    portFolioRoleDiv.className = 'portifolio-role';
    const ul = document.createElement('ul');
    for (let i = 0; i < project.frame.length; i += 1) {
      const li = document.createElement('li');
      li.textContent = project.frame[i];
      ul.appendChild(li);
    }
    const techDiv = document.createElement('div');
    techDiv.className = 'tech';
    for (let j = 0; j < project.technologies.length; j += 1) {
      const techDivSpan = document.createElement('span');
      techDivSpan.textContent = project.technologies[j];
      techDiv.appendChild(techDivSpan);
    }
    const seeProjectA = document.createElement('a');
    seeProjectA.className = 'see-button';
    const seeProjectASpan = document.createElement('span');
    seeProjectASpan.textContent = 'See Project';
    seeProjectA.appendChild(seeProjectASpan);
    portFolioRoleDiv.appendChild(ul);
    portfolioInfoDiv.appendChild(portFolioRoleDiv);
    const p = document.createElement('p');
    portfolioInfoDiv.appendChild(p);
    p.textContent = project.description;
    portfolioInfoDiv.appendChild(techDiv);
    portfolioInfoDiv.appendChild(seeProjectA);
    cardDiv.appendChild(portfolioInfoDiv);
    portfolioSection.appendChild(cardDiv);

    /* Windows popup */
    seeProjectA.addEventListener('click', () => {
      const popUpParentDiv = document.createElement('div');
      popUpParentDiv.className = 'parent-popup';
      const innerPopUpDiv = document.createElement('div');
      innerPopUpDiv.className = 'inner-popup-div';
      const closeDiv = document.createElement('div');
      closeDiv.className = 'close';
      closeDiv.textContent = 'x';
      innerPopUpDiv.appendChild(closeDiv);
      const innerPopUpDivh3 = document.createElement('h3');
      innerPopUpDivh3.textContent = project.name;
      innerPopUpDiv.appendChild(innerPopUpDivh3);
      const cardFrameDiv = document.createElement('div');
      cardFrameDiv.className = 'card-frame';
      for (let m = 0; m < project.frame.length; m += 1) {
        const cardFrameDivSpan = document.createElement('span');
        cardFrameDivSpan.textContent = project.frame[m];
        cardFrameDiv.appendChild(cardFrameDivSpan);
      }
      innerPopUpDiv.appendChild(cardFrameDiv);
      const img = document.createElement('img');
      img.src = project.featuredImage;
      innerPopUpDiv.appendChild(img);
      const modalInfoDiv = document.createElement('div');
      modalInfoDiv.className = 'modal-info';
      const innerPopUpDivP = document.createElement('p');
      innerPopUpDivP.textContent = project.description;
      modalInfoDiv.appendChild(innerPopUpDivP);
      const modalInfoDivAction = document.createElement('div');
      modalInfoDivAction.className = 'modal-info-action';
      const techPopUpDiv = document.createElement('div');
      techPopUpDiv.className = 'tech-popup';
      for (let n = 0; n < project.technologies.length; n += 1) {
        const techPopUpDivSpan = document.createElement('span');
        techPopUpDivSpan.textContent = project.technologies[n];
        techPopUpDiv.appendChild(techPopUpDivSpan);
      }
      modalInfoDivAction.appendChild(techPopUpDiv);
      const seeProjectPopupA = document.createElement('a');
      seeProjectPopupA.className = 'see-project';
      const seeProjectLive = document.createElement('button');
      seeProjectLive.className = 'popup-see-proj-btn';
      seeProjectLive.href = project.liveDemo;
      seeProjectLive.textContent = 'See Live';
      const seeProjectSource = document.createElement('button');
      seeProjectSource.className = 'popup-see-source-btn';
      seeProjectSource.href = project.sourceDemo;
      seeProjectSource.textContent = 'See Demo';
      seeProjectPopupA.appendChild(seeProjectLive);
      seeProjectPopupA.appendChild(seeProjectSource);
      modalInfoDivAction.appendChild(seeProjectPopupA);
      modalInfoDiv.appendChild(modalInfoDivAction);
      innerPopUpDiv.appendChild(modalInfoDiv);
      popUpParentDiv.appendChild(innerPopUpDiv);
      document.body.appendChild(popUpParentDiv);

      seeProjectLive.addEventListener('click', () => {
        window.open(project.liveDemo, '_blank');
      });

      seeProjectSource.addEventListener('click', () => {
        window.open(project.sourceDemo, '_blank');
      });

      closeDiv.addEventListener('click', () => {
        popUpParentDiv.style.display = 'none';
      });
    });
  });
}

createProject();