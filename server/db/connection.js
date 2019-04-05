const { MongoClient } = require('mongodb');
let _db;

module.exports = {
  dbConnect: (url, dbName) =>
    new Promise((res, rej) =>
      MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if (err) {
          rej(err);
        } else {
          _db = client.db(dbName);
          res(client.db(dbName));
        }
      })
    ),
  dbGet: () => _db,
};
