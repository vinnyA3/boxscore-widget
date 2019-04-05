const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { web, db } = require('./config');
const { dbConnect } = require('db/connection');
const port = web.port;
// INIT
const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api', require('./routes'));

app.get('*', (_, res) => res.status(404).send({ message: 'Page not found.' }));

dbConnect(`mongodb://${db.host}:${db.port}`, db.name)
  .then(() =>
    app.listen(port, () => (console.log(`Listening on port: ${port}`), void 0))
  )
  .catch(err => (console.error(err), process.exit(1)));
