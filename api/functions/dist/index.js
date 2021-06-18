"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var functions = require("firebase-functions");

var PORT = 3001;

_app.default.listen(PORT, function () {
  console.log("API listening at ".concat(PORT)); // eslint-disable-line no-console
});

exports.portfolio_back = functions.https.onRequest(_app.default);