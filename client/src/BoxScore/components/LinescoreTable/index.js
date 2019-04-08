import React, { Fragment } from 'react';
import { genLinescoreHeaderItems, genLinescoreItems } from '../../helpers';
import { linescoreTable, linescore__header } from './styles';

const LinescoreTable = ({ leagueData }) => (
  <table className={linescoreTable}>
    <thead className={linescore__header}>
      <tr>
        <td>
          <span>es6</span>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>{leagueData.home_team.abbreviation}</strong>
        </td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <strong>{leagueData.away_team.abbreviation}</strong>
        </td>
      </tr>
    </tbody>
  </table>
);

export default LinescoreTable;
