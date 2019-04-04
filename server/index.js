const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 3000;
const app = express();
const apiRouter = require('./routes');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api', apiRouter);

app.get('*', (req, res) =>
  res.status(404).send({ message: 'Page not found.' })
);

app.listen(port, () => (console.log(`Listening on port: ${port}`), void 0));
