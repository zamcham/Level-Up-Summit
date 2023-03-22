// #region Main Program Data
const programsList = [
  {
    program: 'Strategy',
    icon: 'fa-regular fa-chess-bishop',
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Leadership',
    icon: 'fa-regular fa-flag',
    Description: 'Testing to experienced owners .',
  },
  {
    program: 'Forums',
    icon: 'fa-regular fa-comments',
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Marketing',
    icon: 'fa-regular fa-newspaper',
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
  {
    program: 'Network',
    icon: 'fa-regular fa-user',
    Description: 'Listen to experienced owners on strategy plans for the current year.',
  },
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
  icon.classList.remove('current-class');
  icon.classList.add(...program.icon.split(' '), 'icon_main_programs');
  programCard.querySelector('h4').textContent = program.program;
  programCard.querySelector('p').textContent = program.Description;

  // Insert the program card into the programs container
  programsContainer.appendChild(programCard);
}
// #endregion

// #region Featured Speakers Data
const featuredSpeakersList = [
  {
    speakerName: 'Lisa Johnson',
    designation: 'Creative Director at Blizzard Entertainment',
    bio: 'Lisa has been a key creative force at Blizzard Entertainment for over a decade. She is best known for his work on the massively popular World of Warcraft franchise',
    photo: './Media/Speakers/p1.jpg',
  },
  {
    speakerName: 'James Ivanov',
    designation: 'Senior Marketing Manager at Electronic Arts',
    bio: 'A marketing guru with over 15 years of experience in the gaming industry. She has worked on several high-profile marketing campaigns for Electronic Arts',
    photo: './Media/Speakers/p2.jpg',
  },
  {
    speakerName: 'Rachel Coleman',
    designation: 'Lead Game Designer at Ubisoft',
    bio: 'Rachel has worked on several critically acclaimed titles, including Assassins Creed, Far Cry, and Watch Dogs. Rachel is an expert in game mechanics, systems design, and player experience.',
    photo: './Media/Speakers/p3.jpg',
  },
  {
    speakerName: 'Samantha Kim',
    designation: 'Founder and CEO of The Wandering Bard Studio',
    bio: 'Samantha is an award-winning game developer and entrepreneur. She is the founder and CEO of The Wandering Bard, an indie game studio that has produced several successful titles',
    photo: './Media/Speakers/p4.jpg',
  },
  {
    speakerName: 'Todd Lindwall',
    designation: 'Lead Programmer at CD Projekt Red',
    bio: 'Todd is a lead programmer at CD Projekt Red, the studio behind the acclaimed Witcher series and Cyberpunk 2077. He is a highly skilled programmer with over 10 years of experience in the gaming industry.',
    photo: './Media/Speakers/p5.jpg',
  },
  {
    speakerName: 'Andrei Hall',
    designation: 'Narrative Designer at Naughty Dog',
    bio: 'Andrei is a narrative designer at the studio behind the award-winning Uncharted and The Last of Us series. He is a talented writer and game designer, with a passion for creating immersive, character-driven stories.',
    photo: './Media/Speakers/p6.jpg',
  },
];

// #endregion
// #region Speaker Section Generation
const speakersTemplate = document.getElementById('featured_sp_card_template');

// Get the container where the program cards will be inserted
const speakersContainer = document.getElementById('featured-speakers-grid');

// Loop through the speakerList array and generate the HTML for each program
for (let i = 0; i < featuredSpeakersList.length; i += 1) {
  // Clone the program card template
  const speakerCard = speakersTemplate.content.cloneNode(true);
  const currentSpeaker = featuredSpeakersList[i];

  // Fill in the details for the program
  speakerCard.querySelector('.heashot_img').src = currentSpeaker.photo;
  speakerCard.querySelector('.speaker_name').textContent = currentSpeaker.speakerName;
  speakerCard.querySelector('.speaker_designation').textContent = currentSpeaker.designation;
  speakerCard.querySelector('.speaker_bio').textContent = currentSpeaker.bio;

  // Insert the program card into the programs container
  speakersContainer.appendChild(speakerCard);
}
// #endregion

// #region Load More Button
const loadMoreButton = document.querySelector('#load-more-button');
let currentlyShown = 2;

function clickedMore() { // eslint-disable-line no-unused-vars
  const speakerContainers = [...document.querySelectorAll('.featured_sp_card')];
  for (let i = currentlyShown; i < currentlyShown + 4; i += 1) {
    speakerContainers[i].style.display = 'flex';
  }

  currentlyShown += 4;

  if (currentlyShown >= speakerContainers.length) {
    loadMoreButton.style.display = 'none';
  }
}
// #endregion
// #region Toggle Button
function init() { // eslint-disable-line no-unused-vars
  const dropDownMenu = document.querySelector('.mobile_toggle_links');
  const toggleButton = document.querySelector('#toggle_button_menu');
  const closeButton = document.querySelector('#x_button_mobile');
  const openButtonClass = document.querySelector('.mobile_button');
  const closeButtonClass = document.querySelector('.x_button');
  const body = document.querySelector('body');
  const computedStyle = getComputedStyle(body);
  const { overflow } = computedStyle; function sDM() { // eslint-disable-line no-unused-vars
    dropDownMenu.classList.toggle('open');
    openButtonClass.classList.toggle('hidden');
    closeButtonClass.classList.toggle('hidden');
    if (overflow === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  toggleButton.onclick = sDM;
  closeButton.onclick = sDM;
}
// #endregion
// #region Scroll Effect
const background1 = document.getElementById('bg1');
const background2 = document.getElementById('bg2');
const background3 = document.getElementById('bg3');
const background4 = document.getElementById('bg4');
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  background1.style.top = value * 0.6 + 'px';
  background2.style.top = value * 0.8 + 'px';
  background3.style.top = value * 0.4 + 'px';
  background4.style.top = value * 0.9 + 'px';
});
// #region