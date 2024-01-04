const HOME_TEAM_WON = 1;

export function tournamentWinner(competitions: string[][], results: number[]) {
  let currentWinner = '';
  const scores = {[currentWinner]: 0};

  for(let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentWinner]) {
      currentWinner = winningTeam;
    }
  }

  return currentWinner;
}

function updateScores(team: string, points: number, scores: {[team: string]: number}) {
  if (!(team in scores)) scores[team] = 0;

  scores[team]+= points;
}
