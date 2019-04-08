import React from 'react';
import { totalScore, teamData, progress } from './styles';

const gameProgress = ({ event_information }, league) => {
  if (league === 'MLB') {
    if (event_information.status === 'completed') {
      return '9th';
    }
  }

  if (league === 'NBA') {
    if (event_information.status === 'completed') {
      return '4th';
    }
  }
};

const TotalScore = ({ leagueData }) => {
  return (
    <div className={totalScore}>
      <section className={teamData}>
        <h2>{leagueData.home_team.last_name}</h2>
      </section>
      <section className={progress}>
        <h3>{gameProgress(leagueData, leagueData.league)}</h3>
      </section>
      <section className={teamData}>
        <h2>{leagueData.away_team.last_name}</h2>
      </section>
    </div>
  );
};

export default TotalScore;
