import React from 'react';

const genMLBData = (data, arr) =>
  data.forEach(val =>
    arr.push(
      <td key={val}>
        <strong>{val}</strong>
      </td>
    )
  );

const calcTotalScore = scores =>
  scores.reduce((total, score) => (total += score));

const getNumOfCells = league =>
  ({
    MLB: arr => (arr.length < 9 ? 9 : arr.length),
    NBA: arr => (arr.length < 4 ? 4 : arr.length),
  }[league]);

export const genLinescoreHeaderItems = leagueData => {
  const linescoreItems = [];
  const numCells = getNumOfCells(leagueData.league)(
    leagueData.away_period_scores
  );

  for (let i = 1; i <= numCells; i++) {
    linescoreItems.push(<td key={i}>{i}</td>);
  }

  if (leagueData.league === 'MLB') {
    genMLBData(['R', 'H', 'E'], linescoreItems);
  }

  return linescoreItems;
};

export const genLinescoreItems = (leagueData, team) => {
  const linescoreItems = [];
  const numCells = getNumOfCells(leagueData.league)(
    leagueData.away_period_scores
  );

  const teamScores = leagueData[`${team}_period_scores`];
  const totalTeamScore = calcTotalScore(teamScores);

  for (let i = 0; i < numCells; i++) {
    linescoreItems.push(
      <td>{teamScores[i] !== undefined ? teamScores[i] : '-'}</td>
    );
  }

  if (leagueData.league === 'MLB') {
    genMLBData(
      [
        totalTeamScore,
        leagueData[`${team}_batter_totals`].hits,
        leagueData[`${team}_errors`],
      ],
      linescoreItems
    );
  }

  return linescoreItems;
};
