// #region HeroSection Background 
const pixels = 'px';
const heroSection = document.querySelector('.hero-section');

function updateHeroHeight() {
  const heroHeight = heroSection.clientHeight + window.innerHeight * 0.05;
  const heroHeightDesktop = heroSection.clientHeight + window.innerHeight * 0.2;
  heroSection.style.setProperty('--before-height', `${heroHeight}${pixels}`);
  heroSection.style.setProperty('--before-height-desktop', `${heroHeightDesktop}${pixels}`);
}

window.addEventListener('resize', updateHeroHeight);

updateHeroHeight(); // initial call to set height on page load
heroSection.style.setProperty('--before-width', '100%');
// #endregion

//#region Main Program Data
const programsList = [
  {
    program: 'Strategy',
    icon: "fa-regular fa-chess-bishop",
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Leadership',
    icon: "fa-regular fa-flag",
    Description: 'Testing to experienced owners .',
  },
  {
    program: 'Forums',
    icon: "fa-regular fa-comments",
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Marketing',
    icon: "fa-regular fa-newspaper",
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Network',
    icon: "fa-regular fa-user",
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  }
];
// #endregion

// #region MainProgram Section Generation
const programCardTemplate = document.getElementById('progam-container-template');

// Get the container where the program cards will be inserted
const programsContainer = document.getElementById('empty_container');

// Loop through the programsList array and generate the HTML for each program
for (let i = 0; i < programsList.length; i += 1) {
  // Clone the program card template
  const programCard = programCardTemplate.content.cloneNode(true);

  // Fill in the details for the program
  const program = programsList[i];
  const icon = programCard.querySelector('i');
  icon.classList.remove("current-class");
  icon.classList.add(...program.icon.split(" "), "icon_main_programs");
  programCard.querySelector('h4').textContent = program.program;
  programCard.querySelector('p').textContent = program.Description;

  // Insert the program card into the programs container
  programsContainer.appendChild(programCard);
}
