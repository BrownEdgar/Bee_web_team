/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(6);
var external_http_default = /*#__PURE__*/__webpack_require__.n(external_http_);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(1);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(7);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);

// CONCATENATED MODULE: ./middleware/ErrorHendler.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ErrorHandler =
/*#__PURE__*/
function (_Error) {
  _inherits(ErrorHandler, _Error);

  function ErrorHandler(statusCode, message) {
    var _this;

    _classCallCheck(this, ErrorHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorHandler).call(this));
    _this.statusCode = statusCode;
    _this.message = message;
    return _this;
  }

  return ErrorHandler;
}(_wrapNativeSuper(Error));
var handleError = function handleError(err, res) {
  var statusCode = err.statusCode,
      message = err.message;
  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: message
  });
};
// EXTERNAL MODULE: external "express-session"
var external_express_session_ = __webpack_require__(8);
var external_express_session_default = /*#__PURE__*/__webpack_require__.n(external_express_session_);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(0);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./models/Benefit.js

var benefitSchema = external_mongoose_default.a.Schema({
  _id: {
    type: external_mongoose_default.a.Schema.Types.ObjectId
  },
  title: {
    type: String,
    validate: {
      validator: function validator(v) {
        return /[a-zA-Z]/.test(v);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid phone number!");
      }
    },
    required: [true, 'User phone number required']
  },
  description: {
    type: String,
    required: [true, "field is required, please add a description"]
  }
});
/* harmony default export */ var Benefit = (external_mongoose_default.a.model("Benefit", benefitSchema));
// CONCATENATED MODULE: ./models/BenefitsHistory.js

var benefitHistorySchema = external_mongoose_default.a.Schema({
  benefitId: {
    type: 'ObjectId',
    ref: 'Benefit',
    required: [true, 'please fill in the field']
  },
  userId: {
    type: 'ObjectId',
    ref: 'User',
    required: [true, 'please fill in the field']
  }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});
/* harmony default export */ var BenefitsHistory = (external_mongoose_default.a.model("BenefitHistory", benefitHistorySchema));
// CONCATENATED MODULE: ./models/User.js

var userSchema = external_mongoose_default.a.Schema({
  _id: {
    type: external_mongoose_default.a.Schema.Types.ObjectId
  },
  firstname: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2
  },
  lastname: {
    type: String,
    required: [true, "surname fields is required"],
    maxlength: 100,
    minlength: 2
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber fields is required"]
  },
  email: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 5,
    unique: true
  },
  salary: {
    type: Number,
    required: true,
    "default": null
  },
  password: {
    type: String,
    required: [true, 'password field is required'],
    maxlength: [156, 'Too much characters'],
    minlength: [6, 'Too few characters']
  },
  birthday: {
    type: Date,
    required: [true, 'dob field is required'],
    min: '1957-09-28',
    max: '2000-01-01'
  },
  role: {
    type: String,
    "enum": ["0", "1", "2"],
    required: [true, 'Must by "0"-admin "1"-meneger, "2"-stuff']
  },
  deletedAt: {
    type: Date,
    "default": null
  }
}, {
  timestamps: {
    createAt: "created_at"
  }
});
/* harmony default export */ var User = (external_mongoose_default.a.model("User", userSchema));
// CONCATENATED MODULE: ./models/Candidats.js

var condidatSchema = external_mongoose_default.a.Schema({
  _id: {
    type: external_mongoose_default.a.Schema.Types.ObjectId
  },
  openPosId: {
    type: external_mongoose_default.a.Schema.Types.ObjectId,
    ref: 'OpenPosition',
    required: [true, 'openPosId is required, please indicate it']
  },
  name: {
    type: String,
    required: [true, 'please indicate a field'],
    max: 255,
    min: 2
  },
  surname: {
    type: String,
    required: [true, 'please indicate a field'],
    max: 255,
    min: 2
  },
  email: {
    type: String,
    required: [true, 'please indicate a field'],
    max: 255,
    min: 6
  },
  gender: {
    type: String,
    "enum": ["male", "female"],
    required: [true, 'please indicate your gender']
  },
  age: {
    type: Number,
    required: [true, 'please indicate your age'],
    min: 18,
    max: 63
  },
  skills: {
    type: String,
    required: [true, 'please indicate yours skills']
  },
  education: {
    type: String,
    required: [true, 'please indicate where you studied']
  },
  experience: {
    type: String,
    required: [true, 'please indicate yours experience']
  }
});
/* harmony default export */ var Candidats = (external_mongoose_default.a.model("Condidat", condidatSchema));
// CONCATENATED MODULE: ./models/OpenPosition.js

var openPositionSchema = external_mongoose_default.a.Schema({
  id: {
    type: external_mongoose_default.a.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2
  },
  description: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 2
  },
  gender: {
    type: String,
    "enum": ["male", "female"]
  },
  ageLimit: {
    type: Number,
    "default": 18,
    min: 18,
    max: 63
  },
  salary: {
    type: Number,
    "default": 50000,
    required: true,
    min: 50000
  }
});
/* harmony default export */ var OpenPosition = (external_mongoose_default.a.model("OpenPosition", openPositionSchema));
// CONCATENATED MODULE: ./models/TicketList.js

var maxDate = Date.now() + 60 * 24 * 60 * 60 * 1000;
var ticketSchema = external_mongoose_default.a.Schema({
  userId: {
    type: external_mongoose_default.a.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateStart: {
    type: Date,
    min: Date.now,
    max: maxDate,
    "default": function _default() {
      return Date.now() + 3 * 60 * 60 * 1000;
    },
    required: true
  },
  dateEnd: {
    type: Date,
    min: Date.now,
    max: maxDate,
    "default": function _default() {
      return Date.now() + 7 * 24 * 60 * 60 * 1000;
    },
    required: true
  }
});
/* harmony default export */ var TicketList = (external_mongoose_default.a.model("Ticket", ticketSchema));
// CONCATENATED MODULE: ./models/index.js






/* harmony default export */ var models = ({
  Benefit: Benefit,
  BenefitsHistory: BenefitsHistory,
  User: User,
  Candidats: Candidats,
  OpenPosition: OpenPosition,
  TicketList: TicketList
});
// CONCATENATED MODULE: ./helpers/error.js
function error_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ErrorMessage = {
  EMAIL_EXIST: 'This Email is already exists',
  SERVER_ERROR: 'Something is Wrong, Server error',
  ID_ERROR: 'ID is not found',
  ID_LENGTH_ERROR: 'ID is not found, it is too short',
  NOTFOUND_ERROR: 'Is not found',
  BENERR_FAILED: 'Benefit update failed',
  NO_DATA_ERROR: "We don't have any data yet",
  CANDIDAT_NOTFOUND: 'Candidat is not found',
  CANDIDAT_DELETED: 'Candidat is alredy deleted!',
  UPDATE_ERROR: 'Update failed',
  GIFT_ERROR: "This user has already received this benefit.",
  POSITION_EXIST: "This description or title already exists",
  VACATION_ERROR: "You cannot ask for vacation while on vacation",
  SUCCESSFUL: "Successful operation",
  EXTRA_ERROR: "Some field is superfluous / extra field",
  REGISTER_ERROR: "Some field is not present, please fill correct"
};
var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    error_classCallCheck(this, Errors);
  }

  _createClass(Errors, [{
    key: "successful",
    value: function successful(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.SUCCESSFUL;
      res.status(201).json({
        message: message
      });
    }
  }, {
    key: "idLengthError",
    value: function idLengthError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.ID_LENGTH_ERROR;
      res.status(409).json({
        message: message
      });
    }
  }, {
    key: "notFoundError",
    value: function notFoundError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.NOTFOUND_ERROR;
      res.status(404).json({
        message: message
      });
    }
  }, {
    key: "noDataError",
    value: function noDataError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.NO_DATA_ERROR;
      res.status(500).json({
        message: message
      });
    }
  }, {
    key: "conflictError",
    value: function conflictError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Something is Wrong";
      res.status(409).json({
        message: message
      });
    }
  }, {
    key: "candidatDelError",
    value: function candidatDelError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.CANDIDAT_DELETED;
      res.status(409).json({
        message: message
      });
    }
  }, {
    key: "registerError",
    value: function registerError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.REGISTER_ERROR;
      res.status(412).json({
        message: message
      });
    }
  }, {
    key: "saveError",
    value: function saveError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.REGISTER_ERROR;
      res.status(412).json({
        message: message
      });
    }
  }, {
    key: "serverError",
    value: function serverError(res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ErrorMessage.SERVER_ERROR;
      res.status(500).json({
        message: message
      });
    }
  }]);

  return Errors;
}();
// CONCATENATED MODULE: ./services/Benefits.js
function Benefits_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Benefits_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Benefits_createClass(Constructor, protoProps, staticProps) { if (protoProps) Benefits_defineProperties(Constructor.prototype, protoProps); if (staticProps) Benefits_defineProperties(Constructor, staticProps); return Constructor; }




