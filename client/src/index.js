import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Nav, NavBrand } from 'components/Navigation';
import { Tabs } from 'components/tabs';
import BoxScore from 'BoxScore';
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
    <div>
      <Nav style={{ paddingLeft: '2.73em' }}>
        <NavBrand>
          <h1>Barstool</h1>
        </NavBrand>
        <Tabs inline={true} run={setLeague}>
          <li title="mlb" />
          <li title="nba" />
        </Tabs>
      </Nav>
      <main
        style={{ padding: '1.33em', display: 'flex', justifyContent: 'center' }}
      >
        <BoxScore sportData={sportData} />
      </main>
    </div>
  ) : (
    ''
  );
};

render(<App />, document.getElementById('app'));
