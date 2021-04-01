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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "C:\\Users\\Z.V.I\\Local Sites\\test\\app\\public\\wp-content\\plugins\\zv-easy-blocks\\blocks\\content-expand\\src\\edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "updateRangeControl", function (maxHeight) {
      _this.props.setAttributes({
        maxHeight: maxHeight
      });

      Object(_script__WEBPACK_IMPORTED_MODULE_2__["seeMoreChekcHeight"])();
      Object(_script__WEBPACK_IMPORTED_MODULE_2__["buttonToggle"])();
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "onChangeInner",
    value: function onChangeInner() {
      Object(_script__WEBPACK_IMPORTED_MODULE_2__["seeMoreChekcHeight"])();
      Object(_script__WEBPACK_IMPORTED_MODULE_2__["buttonToggle"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes;
      var maxHeight = attributes.maxHeight;
      return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings'),
        initialOpen: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content max height', 'ust-blocks'),
        value: maxHeight,
        onChange: this.updateRangeControl,
        min: 100,
        max: 999,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }
      }))), wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, wp.element.createElement("div", {
        className: "seemore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, wp.element.createElement("div", {
        className: "max-height",
        style: {
          maxHeight: maxHeight
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }, wp.element.createElement("div", {
        className: "full-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
        onChange: this.onChangeInner(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      }))), wp.element.createElement("div", {
        className: "btn-more",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }))));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
var _jsxFileName = "C:\\Users\\Z.V.I\\Local Sites\\test\\app\\public\\wp-content\\plugins\\zv-easy-blocks\\blocks\\content-expand\\src\\editor.js";





var attributes = {
  maxHeight: {
    type: 'number',
    default: 215
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ust/expand', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expand', 'ust-blocks'),
  category: 'layout',
  icon: {
    background: '#004696',
    foreground: '#fff',
    src: 'arrow-down-alt2'
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('expand', 'ust-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('seemore', 'ust-blocks')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var maxHeight = attributes.maxHeight;
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, wp.element.createElement("div", {
      className: "seemore",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, wp.element.createElement("div", {
      className: "max-height",
      style: {
        maxHeight: maxHeight
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, wp.element.createElement("div", {
      className: "full-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }))), wp.element.createElement("div", {
      className: "btn-more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    })));
  }
});

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: seeMoreChekcHeight, buttonToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeMoreChekcHeight", function() { return seeMoreChekcHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonToggle", function() { return buttonToggle; });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
/*
  scrollTo(element.scrollTop || 200, 400)
*/


function scrollTo(to, duration) {
  var element = document.scrollingElement;
  var start = element && element.scrollTop || window.pageYOffset,
      change = to - start,
      increment = 20;
  var currentTime = 0;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);

    if (currentTime < duration) {
      window.setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

function buttonToggle() {
  var OffsetTop = 0;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.btn-more').toggle(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().attr('data-toggle', 1);
    OffsetTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).scrollTop();
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().attr('data-toggle', 0);
    scrollTo(OffsetTop || 200, 100);
  });
}

function seeMoreChekcHeight() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.seemore').each(function () {
    var button = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.btn-more');
    var elMaxHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.max-height');
    var maxHeight = elMaxHeight.css('max-height').replace('px', '');
    var height = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.full-text').height();

    if (height > maxHeight) {
      button.show();
      elMaxHeight.css('max-height', maxHeight);
    } else {
      button.hide();
      elMaxHeight.css('max-height', 'initial');
    }
  });
}

window.addEventListener('load', function () {
  seeMoreChekcHeight();
  buttonToggle();
});
window.addEventListener('resize', seeMoreChekcHeight);


/***/ }),

/***/ "./src/style.editor.scss":
/*!*******************************!*\
  !*** ./src/style.editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map