const { getDb } = require('db/connection');
const { ObjectID } = require('mongodb');
const { leagueRequestBuilder } = require('utilities');
const rp = require('request-promise');

module.exports = {
  getLeagueData: async (req, res) => {
    const leagueRequest = leagueRequestBuilder(req.league); // check valid input & build req

    if (leagueRequest) {
      try {
        const db = getDb();
        const dbData = await db.collection(req.league).findOne({});

        if (!dbData) {
          const data = await rp(leagueRequest);
          db.collection(req.league).insertOne(data); // don't await insertion...
          return res.status(200).send(data);
        }

        const timestamp = dbData._id.getTimestamp();

        if (Math.floor((Date.now() - timestamp) / 1000) < 15) {
          return res.status(200).send(dbData);
        }

        const data = await rp(leagueRequest);
        await db.collection(req.league).drop();
        db.collection(req.league).insertOne(data); // don't await insertion...
        res.status(200).send(data);
      } catch (err) {
        res.status(500).send({ err });
      }
    } else {
      res.status(400).send({ err: 'Invalid league' });
    }
  },
};
