import Leaderboard from './leaderboard-api.js';

const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const addBtn = document.querySelector('#add-btn');
const displayList = document.querySelector('.leaderboard-list');
const refreshBtn = document.querySelector('.refresh-btn');

const leaderboard = new Leaderboard(inputName, inputScore);

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  leaderboard.createScores();
});

const displayLeaderboard = async () => {
  displayList.innerText = ''; // clear leaderboard section
  const response = await leaderboard.getScores();
  response.result.forEach((item) => {
    const displayDetails = document.createElement('p');
    displayDetails.classList.add('display-details');
    displayDetails.innerHTML += `
      <b>${item.user}</b>: ${item.score}
    `;
    displayList.appendChild(displayDetails);
  });
};

refreshBtn.addEventListener('click', () => {
  leaderboard.getScores();
  displayLeaderboard();
});

export default displayLeaderboard;