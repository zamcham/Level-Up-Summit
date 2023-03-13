// #region Main Program Data
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
// #endregion

// #region Featured Speakers Data
const featuredSpeakersList = [
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p1.jpg',
  },
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p2.jpg',
  },
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p3.jpg',
  },
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p4.jpg',
  },
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p5.jpg',
  },
  {
    speakerName: 'Lisa Johnson',
    designation: 'Berkman Professor of Enterprenourship at University Studio',
    bio: 'Name is an experienced game developer with over 10 years of experience in the industry. passionate about creating engaging and innovative gameplay experiences that resonate with players',
    photo: '../Media/Speakers/p6.jpg',
  },
]

// #endregion

// #region Speaker Section Generation 
const speakersTemplate = document.getElementById('featured_sp_card_template');

// Get the container where the program cards will be inserted
const speakersContainer = document.getElementById('featured-speakers-grid');

// Loop through the programsList array and generate the HTML for each program
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

