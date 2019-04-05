// const { dbGet } = require('db/connection');
const { sportRequestBuilder } = require('utilities');
const rp = require('request-promise');

module.exports = {
  getSportData: (req, res) => {
    const sportRequest = sportRequestBuilder(req.sport);

    if (sportRequest) {
      rp(sportRequest)
        .then(data => res.status(200).send({ data }))
        .catch(err => res.status(500).send({ err }));
    } else {
      res
        .status(400)
        .send({ error: 'Please supply a valid sport/league ie. MLB, NBA' });
    }
  },
};
