import React from 'react';

const calcTotalScore = scores =>
  scores.reduce((total, score) => (total += score));

const getNumOfInnings = arr => (arr.length < 9 ? 9 : arr.length);

export const genLinescoreHeaderItems = sportData => {
  const statHeaders = ['R', 'H', 'E'];
  const numInnings = getNumOfInnings(sportData.away_period_scores);
  const linescoreItems = [];

  for (let i = 1; i <= numInnings; i++) {
    linescoreItems.push(<td key={i}>{i}</td>);
  }

  statHeaders.forEach(header =>
    linescoreItems.push(
      <td key={header}>
        <strong>{header}</strong>
      </td>
    )
  );

  return linescoreItems;
};

export const genLinescoreItems = (sportData, team) => {
  const linescoreItems = [];
  const numInnings = getNumOfInnings(sportData.away_period_scores);
  const teamScores = sportData[`${team}_period_scores`];
  const totalTeamScore = calcTotalScore(teamScores);
  const teamStats = [
    totalTeamScore,
    sportData[`${team}_batter_totals`].hits,
    sportData[`${team}_errors`],
  ];

  for (let i = 0; i < numInnings; i++) {
    linescoreItems.push(
      <td>{teamScores[i] !== undefined ? teamScores[i] : '-'}</td>
    );
  }

  teamStats.forEach(stat =>
    linescoreItems.push(
      <td>
        <strong>{stat}</strong>
      </td>
    )
  );

  return linescoreItems;
};