var Benefits_Error = new Errors();

var Benefits_BenefitsController =
/*#__PURE__*/
function () {
  function BenefitsController(models) {
    Benefits_classCallCheck(this, BenefitsController);

    this.models = models;
  } //get all Benefit Lists


  Benefits_createClass(BenefitsController, [{
    key: "getBenefits",
    value: function getBenefits(res) {
      var benefits;
      return regeneratorRuntime.async(function getBenefits$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.benefits.find().select('title description _id'));

            case 2:
              benefits = _context.sent;

              if (benefits.length < 1) {
                Benefits_Error.conflictError(res, ErrorMessage.NO_DATA_ERROR);
              }

              return _context.abrupt("return", {
                count: benefits.length,
                benefits: benefits
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getBenefit",
    //get benefit by spesial ID
    value: function getBenefit(res, _id) {
      var benefit;
      return regeneratorRuntime.async(function getBenefit$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.benefits.findOne({
                _id: _id
              }).select('title description _id'));

            case 2:
              benefit = _context2.sent;

              if (!benefit) {
                Benefits_Error.conflictError(res, ErrorMessage.ID_ERROR);
              }

              return _context2.abrupt("return", benefit);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addBenefits",
    //add new Benefit in Collection
    value: function addBenefits(res, title) {
      var _this = this;

      var description,
          sumary,
          _args3 = arguments;
      return regeneratorRuntime.async(function addBenefits$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              description = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "for a good job!";
              sumary = this.models.benefits.find({
                title: title,
                description: description
              }).exec().then(function (result) {
                if (result.length >= 1) {
                  Benefits_Error.conflictError(res, ErrorMessage.POSITION_EXIST);
                } else {
                  var norBenefit = new _this.models.benefits({
                    _id: new external_mongoose_default.a.Types.ObjectId(),
                    title: title,
                    description: description
                  });
                  return norBenefit.save();
                }
              });
              return _context3.abrupt("return", sumary);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateBenefits",
    //Update Benefit in Collection
    value: function updateBenefits(res, _id, updateOps) {
      var updateBenefit;
      return regeneratorRuntime.async(function updateBenefits$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.models.benefits.findByIdAndUpdate({
                _id: _id
              }, {
                $set: updateOps
              }, {
                "new": true
              }).select('title description _id'));

            case 2:
              updateBenefit = _context4.sent;

              if (updateBenefit) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", Benefits_Error.notFoundError(res));

            case 5:
              return _context4.abrupt("return", updateBenefit);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteBenefit",
    //delete Benefit by Id
    value: function deleteBenefit(_id) {
      var benefits, check;
      return regeneratorRuntime.async(function deleteBenefit$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.models.benefits.deleteOne({
                _id: _id
              }));

            case 2:
              benefits = _context5.sent;
              console.log("benefits: ", benefits);
              check = benefits.deletedCount;

              if (!(check == 0)) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", Benefits_Error.conflictError(409, ErrorMessage.ID_ERROR));

            case 7:
              return _context5.abrupt("return", {
                count: benefits.length,
                benefits: benefits
              });

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return BenefitsController;
}();

/* harmony default export */ var Benefits = (Benefits_BenefitsController);
// CONCATENATED MODULE: ./services/BenefitsHistory.js
function BenefitsHistory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BenefitsHistory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BenefitsHistory_createClass(Constructor, protoProps, staticProps) { if (protoProps) BenefitsHistory_defineProperties(Constructor.prototype, protoProps); if (staticProps) BenefitsHistory_defineProperties(Constructor, staticProps); return Constructor; }



var BenefitsHistory_Error = new Errors();

var BenefitsHistory_BenefitHistoryController =
/*#__PURE__*/
function () {
  function BenefitHistoryController(models) {
    BenefitsHistory_classCallCheck(this, BenefitHistoryController);

    this.models = models;
  } //get all Benefit Lists done


  BenefitsHistory_createClass(BenefitHistoryController, [{
    key: "getBenefitsHistory",
    value: function getBenefitsHistory(res) {
      var benHistory;
      return regeneratorRuntime.async(function getBenefitsHistory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.benefitsHistory.find().populate("benefitId", "title").populate("userId", 'firstname'));

            case 2:
              benHistory = _context.sent;

              if (benHistory.length) {
                _context.next = 5;
                break;
              }

              throw BenefitsHistory_Error.noDataError(res);

            case 5:
              return _context.abrupt("return", {
                count: benHistory.length,
                benHistory: benHistory
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getHistoryById",
    //get Benefits History by spesial ID
    value: function getHistoryById(_id) {
      var benHistoryId;
      return regeneratorRuntime.async(function getHistoryById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.benefitsHistory.findOne({
                _id: _id
              }));

            case 2:
              benHistoryId = _context2.sent;

              if (benHistoryId) {
                _context2.next = 5;
                break;
              }

              throw new ErrorHandler(409, ErrorMessage.ID_ERROR);

            case 5:
              return _context2.abrupt("return", benHistoryId);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addBenefitsHistory",
    //add new Benefits History in Collection
    value: function addBenefitsHistory(res, benefitId, userId) {
      var _this = this;

      var check, sumary;
      return regeneratorRuntime.async(function addBenefitsHistory$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(this.models.benefits.find({
                _id: benefitId
              }));

            case 2:
              check = _context3.sent;
              console.log("check: ", check);

              if (!(check.length < 1)) {
                _context3.next = 6;
                break;
              }

              throw BenefitsHistory_Error.notFoundError(res, "benefitId is not found");

            case 6:
              sumary = this.models.benefitsHistory.find({
                benefitId: benefitId,
                userId: userId
              }).exec().then(function (result) {
                if (result.length >= 1) {
                  BenefitsHistory_Error.notFoundError(res, ErrorMessage.GIFT_ERROR);
                } else {
                  var norBenefitHistory = new _this.models.benefitsHistory({
                    benefitId: benefitId,
                    userId: userId
                  });
                  norBenefitHistory.save();
                  return norBenefitHistory;
                }
              })["catch"](function (err) {
                throw new ErrorHandler(500, ErrorMessage.GIFT_ERROR);
              });
              return _context3.abrupt("return", sumary);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteBenefitHistory",
    //delete Benefits History by Id
    value: function deleteBenefitHistory(_id) {
      var benHistory;
      return regeneratorRuntime.async(function deleteBenefitHistory$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.models.benefitsHistory.deleteOne({
                _id: _id
              }));

            case 2:
              benHistory = _context4.sent;

              if (benHistory) {
                _context4.next = 5;
                break;
              }

              throw new ErrorHandler(409, ErrorMessage.NOTFOUND_ERROR);

            case 5:
              return _context4.abrupt("return", {
                count: benHistory.length,
                benHistory: benHistory
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }]);

  return BenefitHistoryController;
}();

/* harmony default export */ var services_BenefitsHistory = (BenefitsHistory_BenefitHistoryController);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(2);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);

// CONCATENATED MODULE: ./services/Users.js
function Users_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Users_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Users_createClass(Constructor, protoProps, staticProps) { if (protoProps) Users_defineProperties(Constructor.prototype, protoProps); if (staticProps) Users_defineProperties(Constructor, staticProps); return Constructor; }





var Users_Error = new Errors();

var Users_UsersController =
/*#__PURE__*/
function () {
  function UsersController(models) {
    Users_classCallCheck(this, UsersController);

    this.models = models;
  } //get user done


  Users_createClass(UsersController, [{
    key: "getUser",
    value: function getUser(res, _id) {
      var user;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.users.findOne({
                _id: _id,
                deletedAt: null
              }).select('firstname lastname email birthday phoneNumber role salary _id'));

            case 2:
              user = _context.sent;

              if (user) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", Users_Error.conflictError(res, "User ".concat(ErrorMessage.ID_ERROR)));

            case 5:
              return _context.abrupt("return", user);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getUsers",
    //get All users from User Collections 
    value: function getUsers(res) {
      var users;
      return regeneratorRuntime.async(function getUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.users.find({
                deletedAt: null
              }).select('firstname lastname salary phoneNumber email birthday password role _id'));

            case 2:
              users = _context2.sent;

              if (!(users.length < 1)) {
                _context2.next = 5;
                break;
              }

              throw new ErrorHandler(409, "".concat(ErrorMessage.NO_DATA_ERROR));

            case 5:
              return _context2.abrupt("return", {
                count: users.length,
                users: res.pagination
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    } //add new users in Collection

  }, {
    key: "addUser",
    value: function addUser(res, firstname, lastname, salary, phoneNumber, email, password, birthday, role) {
      var _this = this;

      var result;
      return regeneratorRuntime.async(function addUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              result = this.models.users.find({
                email: email
              }).exec().then(function (user) {
                console.log("user: ", user);

                if (user.length >= 1) {
                  return Users_Error.conflictError(res, "".concat(ErrorMessage.EMAIL_EXIST));
                }

                var norUser = new _this.models.users({
                  _id: new external_mongoose_default.a.Types.ObjectId(),
                  firstname: firstname,
                  lastname: lastname,
                  salary: salary,
                  phoneNumber: phoneNumber,
                  email: email,
                  password: password,
                  birthday: birthday,
                  role: role
                });
                external_bcryptjs_default.a.genSalt(10, function (err, salt) {
                  external_bcryptjs_default.a.hash(norUser.password, salt, function (err, hash) {
                    if (err) {
                      throw err;
                    }

                    norUser.password = hash;
                    var r = norUser.save(function (err) {
                      if (err) {
                        return Users_Error.saveError(res, "".concat(err.message));
                      }

                      return Users_Error.successful(res);
                    });
                    return r;
                  });
                });
              })["catch"](function (err) {
                return Users_Error.successful(res, "".concat(err.message));
              });
              return _context3.abrupt("return", result);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateUser",
    //Update User in Collection done
    value: function updateUser(_id, updateOps) {
      var updateUser;
      return regeneratorRuntime.async(function updateUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.models.users.findByIdAndUpdate({
                _id: _id
              }, {
                $set: updateOps
              }, {
                "new": true
              }).select('firsname lastname salary phoneNumber email birthday role'));

            case 2:
              updateUser = _context4.sent;

              if (updateUser) {
                _context4.next = 5;
                break;
              }

              throw new ErrorHandler(409, "User ".concat(ErrorMessage.NOTFOUND_ERROR));

            case 5:
              return _context4.abrupt("return", updateUser);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteUser",
    //delete User by Id done!
    value: function deleteUser(res, _id) {
      var chekDeleted, user;
      return regeneratorRuntime.async(function deleteUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.models.users.find({
                _id: _id,
                deletedAt: {
                  $gt: 1
                }
              }));

            case 2:
              chekDeleted = _context5.sent;

              if (!(chekDeleted.length >= 1)) {
                _context5.next = 7;
                break;
              }

              throw Users_Error.notFoundError(res, "User is alredy Deleted");

            case 7:
              _context5.next = 9;
              return regeneratorRuntime.awrap(this.models.users.findByIdAndUpdate({
                _id: _id
              }, {
                deletedAt: Date.now()
              }));

            case 9:
              user = _context5.sent;

              if (user) {
                _context5.next = 12;
                break;
              }

              throw Users_Error.notFoundError(res, "User ".concat(ErrorMessage.NOTFOUND_ERROR));

            case 12:
              return _context5.abrupt("return", {
                count: user.length,
                user: user
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return UsersController;
}();

/* harmony default export */ var Users = (Users_UsersController);
// CONCATENATED MODULE: ./services/Candidat.js
function Candidat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Candidat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Candidat_createClass(Constructor, protoProps, staticProps) { if (protoProps) Candidat_defineProperties(Constructor.prototype, protoProps); if (staticProps) Candidat_defineProperties(Constructor, staticProps); return Constructor; }




var Candidat_Error = new Errors();

var Candidat_CandidatsController =
/*#__PURE__*/
function () {
  function CandidatsController(models) {
    Candidat_classCallCheck(this, CandidatsController);

    this.models = models;
  } //get all Candidat Lists done!


  Candidat_createClass(CandidatsController, [{
    key: "getCandidats",
    value: function getCandidats(res) {
      var candidats;
      return regeneratorRuntime.async(function getCandidats$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.candidat.find().select('openPosId name surname email age skills experience'));

            case 2:
              candidats = _context.sent;

              if (!(candidats.length < 1)) {
                _context.next = 5;
                break;
              }

              throw Errors.notFoundError(res, ErrorMessage.NO_DATA_ERROR);

            case 5:
              return _context.abrupt("return", {
                count: candidats.length,
                candidats: candidats
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getSpecialCandidat",
    //get Candidat by spesial ID done
    value: function getSpecialCandidat(_id) {
      var candidats;
      return regeneratorRuntime.async(function getSpecialCandidat$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.candidat.findOne({
                _id: _id
              }).select('openPosId name surname email age skills experience'));

            case 2:
              candidats = _context2.sent;

              if (candidats) {
                _context2.next = 5;
                break;
              }

              throw new ErrorHandler(409, ErrorMessage.NOTFOUND_ERROR);

            case 5:
              return _context2.abrupt("return", candidats);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addCandidats",
    //add new candidats in Collection done!
    value: function addCandidats(res, openPosId, name, surname, email, age, gender, skills, education, experience) {
      var _this = this;

      var sumary;
      return regeneratorRuntime.async(function addCandidats$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sumary = this.models.candidat.find({
                email: email
              }).exec().then(function (result) {
                if (result.length >= 1) {
                  return Candidat_Error.conflictError(res, ErrorMessage.EMAIL_EXIST);
                } else {
                  var norCandidat = new _this.models.candidat({
                    _id: new external_mongoose_default.a.Types.ObjectId(),
                    openPosId: openPosId,
                    name: name,
                    surname: surname,
                    email: email,
                    age: age,
                    gender: gender,
                    skills: skills,
                    education: education,
                    experience: experience
                  });
                  norCandidat.save(function (err) {
                    if (err) {
                      return Candidat_Error.saveError(res, "".concat(err.message));
                    }

                    return Candidat_Error.successful(res);
                  });
                }
              })["catch"](function (err) {
                console.log("sebastian", err);
                return Candidat_Error.serverError(res);
              });
              return _context3.abrupt("return", sumary);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateCandidat",
    //Update Candidat in Collection done!
    value: function updateCandidat(_id, updateOps) {
      var _this2 = this;

      var sumary;
      return regeneratorRuntime.async(function updateCandidat$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("updateOps", updateOps.email);
              sumary = this.models.candidat.find({
                email: updateOps.email
              }).exec().then(function _callee(result) {
                var updateCandidat;
                return regeneratorRuntime.async(function _callee$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(result.length >= 1)) {
                          _context4.next = 4;
                          break;
                        }

                        return _context4.abrupt("return", new ErrorHandler(409, ErrorMessage.EMAIL_EXIST));

                      case 4:
                        _context4.next = 6;
                        return regeneratorRuntime.awrap(_this2.models.candidat.findByIdAndUpdate({
                          _id: _id
                        }, {
                          $set: updateOps
                        }, {
                          "new": true
                        }));

                      case 6:
                        updateCandidat = _context4.sent;

                        if (updateCandidat) {
                          _context4.next = 9;
                          break;
                        }

                        return _context4.abrupt("return", new ErrorHandler(400, ErrorMessage.UPDATE_ERROR));

                      case 9:
                        return _context4.abrupt("return", updateCandidat);

                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                });
              })["catch"](function (err) {
                return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
              });
              return _context5.abrupt("return", sumary);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteCandidat",
    //delete Candidat by Id
    value: function deleteCandidat(_id) {
      var candidats;
      return regeneratorRuntime.async(function deleteCandidat$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.models.candidat.deleteOne({
                _id: _id
              }));

            case 2:
              candidats = _context6.sent;

              if (candidats) {
                _context6.next = 5;
                break;
              }

              throw new ErrorHandler(409, "Candidat ".concat(ErrorMessage.NOTFOUND_ERROR));

            case 5:
              return _context6.abrupt("return", {
                count: candidats.length,
                candidats: candidats
              });

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }]);

  return CandidatsController;
}();

/* harmony default export */ var Candidat = (Candidat_CandidatsController);
// CONCATENATED MODULE: ./services/OpenPosition.js
function OpenPosition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OpenPosition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OpenPosition_createClass(Constructor, protoProps, staticProps) { if (protoProps) OpenPosition_defineProperties(Constructor.prototype, protoProps); if (staticProps) OpenPosition_defineProperties(Constructor, staticProps); return Constructor; }




var OpenPosition_OpenPositionController =
/*#__PURE__*/
function () {
  function OpenPositionController(models) {
    OpenPosition_classCallCheck(this, OpenPositionController);

    this.models = models;
  } //get all Benefit Lists done!


  OpenPosition_createClass(OpenPositionController, [{
    key: "getOpenPosition",
    value: function getOpenPosition() {
      var positions;
      return regeneratorRuntime.async(function getOpenPosition$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.openPosition.find().select('_id title description ageLimit salary'));

            case 2:
              positions = _context.sent;

              if (!(positions.length < 1)) {
                _context.next = 5;
                break;
              }

              throw new ErrorHandler(500, ErrorMessage.NO_DATA_ERROR);

            case 5:
              return _context.abrupt("return", {
                count: positions.length,
                positions: positions
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getSpecialPosition",
    //get benefit by spesial ID done
    value: function getSpecialPosition(_id) {
      var position;
      return regeneratorRuntime.async(function getSpecialPosition$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.openPosition.findOne({
                _id: _id
              }).select('_id title description ageLimit salary'));

            case 2:
              position = _context2.sent;

              if (position) {
                _context2.next = 5;
                break;
              }

              throw new ErrorHandler(500, "Position ".concat(ErrorMessage.ID_ERROR));

            case 5:
              return _context2.abrupt("return", position);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addOpenPosition",
    //add new position in Collection done!
    value: function addOpenPosition(title, description, gender, ageLimit, salary) {
      var _this = this;

      var sumary;
      return regeneratorRuntime.async(function addOpenPosition$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sumary = this.models.openPosition.find({
                $or: [{
                  title: title
                }, {
                  description: description
                }]
              }, {
                _id: 0
              }).exec().then(function (result) {
                if (result.length >= 1) {
                  throw new ErrorHandler(500, "".concat(ErrorMessage.POSITION_EXIST));
                } else {
                  var norPosition = new _this.models.openPosition({
                    title: title,
                    description: description,
                    gender: gender,
                    ageLimit: ageLimit,
                    salary: salary
                  });
                  norPosition.save();
                  return {
                    status: 201,
                    message: "Open Position is created"
                  };
                }
              })["catch"](function (err) {
                throw new ErrorHandler(500, "".concat(ErrorMessage.SERVER_ERROR));
              });
              return _context3.abrupt("return", sumary);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateOpenPosition",
    //Update OpenPosition in Collection done
    value: function updateOpenPosition(_id, updateOps) {
      var updatePosition;
      return regeneratorRuntime.async(function updateOpenPosition$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.models.openPosition.findByIdAndUpdate({
                _id: _id
              }, {
                $set: updateOps
              }, {
                "new": true
              }).select('_id title description ageLimit salary'));

            case 2:
              updatePosition = _context4.sent;

              if (updatePosition) {
                _context4.next = 5;
                break;
              }

              throw new ErrorHandler(500, "Open Position ".concat(ErrorMessage.UPDATE_ERROR));

            case 5:
              return _context4.abrupt("return", updatePosition);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteOpenPosition",
    //delete OpenPosition by Id
    value: function deleteOpenPosition(_id) {
      var position;
      return regeneratorRuntime.async(function deleteOpenPosition$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.models.openPosition.deleteOne({
                _id: _id
              }));

            case 2:
              position = _context5.sent;

              if (position) {
                _context5.next = 5;
                break;
              }

              throw new ErrorHandler(500, "Open Position ".concat(ErrorMessage.NOTFOUND_ERROR));

            case 5:
              return _context5.abrupt("return", {
                count: position.length,
                position: position
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return OpenPositionController;
}();

/* harmony default export */ var services_OpenPosition = (OpenPosition_OpenPositionController);
// CONCATENATED MODULE: ./services/TicketList.js
function TicketList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TicketList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TicketList_createClass(Constructor, protoProps, staticProps) { if (protoProps) TicketList_defineProperties(Constructor.prototype, protoProps); if (staticProps) TicketList_defineProperties(Constructor, staticProps); return Constructor; }




var TicketList_TicketListsController =
/*#__PURE__*/
function () {
  function TicketListsController(models) {
    TicketList_classCallCheck(this, TicketListsController);

    this.models = models;
  } //get all Ticket List  done


  TicketList_createClass(TicketListsController, [{
    key: "getTicketLists",
    value: function getTicketLists() {
      var ticketList;
      return regeneratorRuntime.async(function getTicketLists$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.models.ticketList.find().sort({
                dateStart: 1
              }));

            case 2:
              ticketList = _context.sent;

              if (!(ticketList.length < 1)) {
                _context.next = 5;
                break;
              }

              throw new ErrorHandler(409, ErrorMessage.NO_DATA_ERROR);

            case 5:
              return _context.abrupt("return", {
                count: ticketList.length,
                ticketList: ticketList
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getTicketListById",
    //get Ticket Lists by spesial ID
    value: function getTicketListById(_id) {
      var ticketListId;
      return regeneratorRuntime.async(function getTicketListById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.models.ticketList.findOne({
                _id: _id
              }, {
                _id: 0
              }).select("userId dateStart dateEnd"));

            case 2:
              ticketListId = _context2.sent;

              if (ticketListId) {
                _context2.next = 5;
                break;
              }

              throw new ErrorHandler(409, "Ticket List ".concat(ErrorMessage.ID_ERROR));

            case 5:
              return _context2.abrupt("return", ticketListId);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "addTicketList",
    //add new Ticket Lists in Collection
    value: function addTicketList(userId, dateStart, dateEnd) {
      var _this = this;

      var sumary;
      return regeneratorRuntime.async(function addTicketList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sumary = this.models.ticketList.find({
                userId: userId
              }).exec().then(function (result) {
                if (result.length >= 1) {
                  return new ErrorHandler(409, ErrorMessage.VACATION_ERROR);
                } else {
                  var norTicketList = new _this.models.ticketList({
                    userId: userId,
                    dateStart: dateStart,
                    dateEnd: dateEnd
                  });
                  norTicketList.save();
                  return {
                    status: 201,
                    message: "Thanck you, Ticket List  is pending"
                  };
                }
              })["catch"](function (err) {
                return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
              });
              return _context3.abrupt("return", sumary);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateTicketList",
    //Update Ticket Lists in Collection
    value: function updateTicketList(_id, updateOps) {
      var updateTicketList;
      return regeneratorRuntime.async(function updateTicketList$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.models.ticketList.findByIdAndUpdate({
                _id: _id
              }, {
                $set: updateOps
              }, {
                "new": true
              }).select("userId dateStart dateEnd"));

            case 2:
              updateTicketList = _context4.sent;

              if (updateTicketList) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", new ErrorHandler(409, "Ticket ListError ".concat(Message.UPDATE_ERROR)));

            case 5:
              return _context4.abrupt("return", new ErrorHandler(200, updateTicketList));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    } //delete Ticket Lists by Id

  }, {
    key: "deleteTicketList",
    value: function deleteTicketList(_id) {
      var ticketList;
      return regeneratorRuntime.async(function deleteTicketList$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.models.ticketList.deleteOne({
                _id: _id
              }));

            case 2:
              ticketList = _context5.sent;

              if (ticketList) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", new ErrorHandler(500, "Ticket List ".concat(ErrorMessage.NOTFOUND_ERROR)));

            case 5:
              return _context5.abrupt("return", {
                count: ticketList.length,
                ticketList: ticketList
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return TicketListsController;
}();

/* harmony default export */ var services_TicketList = (TicketList_TicketListsController);
// CONCATENATED MODULE: ./services/index.js






/* harmony default export */ var services = ({
  Benefit: Benefits,
  BenefitsHistory: services_BenefitsHistory,
  User: Users,
  Candidat: Candidat,
  OpenPosition: services_OpenPosition,
  TicketList: services_TicketList
});
// EXTERNAL MODULE: external "dotenv"
var external_dotenv_ = __webpack_require__(9);
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_);

// CONCATENATED MODULE: ./routes/home.js

var router = external_express_default.a.Router();
router.get('/', function (req, res) {
  res.status(200).send("Heroku works");
});
/* harmony default export */ var home = (router);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(4);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// CONCATENATED MODULE: ./Controller/Users.js
function Controller_Users_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controller_Users_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controller_Users_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controller_Users_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controller_Users_defineProperties(Constructor, staticProps); return Constructor; }



var Controller_Users_Error = new Errors();

var Controller_Users_UsersController =
/*#__PURE__*/
function () {
  function UsersController() {
    Controller_Users_classCallCheck(this, UsersController);
  }

  Controller_Users_createClass(UsersController, [{
    key: "getUsers",
    // ------------------------------------- done
    value: function getUsers(req, res) {
      var allusers;
      return regeneratorRuntime.async(function getUsers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(req.app.services.users.getUsers(res));

            case 3:
              allusers = _context.sent;
              res.status(201).send(allusers);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getMyInfo",
    // ------------------------------------- done
    value: function getMyInfo(req, res, next) {
      var user;
      return regeneratorRuntime.async(function getMyInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(req.app.services.users.getUser(res, req.userData.userId));

            case 3:
              user = _context2.sent;
              return _context2.abrupt("return", res.status(201).send(user));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", Controller_Users_Error.notFoundError(res, "User ".concat(ErrorMessage.NOTFOUND_ERROR)));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getUser",
    // ------------------------------------- done
    value: function getUser(req, res) {
      var id, user;
      return regeneratorRuntime.async(function getUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.userId;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(req.app.services.users.getUser(res, id));

            case 4:
              user = _context3.sent;
              res.status(201).send(user);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              res.status(500).send(_context3.t0.message);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "addUser",
    // ------------------------------------- done ?	/signup -ov
    value: function addUser(req, res) {
      var _req$body, firstname, lastname, salary, phoneNumber, email, password, birthday, role, norUser;

      return regeneratorRuntime.async(function addUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, salary = _req$body.salary, phoneNumber = _req$body.phoneNumber, email = _req$body.email, password = _req$body.password, birthday = _req$body.birthday, role = _req$body.role;
              _context4.next = 3;
              return regeneratorRuntime.awrap(req.app.services.users.addUser(res, firstname, lastname, salary, phoneNumber, email, password, birthday, role).then(function (result) {
                console.log("result:", result);

                if (result) {
                  res.status(result.statusCode).json({
                    message: result.message
                  });
                } else {
                  res.status(result.statusCode).json({
                    message: result
                  });
                }
              })["catch"](function (err) {
                return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
              }));

            case 3:
              norUser = _context4.sent;

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "updateUser",
    // ------------------------------------- done!
    value: function updateUser(req, res) {
      var id, updateOps, x;
      return regeneratorRuntime.async(function updateUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.userId;
              updateOps = req.body;
              _context5.next = 4;
              return regeneratorRuntime.awrap(req.app.services.users.updateUser(id, updateOps));

            case 4:
              x = _context5.sent;
              x.save().then(function (result) {
                res.status(200).json(result);
              })["catch"](function (err) {
                throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "deleteUser",
    // -------------------------------------done!
    value: function deleteUser(req, res) {
      var id, delUsers;
      return regeneratorRuntime.async(function deleteUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.userId;
              _context6.prev = 1;
              _context6.next = 4;
              return regeneratorRuntime.awrap(req.app.services.users.deleteUser(res, id));

            case 4:
              delUsers = _context6.sent;
              return _context6.abrupt("return", res.status(201).json({
                message: "User is deleted!",
                userId: id
              }));

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](1);
              throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return UsersController;
}();

/* harmony default export */ var Controller_Users = (Controller_Users_UsersController);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./Validate/loginValidator.js
function loginValidator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function loginValidator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function loginValidator_createClass(Constructor, protoProps, staticProps) { if (protoProps) loginValidator_defineProperties(Constructor.prototype, protoProps); if (staticProps) loginValidator_defineProperties(Constructor, staticProps); return Constructor; }




var loginValidator_Error = new Errors();

var REG_FIELDS = ['firstname', 'lastname', 'salary', 'phoneNumber', 'email', 'password', "repeatPassword", 'birthday', 'role'];
var CANDIDATS_FIELDS = ['openPosId', 'name', 'surname', 'age', 'email', 'skills', "experience", 'education', 'gender'];

var loginValidator_LoginValidator =
/*#__PURE__*/
function () {
  function LoginValidator() {
    loginValidator_classCallCheck(this, LoginValidator);
  }

  loginValidator_createClass(LoginValidator, [{
    key: "isRegister",
    value: function isRegister(req, res, next) {
      var size = external_lodash_default.a.size(req.body);

      if (size != 9) {
        return loginValidator_Error.registerError(res);
      }

      if (!req.body.password) {
        return loginValidator_Error.registerError(res, "Please add password field");
      } else if (req.body.password.length <= 6) {
        return loginValidator_Error.registerError(res, "Too few characters for password ".concat(req.body.password.length, " it's must by 6+"));
      } else if (req.body.password != req.body.repeatPassword) {
        return loginValidator_Error.registerError(res, "Passwords do not match");
      }

      for (var key in req.body) {
        var fieldCheck = external_lodash_default.a.includes(REG_FIELDS, key);

        if (!fieldCheck) {
          return loginValidator_Error.registerError(res, "".concat(key, " field is not present, please fill correct"));
        }
      }

      next();
    }
  }, {
    key: "isLogin",
    value: function isLogin(req, res, next) {
      var token, decoded;
      return regeneratorRuntime.async(function isLogin$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              token = req.headers.authorization.split(' ')[1];
              decoded = external_jsonwebtoken_default.a.verify(token, process.env.SESSION_SECRET);

              if (decoded) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                message: 'jwt token Error'
              }));

            case 7:
              req.userData = decoded;

            case 8:
              next();
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(401).json({
                message: 'Please Login before doing any operations',
                error: _context.t0
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "isIdCorrect",
    value: function isIdCorrect(req, res, next) {
      var id = req.params.userId;

      if (id.length != 24) {
        return loginValidator_Error.idLengthError(res);
      }

      next();
    }
  }, {
    key: "checkCandidatAdds",
    value: function checkCandidatAdds(req, res, next) {
      var size = external_lodash_default.a.size(req.body); // if (size != 9) {
      // 	return Error.registerError(res)
      // }


      for (var key in req.body) {
        var fieldCheck = external_lodash_default.a.includes(CANDIDATS_FIELDS, key);

        if (!fieldCheck) {
          return loginValidator_Error.registerError(res, "".concat(key, " field is not present, please fill correct"));
        }
      }

      next();
    }
  }]);

  return LoginValidator;
}();

/* harmony default export */ var loginValidator = (loginValidator_LoginValidator);
// CONCATENATED MODULE: ./routes/register.js

var register_router = external_express_default.a.Router();




var controller = new Controller_Users();

var checkAuth = new loginValidator();
register_router.get('/', function (req, res, next) {
  res.send("register page");
});
register_router.get('/login', function (req, res, next) {
  res.send("login page");
});
register_router.post('/', checkAuth.isRegister, controller.addUser); // router.post('/login', controller.loginUser);

register_router.post("/login", function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(401).json({
      message: "login failed",
      "kind": "Invalid email or password"
    });
  }

  User.findOne({
    email: req.body.email
  }).exec().then(function (user) {
    if (user.length < 1) {
      return res.status(401).json({
        message: "login failed",
        "kind": "Invalid email address"
      });
    }

    external_bcryptjs_default.a.compare(req.body.password, user.password, function (err, result) {
      if (err) {
        return res.status(401).json({
          message: "login failed"
        });
      }

      if (result) {
        var token = external_jsonwebtoken_default.a.sign({
          email: user.email,
          userId: user._id
        }, process.env.SESSION_SECRET, {
          expiresIn: "1h"
        });
        return res.status(200).json({
          user: user,
          message: "Login successful",
          token: token
        });
      }

      res.status(401).json({
        message: "Login failed"
      });
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});
/* harmony default export */ var register = (register_router);
// CONCATENATED MODULE: ./Controller/Benefits.js
function Controller_Benefits_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controller_Benefits_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controller_Benefits_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controller_Benefits_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controller_Benefits_defineProperties(Constructor, staticProps); return Constructor; }



var Controller_Benefits_Error = new Errors();

var Controller_Benefits_BenefitsController =
/*#__PURE__*/
function () {
  function BenefitsController() {
    Controller_Benefits_classCallCheck(this, BenefitsController);
  }

  Controller_Benefits_createClass(BenefitsController, [{
    key: "getBenefit",
    // -------------------------------------
    value: function getBenefit(req, res) {
      var id, benefit;
      return regeneratorRuntime.async(function getBenefit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefits.getBenefit(res, id));

            case 4:
              benefit = _context.sent;
              res.status(200).send(benefit);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              res.status(500).send(_context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "getBenefits",
    // -------------------------------------
    value: function getBenefits(req, res) {
      var allbenefits;
      return regeneratorRuntime.async(function getBenefits$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(req.app.services.benefits.getBenefits(res));

            case 3:
              allbenefits = _context2.sent;
              res.status(201).send(allbenefits);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              res.status(500).send(_context2.t0.message);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "addBenefits",
    // -------------------------------------	
    value: function addBenefits(req, res) {
      var _req$body, title, description, addBenefit;

      return regeneratorRuntime.async(function addBenefits$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, title = _req$body.title, description = _req$body.description;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefits.addBenefits(res, title, description));

            case 4:
              addBenefit = _context3.sent;
              res.status(200).send(addBenefit);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              res.status(500).send(_context3.t0.message);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "updateBenefits",
    // -------------------------------------
    value: function updateBenefits(req, res) {
      var id, updateOps, x;
      return regeneratorRuntime.async(function updateBenefits$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              updateOps = req.body;
              _context4.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefits.updateBenefits(res, id, updateOps).then(function (result) {
                res.status(200).json(result);
              })["catch"](function (err) {
                res.status(500).json({
                  error: err
                });
              }));

            case 4:
              x = _context4.sent;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteBenefits",
    // -------------------------------------
    value: function deleteBenefits(req, res) {
      var _id, delbenefits;

      return regeneratorRuntime.async(function deleteBenefits$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefits.deleteBenefit(_id));

            case 4:
              delbenefits = _context5.sent;
              return _context5.abrupt("return", res.status(201).json({
                message: "Benefit is deleted!",
                benefitId: _id
              }));

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              res.status(500).send(_context5.t0.message);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return BenefitsController;
}();

/* harmony default export */ var Controller_Benefits = (Controller_Benefits_BenefitsController);
// CONCATENATED MODULE: ./routes/Benefit.js

var Benefit_router = external_express_default.a.Router();

var Benefit_controller = new Controller_Benefits();

var Benefit_checkAuth = new loginValidator(); //get all Benefits

Benefit_router.get('/', Benefit_checkAuth.isLogin, Benefit_controller.getBenefits); //add Benefits

Benefit_router.post('/', Benefit_controller.addBenefits); //get benefits by ID

Benefit_router.get('/:id', Benefit_controller.getBenefit); //update benefits

Benefit_router.patch('/:id', Benefit_controller.updateBenefits); //benefits Deleted

Benefit_router["delete"]('/:id', Benefit_controller.deleteBenefits);
/* harmony default export */ var routes_Benefit = (Benefit_router);
// CONCATENATED MODULE: ./Controller/BenefitsHistory.js
function Controller_BenefitsHistory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controller_BenefitsHistory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controller_BenefitsHistory_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controller_BenefitsHistory_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controller_BenefitsHistory_defineProperties(Constructor, staticProps); return Constructor; }



var Controller_BenefitsHistory_Error = new Errors();

var Controller_BenefitsHistory_BenefitHistoryController =
/*#__PURE__*/
function () {
  function BenefitHistoryController() {
    Controller_BenefitsHistory_classCallCheck(this, BenefitHistoryController);
  }

  Controller_BenefitsHistory_createClass(BenefitHistoryController, [{
    key: "getBenefitsHistory",
    // -------------------------------------
    value: function getBenefitsHistory(req, res) {
      var allHistory;
      return regeneratorRuntime.async(function getBenefitsHistory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(req.app.services.benefitsHistorys.getBenefitsHistory(res));

            case 3:
              allHistory = _context.sent;
              res.status(201).send(allHistory);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              Controller_BenefitsHistory_Error.serverError(res, _context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getHistoryById",
    // -------------------------------------
    value: function getHistoryById(req, res) {
      var id, benHistory;
      return regeneratorRuntime.async(function getHistoryById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.historyId;
              _context2.next = 3;
              return regeneratorRuntime.awrap(req.app.services.benefitsHistorys.getHistoryById(id).then(function (result) {
                if (result) {
                  res.status(200).send(result);
                }

                res.status(benHistory.statusCode).send(result);
              })["catch"](function (err) {
                res.status(err.statusCode).json({
                  error: err
                });
              }));

            case 3:
              benHistory = _context2.sent;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "addBenefitsHistory",
    // -------------------------------------
    value: function addBenefitsHistory(req, res) {
      var _req$body, benefitId, userId, addBenHistory;

      return regeneratorRuntime.async(function addBenefitsHistory$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, benefitId = _req$body.benefitId, userId = _req$body.userId;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefitsHistorys.addBenefitsHistory(res, benefitId, userId));

            case 4:
              addBenHistory = _context3.sent;

              if (addBenHistory) {
                res.status(201).send(addBenHistory);
              }

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              Controller_BenefitsHistory_Error.serverError(res, _context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "deleteBenefitHistory",
    // -------------------------------------
    value: function deleteBenefitHistory(req, res) {
      var id, delbenefits, check;
      return regeneratorRuntime.async(function deleteBenefitHistory$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.historyId;
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(req.app.services.benefitsHistorys.deleteBenefitHistory(id));

            case 4:
              delbenefits = _context4.sent;
              console.log("delbenefits:", delbenefits);
              check = delbenefits.benHistory.deletedCount;

              if (!check) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt("return", res.status(201).json({
                message: "Benefit History is deleted!",
                benefitId: id
              }));

            case 9:
              throw new ErrorHandler(409, ErrorMessage.ID_ERROR);

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  }]);

  return BenefitHistoryController;
}();

/* harmony default export */ var Controller_BenefitsHistory = (Controller_BenefitsHistory_BenefitHistoryController);
// CONCATENATED MODULE: ./routes/BenefitHistory.js

var BenefitHistory_router = external_express_default.a.Router();

var BenefitHistory_controller = new Controller_BenefitsHistory();

var BenefitHistory_checkAuth = new loginValidator(); //no Update Url => "patch"
//get all BenefitHistorys

BenefitHistory_router.get('/', BenefitHistory_controller.getBenefitsHistory); //add BenefitHistorys

BenefitHistory_router.post('/', BenefitHistory_controller.addBenefitsHistory); //get BenefitHistorys by ID 

BenefitHistory_router.get('/:historyId', BenefitHistory_controller.getHistoryById); //BenefitHistorys Deleted

BenefitHistory_router["delete"]('/:historyId', BenefitHistory_controller.deleteBenefitHistory);
/* harmony default export */ var BenefitHistory = (BenefitHistory_router);
// CONCATENATED MODULE: ./middleware/getUsers.js

var getUsers_Error = new Errors();
function pagination(model) {
  return function _callee(req, res, next) {
    var checkUsers, page, limit, startIndex, endIndex, results;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(model.find({
              deletedAt: null
            }));

          case 2:
            checkUsers = _context.sent;

            if (checkUsers.length < 1) {
              getUsers_Error.noDataError(res);
            }

            if (!req.query.page) {
              req.query.page = 1;
            }

            if (!req.query.limit) {
              req.query.limit = 6;
            }

            page = parseInt(req.query.page);
            limit = parseInt(req.query.limit);
            startIndex = (page - 1) * limit;
            endIndex = page * limit;
            results = {};
            _context.t0 = endIndex;
            _context.next = 14;
            return regeneratorRuntime.awrap(model.countDocuments().exec());

          case 14:
            _context.t1 = _context.sent;

            if (!(_context.t0 < _context.t1)) {
              _context.next = 17;
              break;
            }

            results.next = {
              page: page + 1,
              limit: limit
            };

          case 17:
            if (startIndex > 0) {
              results.previous = {
                page: page - 1,
                limit: limit
              };
            }

            _context.prev = 18;
            _context.next = 21;
            return regeneratorRuntime.awrap(model.find({
              deletedAt: null
            }).limit(limit).skip(startIndex).select('firstname lastname salary phoneNumber email birthday password role _id'));

          case 21:
            results.results = _context.sent;
            res.pagination = results;
            next();
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t2 = _context["catch"](18);
            getUsers_Error.serverError(res, _context.t2.message);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[18, 26]]);
  };
}
// CONCATENATED MODULE: ./routes/allUsers.js

var allUsers_router = external_express_default.a.Router();

var allUsers_controller = new Controller_Users();

var allUsers_checkAuth = new loginValidator();


/* GET Users page. */

allUsers_router.get("/", [allUsers_checkAuth.isLogin, pagination(User)], function (req, res) {
  res.json(res.pagination);
});
allUsers_router.get('/me', allUsers_checkAuth.isLogin, allUsers_controller.getMyInfo);
allUsers_router.get('/:userId', [allUsers_checkAuth.isIdCorrect], allUsers_controller.getUser);
allUsers_router.patch('/:userId', [allUsers_checkAuth.isIdCorrect], allUsers_controller.updateUser);
allUsers_router["delete"]('/:userId', [allUsers_checkAuth.isIdCorrect], allUsers_controller.deleteUser);
/* harmony default export */ var allUsers = (allUsers_router);
// CONCATENATED MODULE: ./Controller/OpenPosition.js
function Controller_OpenPosition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controller_OpenPosition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controller_OpenPosition_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controller_OpenPosition_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controller_OpenPosition_defineProperties(Constructor, staticProps); return Constructor; }




var Controller_OpenPosition_OpenPositionController =
/*#__PURE__*/
function () {
  function OpenPositionController() {
    Controller_OpenPosition_classCallCheck(this, OpenPositionController);
  }

  Controller_OpenPosition_createClass(OpenPositionController, [{
    key: "getOpenPosition",
    // ------------------------------------- done
    value: function getOpenPosition(req, res) {
      var allPositions;
      return regeneratorRuntime.async(function getOpenPosition$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(req.app.services.openPositions.getOpenPosition());

            case 3:
              allPositions = _context.sent;
              res.status(201).send(allPositions);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getSpecialPosition",
    // ------------------------------------- done
    value: function getSpecialPosition(req, res) {
      var id, position;
      return regeneratorRuntime.async(function getSpecialPosition$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.openPositionId;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(req.app.services.openPositions.getSpecialPosition(id));

            case 4:
              position = _context2.sent;
              res.status(201).send(position);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.status(500).send(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "addOpenPosition",
    // ------------------------------------- done!	
    value: function addOpenPosition(req, res) {
      var _req$body, title, description, gender, ageLimit, salary, addPosition;

      return regeneratorRuntime.async(function addOpenPosition$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, title = _req$body.title, description = _req$body.description, gender = _req$body.gender, ageLimit = _req$body.ageLimit, salary = _req$body.salary;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(req.app.services.openPositions.addOpenPosition(title, description, gender, ageLimit, salary));

            case 4:
              addPosition = _context3.sent;
              res.status(addPosition.status).send(addPosition);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              res.status(500).send(_context3.t0.message);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "updateOpenPosition",
    // ------------------------------------- done!
    value: function updateOpenPosition(req, res) {
      var id, updateOps, x;
      return regeneratorRuntime.async(function updateOpenPosition$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.openPositionId;
              updateOps = req.body;
              _context4.next = 4;
              return regeneratorRuntime.awrap(req.app.services.openPositions.updateOpenPosition(id, updateOps));

            case 4:
              x = _context4.sent;
              x.save().then(function (result) {
                res.status(200).json(result);
              })["catch"](function (err) {
                res.status(500).json({
                  error: err
                });
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteOpenPosition",
    // ------------------------------------- done !
    value: function deleteOpenPosition(req, res) {
      var id, delbenefits, check;
      return regeneratorRuntime.async(function deleteOpenPosition$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.openPositionId;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(req.app.services.openPositions.deleteOpenPosition(id));

            case 4:
              delbenefits = _context5.sent;
              check = delbenefits.position.deletedCount;

              if (!check) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return", res.status(201).json({
                message: "Open Position is deleted!",
                openPositionsId: id
              }));

            case 8:
              throw new ErrorHandler(400, "Open Position ".concat(ErrorMessage.ID_ERROR));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);
              res.status(500).send(_context5.t0.message);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 11]]);
    }
  }]);

  return OpenPositionController;
}();

/* harmony default export */ var Controller_OpenPosition = (Controller_OpenPosition_OpenPositionController);
// CONCATENATED MODULE: ./routes/OpenPosition.js

var OpenPosition_router = external_express_default.a.Router();

var OpenPosition_controller = new Controller_OpenPosition();

var OpenPosition_checkAuth = new loginValidator(); //get all OpenPositions

OpenPosition_router.get('/', OpenPosition_controller.getOpenPosition); //add OpenPositions

OpenPosition_router.post('/', OpenPosition_controller.addOpenPosition); //get OpenPositions by ID

OpenPosition_router.get('/:openPositionId', OpenPosition_controller.getSpecialPosition); //update OpenPositions

OpenPosition_router.patch('/:openPositionId', OpenPosition_controller.updateOpenPosition); //OpenPositions Deleted

OpenPosition_router["delete"]('/:openPositionId', OpenPosition_controller.deleteOpenPosition);
/* harmony default export */ var routes_OpenPosition = (OpenPosition_router);
// EXTERNAL MODULE: external "multer"
var external_multer_ = __webpack_require__(5);
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_);

// CONCATENATED MODULE: ./middleware/fileFilter.js
var FILE_FIELDS = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/msword'];
function fileFilter(req, file, cb) {
  if (file.mimetype === FILE_FIELDS[0] || file.mimetype === FILE_FIELDS[1] || file.mimetype === FILE_FIELDS[2]) {
    cb(null, true);
  } else {
    cb(new Error("cv Error: file type must by 'png', 'docx' or 'doc'."), false);
  }
}
// CONCATENATED MODULE: ./Controller/Candidats.js
function Candidats_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Candidats_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Candidats_createClass(Constructor, protoProps, staticProps) { if (protoProps) Candidats_defineProperties(Constructor.prototype, protoProps); if (staticProps) Candidats_defineProperties(Constructor, staticProps); return Constructor; }



var Candidats_Error = new Errors();

var Candidats_CandidatsController =
/*#__PURE__*/
function () {
  function CandidatsController() {
    Candidats_classCallCheck(this, CandidatsController);
  }

  Candidats_createClass(CandidatsController, [{
    key: "getCandidats",
    // ------------------------------------- done!
    value: function getCandidats(req, res) {
      var allcandidats;
      return regeneratorRuntime.async(function getCandidats$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(req.app.services.candidats.getCandidats(res));

            case 3:
              allcandidats = _context.sent;
              res.status(201).send(allcandidats);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getSpecialCandidat",
    // ------------------------------------- done
    value: function getSpecialCandidat(req, res) {
      var id, candidat;
      return regeneratorRuntime.async(function getSpecialCandidat$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.candidatId;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(req.app.services.candidats.getSpecialCandidat(id));

            case 4:
              candidat = _context2.sent;
              res.status(201).send(candidat);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.status(500).send(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "addCandidats",
    // ------------------------------------- done!	
    value: function addCandidats(req, res) {
      var _req$body, openPosId, name, surname, email, age, gender, skills, education, experience;

      return regeneratorRuntime.async(function addCandidats$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("file:  ", req.file);
              _req$body = req.body, openPosId = _req$body.openPosId, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, age = _req$body.age, gender = _req$body.gender, skills = _req$body.skills, education = _req$body.education, experience = _req$body.experience;
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(req.app.services.candidats.addCandidats(res, openPosId, name, surname, email, age, gender, skills, education, experience));

            case 5:
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](2);
              res.status(500).send(_context3.t0.message);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 7]]);
    }
  }, {
    key: "updateCandidat",
    // ------------------------------------- done
    value: function updateCandidat(req, res) {
      var id, updateOps, updateCandidat;
      return regeneratorRuntime.async(function updateCandidat$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.candidatId;
              updateOps = req.body;
              _context4.next = 4;
              return regeneratorRuntime.awrap(req.app.services.candidats.updateCandidat(id, updateOps).then(function (result) {
                res.status(result.statusCode).send(result);
              })["catch"](function (err) {
                res.status(500).json({
                  error: err
                });
              }));

            case 4:
              updateCandidat = _context4.sent;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteCandidat",
    // ------------------------------------- done!
    value: function deleteCandidat(req, res) {
      var id, delbenefits, check;
      return regeneratorRuntime.async(function deleteCandidat$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.candidatId;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(req.app.services.candidats.deleteCandidat(id));

            case 4:
              delbenefits = _context5.sent;
              check = delbenefits.candidats.deletedCount;

              if (!check) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", Candidats_Error.successful(res, "Candidat is deleted"));

            case 10:
              return _context5.abrupt("return", Candidats_Error.candidatDelError(res, "Candidat ".concat(ErrorMessage.ID_ERROR, " | ").concat(ErrorMessage.CANDIDAT_DELETED)));

            case 11:
              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](1);
              res.status(500).send(_context5.t0.message);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 13]]);
    }
  }]);

  return CandidatsController;
}();

/* harmony default export */ var Controller_Candidats = (Candidats_CandidatsController);
// CONCATENATED MODULE: ./routes/Candidats.js

var Candidats_router = external_express_default.a.Router();


var storage = external_multer_default.a.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});
var upload = external_multer_default()({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});

var Candidats_controller = new Controller_Candidats();

var Candidats_checkAuth = new loginValidator(); //get all Candidats

Candidats_router.get('/', Candidats_controller.getCandidats); //add Candidats

Candidats_router.post('/', [Candidats_checkAuth.checkCandidatAdds, upload.single('cv')], Candidats_controller.addCandidats); //get Candidats by ID

Candidats_router.get('/:candidatId', Candidats_checkAuth.isIdCorrect, Candidats_controller.getSpecialCandidat); //update Candidats

Candidats_router.patch('/:candidatId', Candidats_checkAuth.isIdCorrect, Candidats_controller.updateCandidat); //Candidats Deleted

Candidats_router["delete"]('/:candidatId', Candidats_checkAuth.isIdCorrect, Candidats_controller.deleteCandidat);
/* harmony default export */ var routes_Candidats = (Candidats_router);
// CONCATENATED MODULE: ./Controller/TicketList.js
function Controller_TicketList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controller_TicketList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controller_TicketList_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controller_TicketList_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controller_TicketList_defineProperties(Constructor, staticProps); return Constructor; }




var Controller_TicketList_TicketListsController =
/*#__PURE__*/
function () {
  function TicketListsController() {
    Controller_TicketList_classCallCheck(this, TicketListsController);
  }

  Controller_TicketList_createClass(TicketListsController, [{
    key: "getTicketLists",
    // ------------------------------------- done
    value: function getTicketLists(req, res) {
      var allHistory;
      return regeneratorRuntime.async(function getTicketLists$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(req.app.services.ticketLists.getTicketLists());

            case 3:
              allHistory = _context.sent;
              res.status(201).send(allHistory);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "getTicketListById",
    // ------------------------------------- done
    value: function getTicketListById(req, res) {
      var id, ticketList;
      return regeneratorRuntime.async(function getTicketListById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.ticketId;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(req.app.services.ticketLists.getTicketListById(id));

            case 4:
              ticketList = _context2.sent;
              res.send(ticketList);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.send(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "addTicketList",
    // ------------------------------------- done!
    value: function addTicketList(req, res) {
      var _req$body, userId, dateStart, dateEnd, newTicketList;

      return regeneratorRuntime.async(function addTicketList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, userId = _req$body.userId, dateStart = _req$body.dateStart, dateEnd = _req$body.dateEnd;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(req.app.services.ticketLists.addTicketList(userId, dateStart, dateEnd));

            case 4:
              newTicketList = _context3.sent;
              res.status(newTicketList.statusCode).send(newTicketList);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              res.status(500).send(_context3.t0.message);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "updateTicketList",
    // -------------------------------------
    value: function updateTicketList(req, res) {
      var id, updateOps, x;
      return regeneratorRuntime.async(function updateTicketList$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.ticketId;
              updateOps = req.body;
              _context4.next = 4;
              return regeneratorRuntime.awrap(req.app.services.ticketLists.updateTicketList(id, updateOps).then(function (result) {
                res.status(result.statusCode).send(result);
              })["catch"](function (err) {
                res.status(500).json({
                  error: err
                });
              }));

            case 4:
              x = _context4.sent;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteTicketList",
    // -------------------------------------
    value: function deleteTicketList(req, res) {
      var id, delbenefits, check;
      return regeneratorRuntime.async(function deleteTicketList$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.ticketId;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(req.app.services.ticketLists.deleteTicketList(id));

            case 4:
              delbenefits = _context5.sent;
              check = delbenefits.ticketList.deletedCount;

              if (!check) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return", res.status(201).json({
                message: "Ticket Lists is deleted!",
                benefitId: id
              }));

            case 8:
              throw new ErrorHandler(409, "Ticket List ".concat(ErrorMessage.ID_ERROR));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);
              res.status(500).send(_context5.t0.message);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 11]]);
    }
  }]);

  return TicketListsController;
}();

/* harmony default export */ var Controller_TicketList = (Controller_TicketList_TicketListsController);
// CONCATENATED MODULE: ./routes/TicketList.js

var TicketList_router = external_express_default.a.Router();

var TicketList_controller = new Controller_TicketList();

var TicketList_checkAuth = new loginValidator(); //get all TicketLists

TicketList_router.get('/', TicketList_controller.getTicketLists); //add TicketLists

TicketList_router.post('/', TicketList_controller.addTicketList); //get TicketLists by ID

TicketList_router.get('/:ticketId', TicketList_controller.getTicketListById); //update TicketLists

TicketList_router.patch('/:ticketId', TicketList_controller.updateTicketList); //TicketLists Deleted

TicketList_router["delete"]('/:ticketId', TicketList_controller.deleteTicketList);
/* harmony default export */ var routes_TicketList = (TicketList_router);
// CONCATENATED MODULE: ./app.js
// if (process.env.NODE_ENV !== 'production') {
// 	from 'dotenv').config()
// }

var app = external_express_default()();







external_dotenv_default.a.config();
app.use(external_express_default.a.json());
app.use(external_express_default.a.urlencoded({
  extended: false
}));
external_mongoose_default.a.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}, function (err) {
  return console.log(err);
}); //CORS

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200
};
app.use(external_cors_default()(corsOptions));
app.use(external_express_default.a.urlencoded({
  extended: false
}));
app.use(external_express_default.a.json());
app.use(external_express_session_default()({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));








app.use('/', home);
app.use('/signup', register);
app.use('/benefits', routes_Benefit);
app.use('/benefits-history', BenefitHistory);
app.use('/users', allUsers);
app.use('/open-positions', routes_OpenPosition);
app.use('/candidats', routes_Candidats);
app.use('/ticket-lists', routes_TicketList);
app.models = {
  users: models.User,
  benefits: models.Benefit,
  openPosition: models.OpenPosition,
  candidat: models.Candidats,
  benefitsHistory: models.BenefitsHistory,
  ticketList: models.TicketList
};
app.services = {
  users: new services.User(app.models),
  benefits: new services.Benefit(app.models),
  openPositions: new services.OpenPosition(app.models),
  candidats: new services.Candidat(app.models),
  benefitsHistorys: new services.BenefitsHistory(app.models),
  ticketLists: new services.TicketList(app.models)
};
app.use(function (req, res, next) {
  req.app = app;
  next();
});
app.use(function (req, res, next) {
  throw new ErrorHandler(404, 'page is not found');
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
app.use(function (err, req, res, next) {
  handleError(err, res);
});
/* harmony default export */ var app_0 = (app);
// CONCATENATED MODULE: ./server.js


var port = process.env.PORT || 3000;
var server = external_http_default.a.createServer(app_0);
server.listen(port, function () {
  return console.log("server started on ".concat(port));
});

/***/ })
/******/ ]);