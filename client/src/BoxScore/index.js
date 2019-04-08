import React, { Fragment } from 'react';
import { boxscore, boxscore__responsive } from './styles';

import BoxscoreTable from './components/BoxscoreTable';
import LinescoreTable from './components/LinescoreTable';
import TotalScore from './components/TotalScore';

const BoxScore = ({ leagueData }) => (
  <>
    <div className={boxscore}>
      <div className={boxscore__responsive}>
        <LinescoreTable leagueData={leagueData} />
        <BoxscoreTable leagueData={leagueData} />
      </div>
      <TotalScore leagueData={leagueData} />
    </div>
  </>
);

export default BoxScore;
