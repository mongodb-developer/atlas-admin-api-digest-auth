const urllib = require('urllib');

const baseUrl = 'https://cloud.mongodb.com/api/atlas/v1.0/';
const { ATLAS_USER, ATLAS_USER_KEY } = process.env;
const options = {
  digestAuth: `${ATLAS_USER}:${ATLAS_USER_KEY}`,
};

urllib.request(baseUrl, options, (error, data, response) => {
  if (error || response.statusCode !== 200) {
    console.error(`Error: ${error}`);
    console.error(`Status code: ${response.statusCode}`);
  } else {
    console.log(JSON.parse(data));
  }
});
