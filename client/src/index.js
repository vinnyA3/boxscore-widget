import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import BoxScore from 'boxScore';
import getData from 'utils/api';
import './sass/main';

const App = () => {
  const [sportData, setSportData] = useState(null);
  const [currentLeague, setLeague] = useState('mlb');

  useEffect(() => {
    getData(`/api/sport/${currentLeague}`).then(({ data }) =>
      setSportData(data)
    );
  }, [currentLeague]);

  return sportData ? (
    <>
      <nav>
        <aside>
          <h1>Barstool</h1>
        </aside>
        <ul>
          <li>
            <span onClick={() => setLeague('mlb')}>MLB</span>
          </li>
          <li>
            <span onClick={() => setLeague('nba')}>NBA</span>
          </li>
        </ul>
      </nav>
      <BoxScore sportData={sportData} />
    </>
  ) : (
    ''
  );
};

render(<App />, document.getElementById('app'));
