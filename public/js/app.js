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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
/******/ })
/************************************************************************/
/******/ ({

/***/ 150:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/mapbox-gl/dist/mapbox-gl.js'");

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(163);
module.exports = __webpack_require__(365);


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/babel-polyfill/lib/index.js'");

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(71));

var _reactDom = _interopRequireDefault(__webpack_require__(368));

var _mapboxGl = _interopRequireDefault(__webpack_require__(150));

var _mapbox = _interopRequireDefault(__webpack_require__(377));

var turfHelpers = _interopRequireWildcard(__webpack_require__(424));

var _Map = _interopRequireDefault(__webpack_require__(425));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

_mapboxGl.default.accessToken = 'pk.eyJ1IjoiYWlzaHdhcnktZzEyMyIsImEiOiJja21hMmlwa3kxbnNvMnFuNnN1YjRyNWp6In0.d-jFdGIO0venJyHn9uM9Fg';

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {
      origin: [80.2707, 13.0827],
      destination: [],
      mapboxClient: new _mapbox.default(_mapboxGl.default.accessToken)
    };
    _this.onMapLoad = _this.onMapLoad.bind(_assertThisInitialized(_this));
    _this.onMapClick = _this.onMapClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "onMapLoad",
    value: function onMapLoad() {
      this._map.addSource('origin-source', {
        type: 'Point',
        coordinates: this.state.origin
      });

      this._map.addLayer({
        id: 'origin-layer',
        type: 'circle',
        source: 'origin-source',
        paint: {
          'circle-radius': 10,
          'circle-color': 'blue',
          'circle-stroke-width': 2,
          'circle-stroke-color': 'white'
        }
      });
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(e) {
      var dest = [e.lngLat.lng, e.lngLat.lat];
      var avadi = [80.089645, 13.114656];

      if (!this.state.destination.length) {
        this._map.addSource('destination-source', turfHelpers.point(dest));

        this._map.addSource('destination-source1', turfHelpers.point(avadi));

        this._map.addSource('directions-source', turfHelpers.lineString([[0, 0], [0, 0]]));

        this._map.addLayer({
          id: 'destination-layer',
          type: 'circle',
          source: 'destination-source',
          paint: {
            'circle-radius': 10,
            'circle-color': 'red',
            'circle-stroke-width': 2,
            'circle-stroke-color': 'white'
          }
        });

        this._map.addLayer({
          id: 'destination-layer1',
          type: 'circle',
          source: 'destination-source1',
          paint: {
            'circle-radius': 10,
            'circle-color': 'green',
            'circle-stroke-width': 2,
            'circle-stroke-color': 'white'
          }
        });

        this._map.addLayer({
          id: 'directions-layer',
          type: 'line',
          source: 'directions-source',
          paint: {
            'line-width': 2,
            'line-color': 'black'
          }
        }, 'origin-layer');
      } else {
        this._map.updateSource('destination-source', turfHelpers.point(dest));
      }

      this.getDirections(dest);
      this.setState({
        destination: dest
      });
    }
  }, {
    key: "getDirections",
    value: function () {
      var _getDirections = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dest) {
        var r, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.state.mapboxClient.getDirections([{
                  latitude: this.state.origin[1],
                  longitude: this.state.origin[0]
                }, {
                  latitude: dest[1],
                  longitude: dest[0]
                }], {
                  profile: 'driving',
                  alternatives: false
                });

              case 3:
                r = _context.sent;

                this._map.updateSource('directions-source', r.entity.routes[0].geometry);

                _context.next = 7;
                return this.state.mapboxClient.getDirections([{
                  latitude: this.state.origin[1],
                  longitude: this.state.origin[0]
                }, {
                  latitude: dest[1],
                  longitude: dest[0]
                }, {
                  latitude: 13.114656,
                  longitude: 80.089645
                }], {
                  profile: 'driving',
                  alternatives: false
                });

              case 7:
                res = _context.sent;

                this._map.updateSource('directions-source', res.entity.routes[0].geometry);

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
                return _context.abrupt("return", Promise.resolve());

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      return function getDirections(_x) {
        return _getDirections.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        id: "app-content"
      }, _react.default.createElement(_Map.default, {
        id: 'map-example',
        ref: function ref(c) {
          return _this2._map = c;
        },
        center: this.state.origin,
        onLoad: this.onMapLoad,
        onClick: this.onMapClick
      }));
    }
  }]);

  return App;
}(_react.default.Component);

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/react-dom/index.js'");

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/mapbox/lib/mapbox.js'");

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/@turf/helpers/index.mjs'");

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(71));

