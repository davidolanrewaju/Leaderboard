const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const addBtn = document.querySelector('add-btn');
const leaderboardSection = document.querySelector('#leaderboard');
// const refreshBtn = document.querySelector('refresh-btn');

const details = [];

function GetContent() {
  const getName = inputName.value;
  const getScore = inputScore.value;
  return {
    name: getName,
    score: getScore,
  };
}

function addToList(details) {
  const displayDetails = document.createElement('p');
  displayDetails.classList.add('display-details');
  displayDetails.innerText += `${details.name}: ${details.score}`;
  leaderboardSection.appendChild(displayDetails);
}

addBtn.addEventListener('click', () => {
  const content = GetContent();
  details.push(content);
  addToList(details);
});