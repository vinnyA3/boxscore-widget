const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const rp = require('request-promise');
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const requestConfig = {
  headers: {
    'User-Agent': 'Request-Promise',
  },
  json: true, // Automatically parses the JSON string in the response
};

app.get('/api/nba', (req, res) => {
  // check for data in database
  // if last updated time < 15 seconds, return data
  // else pull in newData, save newData, return newData
  rp(
    Object.assign(
      {
        uri:
          'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json',
      },
      requestConfig,
      {}
    )
  )
    .then(data => res.status(200).send({ message: 'NBA data retrieved', data }))
    .catch(err => res.status(500).send({ err }));
});

app.get('/api/mlb', (req, res) => {
  rp(
    Object.assign(
      {
        uri:
          'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json',
      },
      requestConfig,
      {}
    )
  )
    .then(data => res.status(200).send({ message: 'MLB data retrieved', data }))
    .catch(err => res.status(500).send({ err }));
});

app.get('*', (req, res) =>
  res.status(404).send({ message: 'Page not found.' })
);

app.listen(port, () => console.log(`Listening on port: ${port}`), void 0);
