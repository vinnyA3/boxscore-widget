import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Tabs, TabPane } from 'components/tabs';
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

  // <li title="nba" onClick={() => setLeague('nba')} />
  return sportData ? (
    <>
      <nav>
        <li onClick={() => setLeague('mlb')}>MLB</li>
        <li onClick={() => setLeague('nba')}>NBA</li>
      </nav>
      <BoxScore sportData={sportData} />
    </>
  ) : (
    ''
  );
};

render(<App />, document.getElementById('app'));
