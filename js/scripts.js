/* mobile full screen overlay */
document.addEventListener('DOMContentLoaded', () => {
  const fsNavCloseBtn = document.querySelector('.fsnav-close');

  fsNavCloseBtn.addEventListener('click', function () {
    this.parentElement.className = 'fsnav';
  });
});

function openNav() {
  const fsNav = document.querySelector('.fsnav');
  fsNav.className = 'fsnav fsnav-open';
}

openNav();