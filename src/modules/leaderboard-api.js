class Leaderboard {
  constructor(inputName, inputScore) {
    this.inputName = inputName;
    this.inputScore = inputScore;
  }

  createScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gM5SPU2u7B8UfGoR9LJt/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: this.inputName.value,
        score: this.inputScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  };

  getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gM5SPU2u7B8UfGoR9LJt/scores/',
      {
        method: 'GET',
      });
    const data = await response.json();
    return data;
  };
}

export default Leaderboard;