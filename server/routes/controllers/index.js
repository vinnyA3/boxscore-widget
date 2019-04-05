const { getDb } = require('db/connection');
const { ObjectID } = require('mongodb');
const { sportRequestBuilder } = require('utilities');
const rp = require('request-promise');

module.exports = {
  getSportData: async (req, res) => {
    const sportRequest = sportRequestBuilder(req.sport); // check valid input & build req

    if (sportRequest) {
      try {
        const db = getDb();
        const dbData = await db.collection(req.sport).findOne({});

        if (!dbData) {
          const data = await rp(sportRequest);
          db.collection(req.sport).insertOne(data); // don't await insertion...
          return res.status(200).send(data);
        }

        const timestamp = dbData._id.getTimestamp();

        if (Math.floor((Date.now() - timestamp) / 1000) < 15) {
          return res.status(200).send(dbData);
        }

        const data = await rp(sportRequest);
        await db.collection(req.sport).drop();
        db.collection(req.sport).insertOne(data); // don't await insertion...
        res.status(200).send(data);
      } catch (err) {
        res.status(500).send({ err });
      }
    } else {
      res.status(400).send({ err: 'Invalid league' });
    }
  },
};
