import React, { Fragment } from 'react';
import { genLinescoreHeaderItems, genLinescoreItems } from './helpers';
import { boxscore } from './styles';

import BoxscoreTable from './components/BoxscoreTable';
import LinescoreTable from './components/LinescoreTable';

const BoxScore = ({ sportData }) => {
  return (
    <div className={boxscore}>
      <LinescoreTable sportData={sportData} />
      <BoxscoreTable sportData={sportData} />
    </div>
  );
};

export default BoxScore;
