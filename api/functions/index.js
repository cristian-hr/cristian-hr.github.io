"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var functions = require("firebase-functions");

// _app.default.listen(process.env.PORT || 3001, function () {
//   console.log("API listening at ".concat(process.env.PORT || 3001)); // eslint-disable-line no-console
// });

exports.server = functions.https.onRequest(_app.default);