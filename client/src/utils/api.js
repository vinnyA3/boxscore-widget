const axios = require('axios');
// export axios promise to be consumed
module.exports = uri => axios(uri);
