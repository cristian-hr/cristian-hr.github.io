import server from './app';
const functions = require("firebase-functions");

const PORT = 3001

server.listen(PORT, () => {
  console.log(`API listening at ${PORT}`); // eslint-disable-line no-console
});

exports.portfolio_back = functions.https.onRequest(server)
