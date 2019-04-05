import React, { Fragment } from 'react';
import { genLinescoreHeaderItems, genLinescoreItems } from '../../helpers';
import { linescoreTable, linescore__header } from './styles';

const LinescoreTable = ({ sportData }) => (
  <table className={linescoreTable}>
    <thead className={linescore__header}>
      <tr>
        <td />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>{sportData.home_team.abbreviation}</strong>
        </td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <strong>{sportData.away_team.abbreviation}</strong>
        </td>
      </tr>
    </tbody>
  </table>
);

export default LinescoreTable;
