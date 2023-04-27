const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const addBtn = document.querySelector('#add-btn');
const displayList = document.querySelector('.leaderboard-list');
// const refreshBtn = document.querySelector('refresh-btn');

const details = [];

function displayLeaderboard() {
  displayList.innerText = ''; // clear leaderboard section
  details.forEach((content) => {
    const displayDetails = document.createElement('p');
    displayDetails.classList.add('display-details');
    displayDetails.innerHTML += `
      <b>${content.name}</b>: ${content.score}
    `;
    displayList.appendChild(displayDetails);
  });
}

addBtn.addEventListener('click', () => {
  const name = inputName.value;
  const score = inputScore.value;
  const content = { name, score };
  details.push(content);
  displayLeaderboard();
});

// eslint-disable-next-line import/prefer-default-export
export { displayLeaderboard };
