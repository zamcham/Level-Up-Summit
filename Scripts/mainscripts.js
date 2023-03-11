const pixels = 'px';
const heroSection = document.querySelector('.hero-section');

function updateHeroHeight() {
  const heroHeight = heroSection.clientHeight + window.innerHeight * 0.05;
  const heroHeightDesktop = heroSection.clientHeight + window.innerHeight * 0.2;
  heroSection.style.setProperty('--before-height', heroHeight + `${pixels}`);
  heroSection.style.setProperty('--before-height-desktop', heroHeightDesktop + `${pixels}`);
}

window.addEventListener('resize', updateHeroHeight);

updateHeroHeight(); // initial call to set height on page load
heroSection.style.setProperty('--before-width', '100%');
