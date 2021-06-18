"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _dotenv = require("dotenv");

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

(0, _dotenv.config)();
var router = (0, _express.Router)();
router.post("/sendemail", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, name, email, message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _mail.default.setApiKey(process.env.SENDGRID_KEY);

            _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
            _context.prev = 2;
            _context.next = 5;
            return _mail.default.send({
              to: process.env.MAIL_TO,
              from: process.env.MAIL_FROM,
              subject: "".concat(name, " from Dev Portfolio"),
              text: email,
              html: "<div><h3>".concat(name, "</h3><p>").concat(email, "</p></div><p>").concat(message, "</p></div>")
            });

          case 5:
            res.json("Email sent");
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0.response.body.errors);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/", function (req, res) {
  res.json("hola");
});
var _default = router;
exports.default = _default;