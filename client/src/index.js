import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import BoxScore from 'boxScore';
import getData from 'utils/api';

const App = () => {
  const [sportData, setSportData] = useState(null);
  useEffect(() => {
    getData('/api/sport/mlb').then(({ data }) => setSportData(data));
  }, []);

  return <>{sportData ? <BoxScore sportData={sportData} /> : ''}</>;
};

render(<App />, document.getElementById('app'));
