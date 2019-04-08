const API_URI = 'https://chumley.barstoolsports.com/dev/data/games';

const requestBuilder = endpoint => ({
  uri: `${API_URI}/${endpoint}.json`,
  headers: {
    'User-Agent': 'Request-Promise',
  },
  json: true, // Automatically parses the JSON string in the response
});

const leagueRequestBuilder = type =>
  ({
    mlb: requestBuilder('eed38457-db28-4658-ae4f-4d4d38e9e212'),
    nba: requestBuilder('6c974274-4bfc-4af8-a9c4-8b926637ba74'),
  }[type] || void 0);

module.exports = {
  requestBuilder,
  leagueRequestBuilder,
};
