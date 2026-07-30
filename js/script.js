const intro = document.getElementById('intro');
const shelf = document.getElementById('shelf');
const enterBtn = document.getElementById('enterBtn');
const navToggle = document.getElementById('navToggle');
const siteNav = document.querySelector('.site-nav');
let advanced = false;

function goToShelf(){
  if (!intro || !shelf || advanced) return;
  advanced = true;
  intro.classList.add('leaving');
  setTimeout(() => {
    intro.style.display = 'none';
    shelf.classList.add('visible');
  }, 550);
}

if (enterBtn){
  enterBtn.addEventListener('click', goToShelf);
  setTimeout(goToShelf, 4200);
}

if (navToggle && siteNav){
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}