var _propTypes = _interopRequireDefault(__webpack_require__(426));

var _mapboxGl = _interopRequireDefault(__webpack_require__(150));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));
    _this.state = {
      map: null
    };
    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var map = new _mapboxGl.default.Map({
        container: this.props.id,
        style: this.props.style,
        center: this.props.center,
        zoom: this.props.zoom
      });
      this.setState({
        map: map
      }); // register events

      map.on('load', this.props.onLoad);
      map.on('click', this.props.onClick);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "addSource",
    value: function addSource(sourceID, geoJSON) {
      var layer = this.state.map.getSource(sourceID);

      if (layer) {
        this.updateSource(sourceID, geoJSON);
        return;
      }

      this.state.map.addSource(sourceID, {
        type: 'geojson',
        data: geoJSON
      });
    }
  }, {
    key: "addLayer",
    value: function addLayer(layer, belowLayerID) {
      this.state.map.addLayer(layer, belowLayerID);
    }
  }, {
    key: "updateSource",
    value: function updateSource(sourceID, geoJSON) {
      this.state.map.getSource(sourceID).setData(geoJSON);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: this.props.id,
        className: "map-container"
      });
    }
  }]);

  return Map;
}(_react.default.Component);

Object.defineProperty(Map, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    id: _propTypes.default.string.isRequired,
    style: _propTypes.default.string.isRequired,
    center: _propTypes.default.array,
    zoom: _propTypes.default.number,
    onLoad: _propTypes.default.func,
    onClick: _propTypes.default.func
  }
});
Object.defineProperty(Map, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 14
  }
});
var _default = Map;
exports.default = _default;

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/prop-types/index.js'");

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/moharja/Downloads/react-mapbox-gl-js-example-master/node_modules/react/index.js'");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM4N2Y2ZmY0YjhkODI5MDI0YWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9NYXAuanMiXSwibmFtZXMiOlsiYWNjZXNzVG9rZW4iLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJtYXBib3hDbGllbnQiLCJvbk1hcExvYWQiLCJiaW5kIiwib25NYXBDbGljayIsIl9tYXAiLCJhZGRTb3VyY2UiLCJ0eXBlIiwiY29vcmRpbmF0ZXMiLCJhZGRMYXllciIsImlkIiwic291cmNlIiwicGFpbnQiLCJlIiwiZGVzdCIsImxuZ0xhdCIsImxuZyIsImxhdCIsImF2YWRpIiwibGVuZ3RoIiwidHVyZkhlbHBlcnMiLCJwb2ludCIsImxpbmVTdHJpbmciLCJ1cGRhdGVTb3VyY2UiLCJnZXREaXJlY3Rpb25zIiwic2V0U3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInByb2ZpbGUiLCJhbHRlcm5hdGl2ZXMiLCJyIiwiZW50aXR5Iiwicm91dGVzIiwiZ2VvbWV0cnkiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1hcCIsIm1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsIm9uIiwib25Mb2FkIiwib25DbGljayIsInNvdXJjZUlEIiwiZ2VvSlNPTiIsImxheWVyIiwiZ2V0U291cmNlIiwiZGF0YSIsImJlbG93TGF5ZXJJRCIsInNldERhdGEiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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YUFDRTtBQUFLLFlBQUksS0FBS3pELEtBQUwsQ0FBV2EsRUFBcEI7QUFBd0IsbUJBQVU7QUFBbEMsUUFERjtBQUdEOzs7O0VBbkVlLGVBQU04QixTOztzQkFBbEJJLEc7Ozs7U0FDZTtBQUNqQmxDLFFBQUksbUJBQVVrRCxNQUFWLENBQWlCQyxVQURKO0FBRWpCZCxXQUFPLG1CQUFVYSxNQUFWLENBQWlCQyxVQUZQO0FBR2pCYixZQUFRLG1CQUFVYyxLQUhEO0FBSWpCYixVQUFNLG1CQUFVYyxNQUpDO0FBTWpCWixZQUFRLG1CQUFVYSxJQU5EO0FBT2pCWixhQUFTLG1CQUFVWTtBQVBGOztzQkFEZnBCLEc7Ozs7U0FXa0I7QUFDcEJHLFdBQU8sbUNBRGE7QUFFcEJFLFVBQU07QUFGYzs7ZUEyRFRMLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYzg3ZjZmZjRiOGQ4MjkwMjRhYSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IE1hcGJveENsaWVudCBmcm9tICdtYXBib3gnO1xuaW1wb3J0ICogYXMgdHVyZkhlbHBlcnMgZnJvbSAnQHR1cmYvaGVscGVycyc7XG5cbmltcG9ydCBNYXAgZnJvbSAnLi9NYXAnO1xuXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVlXbHphSGRoY25rdFp6RXlNeUlzSW1FaU9pSmphMjFoTW1sd2Eza3hibk52TW5GdU5uTjFZalJ5TldwNkluMC5kLWpGZEdJTzB2ZW5KeUhuOXVNOUZnJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9yaWdpbjogWzgwLjI3MDcsIDEzLjA4MjddLFxuICAgICAgZGVzdGluYXRpb246IFtdLFxuICAgICAgbWFwYm94Q2xpZW50OiBuZXcgTWFwYm94Q2xpZW50KG1hcGJveGdsLmFjY2Vzc1Rva2VuKSxcbiAgICB9XG5cbiAgICB0aGlzLm9uTWFwTG9hZCA9IHRoaXMub25NYXBMb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1hcENsaWNrID0gdGhpcy5vbk1hcENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbk1hcExvYWQgKCkge1xuICAgIHRoaXMuX21hcC5hZGRTb3VyY2UoJ29yaWdpbi1zb3VyY2UnLCB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IHRoaXMuc3RhdGUub3JpZ2luLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWFwLmFkZExheWVyKHtcbiAgICAgIGlkOiAnb3JpZ2luLWxheWVyJyxcbiAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgc291cmNlOiAnb3JpZ2luLXNvdXJjZScsXG4gICAgICBwYWludDoge1xuICAgICAgICAnY2lyY2xlLXJhZGl1cyc6IDEwLFxuICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ2JsdWUnLFxuICAgICAgICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6IDIsXG4gICAgICAgICdjaXJjbGUtc3Ryb2tlLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBvbk1hcENsaWNrIChlKSB7XG4gICAgY29uc3QgZGVzdCA9IFtlLmxuZ0xhdC5sbmcsIGUubG5nTGF0LmxhdF07XG4gICAgY29uc3QgYXZhZGkgPSBbODAuMDg5NjQ1LDEzLjExNDY1Nl07XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuZGVzdGluYXRpb24ubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9tYXAuYWRkU291cmNlKCdkZXN0aW5hdGlvbi1zb3VyY2UnLCB0dXJmSGVscGVycy5wb2ludChkZXN0KSk7XG4gICAgICB0aGlzLl9tYXAuYWRkU291cmNlKCdkZXN0aW5hdGlvbi1zb3VyY2UxJywgdHVyZkhlbHBlcnMucG9pbnQoYXZhZGkpKTtcbiAgICAgIHRoaXMuX21hcC5hZGRTb3VyY2UoJ2RpcmVjdGlvbnMtc291cmNlJywgdHVyZkhlbHBlcnMubGluZVN0cmluZyhbWzAsMF0sIFswLCAwXV0pKTtcblxuICAgICAgdGhpcy5fbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6ICdkZXN0aW5hdGlvbi1sYXllcicsXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzb3VyY2U6ICdkZXN0aW5hdGlvbi1zb3VyY2UnLFxuICAgICAgICBwYWludDoge1xuICAgICAgICAgICdjaXJjbGUtcmFkaXVzJzogMTAsXG4gICAgICAgICAgJ2NpcmNsZS1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICdjaXJjbGUtc3Ryb2tlLXdpZHRoJzogMixcbiAgICAgICAgICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6ICdkZXN0aW5hdGlvbi1sYXllcjEnLFxuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgc291cmNlOiAnZGVzdGluYXRpb24tc291cmNlMScsXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiAxMCxcbiAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ2dyZWVuJyxcbiAgICAgICAgICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6IDIsXG4gICAgICAgICAgJ2NpcmNsZS1zdHJva2UtY29sb3InOiAnd2hpdGUnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cblxuICAgICAgdGhpcy5fbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6ICdkaXJlY3Rpb25zLWxheWVyJyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBzb3VyY2U6ICdkaXJlY3Rpb25zLXNvdXJjZScsXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgJ2xpbmUtd2lkdGgnOiAyLFxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJ2JsYWNrJyxcbiAgICAgICAgfVxuICAgICAgfSwgJ29yaWdpbi1sYXllcicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcC51cGRhdGVTb3VyY2UoJ2Rlc3RpbmF0aW9uLXNvdXJjZScsIHR1cmZIZWxwZXJzLnBvaW50KGRlc3QpKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldERpcmVjdGlvbnMoZGVzdCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlc3RpbmF0aW9uOiBkZXN0IH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0RGlyZWN0aW9ucyAoZGVzdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByID0gYXdhaXQgdGhpcy5zdGF0ZS5tYXBib3hDbGllbnQuZ2V0RGlyZWN0aW9ucyhbXG4gICAgICAgIHsgbGF0aXR1ZGU6IHRoaXMuc3RhdGUub3JpZ2luWzFdLCBsb25naXR1ZGU6IHRoaXMuc3RhdGUub3JpZ2luWzBdIH0sXG4gICAgICAgIHsgbGF0aXR1ZGU6IGRlc3RbMV0sIGxvbmdpdHVkZTogZGVzdFswXSB9LFxuICAgICAgXSwgeyBwcm9maWxlOiAnZHJpdmluZycsIGFsdGVybmF0aXZlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLl9tYXAudXBkYXRlU291cmNlKCdkaXJlY3Rpb25zLXNvdXJjZScsIHIuZW50aXR5LnJvdXRlc1swXS5nZW9tZXRyeSk7XG5cblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5zdGF0ZS5tYXBib3hDbGllbnQuZ2V0RGlyZWN0aW9ucyhbXG4gICAgICAgICB7IGxhdGl0dWRlOiB0aGlzLnN0YXRlLm9yaWdpblsxXSwgbG9uZ2l0dWRlOiB0aGlzLnN0YXRlLm9yaWdpblswXSB9LFxuICAgICAgICAgeyBsYXRpdHVkZTogZGVzdFsxXSwgbG9uZ2l0dWRlOiBkZXN0WzBdIH0sXG4gICAgICAgICB7IGxhdGl0dWRlOiAxMy4xMTQ2NTYsIGxvbmdpdHVkZTogODAuMDg5NjQ1IH1cbiAgICAgICAgXSwgeyBwcm9maWxlOiAnZHJpdmluZycsIGFsdGVybmF0aXZlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLl9tYXAudXBkYXRlU291cmNlKCdkaXJlY3Rpb25zLXNvdXJjZScsIHJlcy5lbnRpdHkucm91dGVzWzBdLmdlb21ldHJ5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImFwcC1jb250ZW50XCI+XG4gICAgICAgIDxNYXBcbiAgICAgICAgICBpZD0nbWFwLWV4YW1wbGUnXG4gICAgICAgICAgcmVmPXtjID0+IHRoaXMuX21hcCA9IGN9XG4gICAgICAgICAgY2VudGVyPXt0aGlzLnN0YXRlLm9yaWdpbn1cbiAgICAgICAgICBvbkxvYWQ9e3RoaXMub25NYXBMb2FkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25NYXBDbGlja30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjZW50ZXI6IFByb3BUeXBlcy5hcnJheSxcbiAgICB6b29tOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICB6b29tOiAxNCxcbiAgfTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWFwOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IHRoaXMucHJvcHMuaWQsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgIGNlbnRlcjogdGhpcy5wcm9wcy5jZW50ZXIsXG4gICAgICB6b29tOiB0aGlzLnByb3BzLnpvb20sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1hcDogbWFwIH0pO1xuXG4gICAgLy8gcmVnaXN0ZXIgZXZlbnRzXG4gICAgbWFwLm9uKCdsb2FkJywgdGhpcy5wcm9wcy5vbkxvYWQpO1xuICAgIG1hcC5vbignY2xpY2snLCB0aGlzLnByb3BzLm9uQ2xpY2spO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRTb3VyY2UgKHNvdXJjZUlELCBnZW9KU09OKSB7XG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLnN0YXRlLm1hcC5nZXRTb3VyY2Uoc291cmNlSUQpO1xuICAgIGlmIChsYXllcikge1xuICAgICAgdGhpcy51cGRhdGVTb3VyY2Uoc291cmNlSUQsIGdlb0pTT04pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUubWFwLmFkZFNvdXJjZShzb3VyY2VJRCwge1xuICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgZGF0YTogZ2VvSlNPTixcbiAgICB9KTtcbiAgfVxuXG4gIGFkZExheWVyIChsYXllciwgYmVsb3dMYXllcklEKSB7XG4gICAgdGhpcy5zdGF0ZS5tYXAuYWRkTGF5ZXIobGF5ZXIsIGJlbG93TGF5ZXJJRCk7XG4gIH1cblxuICB1cGRhdGVTb3VyY2UgKHNvdXJjZUlELCBnZW9KU09OKSB7XG4gICAgdGhpcy5zdGF0ZS5tYXAuZ2V0U291cmNlKHNvdXJjZUlEKS5zZXREYXRhKGdlb0pTT04pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL01hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=