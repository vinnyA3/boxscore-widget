import React from 'react';
import { navigation, navigation__brand, navigation__list } from './styles';

const Navigation = ({ className, ...props }) => (
  <nav className={`${navigation} ${className || ''}`}>
    <aside className={navigation__brand}>
      <h1>Barstool</h1>
    </aside>
    <ul className={navigation__list}>
      <li>
        <span onClick={() => setLeague('mlb')}>MLB</span>
      </li>
      <li>
        <span onClick={() => setLeague('nba')}>NBA</span>
      </li>
    </ul>
  </nav>
);

export default Navigation;
