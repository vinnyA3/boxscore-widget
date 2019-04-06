import React, { Fragment } from 'react';
import { genLinescoreHeaderItems, genLinescoreItems } from '../../helpers';
import { boxscoreTable, linescore__header } from './styles';

const BoxscoreTable = ({ sportData }) => (
  <table className={boxscoreTable}>
    <thead className={linescore__header}>
      <tr>{genLinescoreHeaderItems(sportData)}</tr>
    </thead>
    <tbody>
      <tr>{genLinescoreItems(sportData, 'away')}</tr>
    </tbody>
    <tbody>
      <tr>{genLinescoreItems(sportData, 'home')}</tr>
    </tbody>
  </table>
);

export default BoxscoreTable;
