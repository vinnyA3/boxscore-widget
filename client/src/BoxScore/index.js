import React, { Fragment } from 'react';
import { boxscore, boxscore__responsive } from './styles';

import BoxscoreTable from './components/BoxscoreTable';
import LinescoreTable from './components/LinescoreTable';
import TotalScore from './components/TotalScore';

const BoxScore = ({ sportData }) => (
  <>
    <div className={boxscore}>
      <div className={boxscore__responsive}>
        <LinescoreTable sportData={sportData} />
        <BoxscoreTable sportData={sportData} />
      </div>
      <TotalScore sportData={sportData} />
    </div>
  </>
);

export default BoxScore;
