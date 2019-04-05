const { getDb } = require('db/connection');
const { ObjectID } = require('mongodb');
const { sportRequestBuilder } = require('utilities');
const rp = require('request-promise');

module.exports = {
  getSportData: async (req, res) => {
    const sportRequest = sportRequestBuilder(req.sport); // check valid input

    if (sportRequest) {
      const db = getDb();
      const dbData = await db.collection(req.sport).findOne({});

      if (!dbData) {
        const data = await rp(sportRequest);
        await db.collection(req.sport).insertOne(data);
        res.status(200).send(data);
      } else {
        // get the timestamp of the data ...
        // if the timestamp is < 15 seconds from the currentTime, return that
        // 'cached' data
        const dataTimestamp = dbData._id.getTimestamp();
        res.status(200).send(dbData);
      }
    } else {
      res
        .status(400)
        .send({ error: 'Please supply a valid sport/league ie. MLB, NBA' });
    }
  },
};
