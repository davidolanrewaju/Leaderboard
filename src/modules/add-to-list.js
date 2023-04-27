const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const addBtn = document.querySelector('#add-btn');
const leaderboardSection = document.querySelector('#leaderboard');
// const refreshBtn = document.querySelector('refresh-btn');

const details = [];

// function addToList(content) {
//   const displayDetails = document.createElement('p');
//   displayDetails.classList.add('display-details');
//   displayDetails.innerText += `${content.name}: ${content.score}`;
//   leaderboardSection.appendChild(displayDetails);
// }

function displayLeaderboard() {
  leaderboardSection.innerHTML = ''; // clear leaderboard section
  details.forEach((content) => {
    const displayDetails = document.createElement('p');
    displayDetails.classList.add('display-details');
    displayDetails.innerText += `${content.name}: ${content.score}`;
    leaderboardSection.appendChild(displayDetails);
  });
}

addBtn.addEventListener('click', () => {
  const name = inputName.value;
  const score = inputScore.value;
  const content = { name, score }; // shorthand object notation
  details.push(content);
  displayLeaderboard();
});

// eslint-disable-next-line import/prefer-default-export
export { displayLeaderboard };

// class GetDetails () {
//   constructor(inputName, inputScore){
//     this.inputName = inputName;
//     this.inputScore = inputScore;
//   }

//   function name() {
//     return getName = inputName.value;
//   }

//   function score() {
//     return getScore = inputScore.value;
//   }
// }