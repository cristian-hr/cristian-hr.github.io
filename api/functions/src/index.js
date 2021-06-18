import server from './app';
const functions = require("firebase-functions");

// server.listen(process.env.PORT || 3001, () => {
//   console.log(`API listening at ${process.env.PORT || 3001}`); // eslint-disable-line no-console
// });

exports.server = functions.https.onRequest(server)
