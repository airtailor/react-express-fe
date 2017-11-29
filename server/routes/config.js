const config = {};

config.apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : 'http://localhost:3000';

config.getHeaders = req => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  return { client, ['access-token']: accessToken, uid };
};

module.exports = config;
