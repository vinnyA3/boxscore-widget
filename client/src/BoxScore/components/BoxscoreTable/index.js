import React, { Fragment } from 'react';
import { genLinescoreHeaderItems, genLinescoreItems } from '../../helpers';
import { boxscoreTable, linescore__header } from './styles';

const BoxscoreTable = ({ leagueData }) => (
  <table className={boxscoreTable}>
    <thead className={linescore__header}>
      <tr>{genLinescoreHeaderItems(leagueData)}</tr>
    </thead>
    <tbody>
      <tr>{genLinescoreItems(leagueData, 'away')}</tr>
    </tbody>
    <tbody>
      <tr>{genLinescoreItems(leagueData, 'home')}</tr>
    </tbody>
  </table>
);

export default BoxscoreTable;
