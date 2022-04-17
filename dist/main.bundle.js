/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./calculator/index.js":
/*!*****************************!*\
  !*** ./calculator/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _value = /*#__PURE__*/new WeakMap();\n\nvar _history = /*#__PURE__*/new WeakMap();\n\nvar _memory = /*#__PURE__*/new WeakMap();\n\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n\n    _classPrivateFieldInitSpec(this, _value, {\n      writable: true,\n      value: 0\n    });\n\n    _classPrivateFieldInitSpec(this, _history, {\n      writable: true,\n      value: []\n    });\n\n    _classPrivateFieldInitSpec(this, _memory, {\n      writable: true,\n      value: 0\n    });\n  }\n\n  _createClass(Calculator, [{\n    key: \"value\",\n    get: // }\n    function get() {\n      return _classPrivateFieldGet(this, _value);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _value, value);\n    }\n  }, {\n    key: \"history\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _history);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _history, value);\n    }\n  }, {\n    key: \"memory\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _memory);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _memory, value);\n    }\n  }, {\n    key: \"executeMemoryCommand\",\n    value: function executeMemoryCommand(command) {\n      this.memory = command.execute(this.memory);\n    }\n  }, {\n    key: \"executeCommand\",\n    value: function executeCommand(command) {\n      this.value = command.execute(this.value);\n      this.history.push(command);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo() {\n      if (this.history.length) {\n        var command = this.history.pop();\n        this.value = command.undo(this.value);\n      } else this.value = 0;\n    }\n  }, {\n    key: \"clearHistory\",\n    value: function clearHistory() {\n      this.history = [];\n    }\n  }]);\n\n  return Calculator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n//# sourceURL=webpack:///./calculator/index.js?");

/***/ }),

/***/ "./commands/Command.js":
/*!*****************************!*\
  !*** ./commands/Command.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/* eslint-disable class-methods-use-this */\nvar Command = /*#__PURE__*/function () {\n  function Command(value) {\n    _classCallCheck(this, Command);\n\n    this.value = value;\n  }\n\n  _createClass(Command, [{\n    key: \"execute\",\n    value: function execute(value) {\n      throw new Error('Method is not implemented');\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(value) {\n      throw new Error('Method is not implemented');\n    }\n  }]);\n\n  return Command;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);\n\n//# sourceURL=webpack:///./commands/Command.js?");

/***/ }),

/***/ "./commands/basic/addCommand.js":
/*!**************************************!*\
  !*** ./commands/basic/addCommand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar AddCommand = /*#__PURE__*/function (_Command) {\n  _inherits(AddCommand, _Command);\n\n  var _super = _createSuper(AddCommand);\n\n  function AddCommand() {\n    _classCallCheck(this, AddCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(AddCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue + this.value;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return currentValue - this.value;\n    }\n  }]);\n\n  return AddCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCommand);\n\n//# sourceURL=webpack:///./commands/basic/addCommand.js?");

/***/ }),

/***/ "./commands/basic/divCommand.js":
/*!**************************************!*\
  !*** ./commands/basic/divCommand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar DivideCommand = /*#__PURE__*/function (_Command) {\n  _inherits(DivideCommand, _Command);\n\n  var _super = _createSuper(DivideCommand);\n\n  function DivideCommand() {\n    _classCallCheck(this, DivideCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(DivideCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      if (this.value === 0) throw new Error('divide by 0 error');\n      return currentValue / this.value;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return currentValue * this.value;\n    }\n  }]);\n\n  return DivideCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivideCommand);\n\n//# sourceURL=webpack:///./commands/basic/divCommand.js?");

/***/ }),

/***/ "./commands/basic/mulCommand.js":
/*!**************************************!*\
  !*** ./commands/basic/mulCommand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MultiplyCommand = /*#__PURE__*/function (_Command) {\n  _inherits(MultiplyCommand, _Command);\n\n  var _super = _createSuper(MultiplyCommand);\n\n  function MultiplyCommand() {\n    _classCallCheck(this, MultiplyCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MultiplyCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue * this.value;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return currentValue / this.value;\n    }\n  }]);\n\n  return MultiplyCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiplyCommand);\n\n//# sourceURL=webpack:///./commands/basic/mulCommand.js?");

/***/ }),

/***/ "./commands/basic/subCommand.js":
/*!**************************************!*\
  !*** ./commands/basic/subCommand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar SubtractCommand = /*#__PURE__*/function (_Command) {\n  _inherits(SubtractCommand, _Command);\n\n  var _super = _createSuper(SubtractCommand);\n\n  function SubtractCommand() {\n    _classCallCheck(this, SubtractCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(SubtractCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue - this.value;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return currentValue + this.value;\n    }\n  }]);\n\n  return SubtractCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractCommand);\n\n//# sourceURL=webpack:///./commands/basic/subCommand.js?");

/***/ }),

/***/ "./commands/extended/factorialCommand.js":
/*!***********************************************!*\
  !*** ./commands/extended/factorialCommand.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar FactorialCommand = /*#__PURE__*/function (_Command) {\n  _inherits(FactorialCommand, _Command);\n\n  var _super = _createSuper(FactorialCommand);\n\n  function FactorialCommand() {\n    _classCallCheck(this, FactorialCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(FactorialCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return this.factorial(currentValue);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo() {\n      return this.value;\n    }\n  }, {\n    key: \"factorial\",\n    value: function factorial(n) {\n      if (n < 0) throw new Error('Bad operator');\n      return n ? n * this.factorial(n - 1) : 1;\n    }\n  }]);\n\n  return FactorialCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactorialCommand);\n\n//# sourceURL=webpack:///./commands/extended/factorialCommand.js?");

/***/ }),

/***/ "./commands/extended/invertSignCommand.js":
/*!************************************************!*\
  !*** ./commands/extended/invertSignCommand.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar InvertSignCommand = /*#__PURE__*/function (_Command) {\n  _inherits(InvertSignCommand, _Command);\n\n  var _super = _createSuper(InvertSignCommand);\n\n  function InvertSignCommand() {\n    _classCallCheck(this, InvertSignCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(InvertSignCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return -currentValue;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return -currentValue;\n    }\n  }]);\n\n  return InvertSignCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvertSignCommand);\n\n//# sourceURL=webpack:///./commands/extended/invertSignCommand.js?");

/***/ }),

/***/ "./commands/extended/oneDIvXCommand.js":
/*!*********************************************!*\
  !*** ./commands/extended/oneDIvXCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar OneDivXCommand = /*#__PURE__*/function (_Command) {\n  _inherits(OneDivXCommand, _Command);\n\n  var _super = _createSuper(OneDivXCommand);\n\n  function OneDivXCommand() {\n    _classCallCheck(this, OneDivXCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(OneDivXCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      if (currentValue === 0) throw new Error('divide by 0 error');\n      return Math.pow(currentValue, -1);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, -1);\n    }\n  }]);\n\n  return OneDivXCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneDivXCommand);\n\n//# sourceURL=webpack:///./commands/extended/oneDIvXCommand.js?");

/***/ }),

/***/ "./commands/extended/percentCommand.js":
/*!*********************************************!*\
  !*** ./commands/extended/percentCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar PercentCommand = /*#__PURE__*/function (_Command) {\n  _inherits(PercentCommand, _Command);\n\n  var _super = _createSuper(PercentCommand);\n\n  function PercentCommand() {\n    _classCallCheck(this, PercentCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(PercentCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue / 100;\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return currentValue * 100;\n    }\n  }]);\n\n  return PercentCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentCommand);\n\n//# sourceURL=webpack:///./commands/extended/percentCommand.js?");

/***/ }),

/***/ "./commands/memory/memoryClearCommand.js":
/*!***********************************************!*\
  !*** ./commands/memory/memoryClearCommand.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-param-reassign */\n\n/* eslint-disable class-methods-use-this */\n\n\nvar MemoryClearCommand = /*#__PURE__*/function (_Command) {\n  _inherits(MemoryClearCommand, _Command);\n\n  var _super = _createSuper(MemoryClearCommand);\n\n  function MemoryClearCommand() {\n    _classCallCheck(this, MemoryClearCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MemoryClearCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      currentValue = 0;\n      return currentValue;\n    }\n  }]);\n\n  return MemoryClearCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryClearCommand);\n\n//# sourceURL=webpack:///./commands/memory/memoryClearCommand.js?");

/***/ }),

/***/ "./commands/memory/memoryMinusCommand.js":
/*!***********************************************!*\
  !*** ./commands/memory/memoryMinusCommand.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MemoryMinusCommand = /*#__PURE__*/function (_Command) {\n  _inherits(MemoryMinusCommand, _Command);\n\n  var _super = _createSuper(MemoryMinusCommand);\n\n  function MemoryMinusCommand() {\n    _classCallCheck(this, MemoryMinusCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MemoryMinusCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue - this.value;\n    }\n  }]);\n\n  return MemoryMinusCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryMinusCommand);\n\n//# sourceURL=webpack:///./commands/memory/memoryMinusCommand.js?");

/***/ }),

/***/ "./commands/memory/memoryPlusCommand.js":
/*!**********************************************!*\
  !*** ./commands/memory/memoryPlusCommand.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MemoryPlusCommand = /*#__PURE__*/function (_Command) {\n  _inherits(MemoryPlusCommand, _Command);\n\n  var _super = _createSuper(MemoryPlusCommand);\n\n  function MemoryPlusCommand() {\n    _classCallCheck(this, MemoryPlusCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MemoryPlusCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue + this.value;\n    }\n  }]);\n\n  return MemoryPlusCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryPlusCommand);\n\n//# sourceURL=webpack:///./commands/memory/memoryPlusCommand.js?");

/***/ }),

/***/ "./commands/memory/memoryReadCommand.js":
/*!**********************************************!*\
  !*** ./commands/memory/memoryReadCommand.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar MemoryReadCommand = /*#__PURE__*/function (_Command) {\n  _inherits(MemoryReadCommand, _Command);\n\n  var _super = _createSuper(MemoryReadCommand);\n\n  function MemoryReadCommand() {\n    _classCallCheck(this, MemoryReadCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MemoryReadCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue;\n    }\n  }]);\n\n  return MemoryReadCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryReadCommand);\n\n//# sourceURL=webpack:///./commands/memory/memoryReadCommand.js?");

/***/ }),

/***/ "./commands/pows/cubeCommand.js":
/*!**************************************!*\
  !*** ./commands/pows/cubeCommand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar CubeCommand = /*#__PURE__*/function (_Command) {\n  _inherits(CubeCommand, _Command);\n\n  var _super = _createSuper(CubeCommand);\n\n  function CubeCommand() {\n    _classCallCheck(this, CubeCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(CubeCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 3);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, 1 / 3);\n    }\n  }]);\n\n  return CubeCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeCommand);\n\n//# sourceURL=webpack:///./commands/pows/cubeCommand.js?");

/***/ }),

/***/ "./commands/pows/sqrCommand.js":
/*!*************************************!*\
  !*** ./commands/pows/sqrCommand.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar SqrCommand = /*#__PURE__*/function (_Command) {\n  _inherits(SqrCommand, _Command);\n\n  var _super = _createSuper(SqrCommand);\n\n  function SqrCommand() {\n    _classCallCheck(this, SqrCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(SqrCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 2);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, 0.5);\n    }\n  }]);\n\n  return SqrCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SqrCommand);\n\n//# sourceURL=webpack:///./commands/pows/sqrCommand.js?");

/***/ }),

/***/ "./commands/pows/tenPowCommand.js":
/*!****************************************!*\
  !*** ./commands/pows/tenPowCommand.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar TenPowCommand = /*#__PURE__*/function (_Command) {\n  _inherits(TenPowCommand, _Command);\n\n  var _super = _createSuper(TenPowCommand);\n\n  function TenPowCommand() {\n    _classCallCheck(this, TenPowCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(TenPowCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(10, currentValue);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo() {\n      return this.value;\n    }\n  }]);\n\n  return TenPowCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TenPowCommand);\n\n//# sourceURL=webpack:///./commands/pows/tenPowCommand.js?");

/***/ }),

/***/ "./commands/pows/yCommand.js":
/*!***********************************!*\
  !*** ./commands/pows/yCommand.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar YCommand = /*#__PURE__*/function (_Command) {\n  _inherits(YCommand, _Command);\n\n  var _super = _createSuper(YCommand);\n\n  function YCommand() {\n    _classCallCheck(this, YCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(YCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, this.value);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, 1 / this.value);\n    }\n  }]);\n\n  return YCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YCommand);\n\n//# sourceURL=webpack:///./commands/pows/yCommand.js?");

/***/ }),

/***/ "./commands/roots/cubeRootCommand.js":
/*!*******************************************!*\
  !*** ./commands/roots/cubeRootCommand.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar CubeRootCommand = /*#__PURE__*/function (_Command) {\n  _inherits(CubeRootCommand, _Command);\n\n  var _super = _createSuper(CubeRootCommand);\n\n  function CubeRootCommand() {\n    _classCallCheck(this, CubeRootCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(CubeRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      if (currentValue < 0) throw new Error('Cube root should have positive operand');\n      return Math.pow(currentValue, 1 / 3);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, 3);\n    }\n  }]);\n\n  return CubeRootCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeRootCommand);\n\n//# sourceURL=webpack:///./commands/roots/cubeRootCommand.js?");

/***/ }),

/***/ "./commands/roots/squareRootCommand.js":
/*!*********************************************!*\
  !*** ./commands/roots/squareRootCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar SquareRootCommand = /*#__PURE__*/function (_Command) {\n  _inherits(SquareRootCommand, _Command);\n\n  var _super = _createSuper(SquareRootCommand);\n\n  function SquareRootCommand() {\n    _classCallCheck(this, SquareRootCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(SquareRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      if (currentValue < 0) throw new Error('Square root should have positive operand');\n      return Math.pow(currentValue, 0.5);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, 2);\n    }\n  }]);\n\n  return SquareRootCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SquareRootCommand);\n\n//# sourceURL=webpack:///./commands/roots/squareRootCommand.js?");

/***/ }),

/***/ "./commands/roots/yRootCommand.js":
/*!****************************************!*\
  !*** ./commands/roots/yRootCommand.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command */ \"./commands/Command.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar YRootCommand = /*#__PURE__*/function (_Command) {\n  _inherits(YRootCommand, _Command);\n\n  var _super = _createSuper(YRootCommand);\n\n  function YRootCommand() {\n    _classCallCheck(this, YRootCommand);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(YRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      if (currentValue < 0) throw new Error('Y root should have positive operand');\n      return Math.pow(currentValue, 1 / this.value);\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(currentValue) {\n      return Math.pow(currentValue, this.value);\n    }\n  }]);\n\n  return YRootCommand;\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YRootCommand);\n\n//# sourceURL=webpack:///./commands/roots/yRootCommand.js?");

/***/ }),

/***/ "./factory/commandsFactory.js":
/*!************************************!*\
  !*** ./factory/commandsFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_commandList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/commandList */ \"./helpers/commandList.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/* eslint-disable class-methods-use-this */\n\n\nvar CommandsFactory = /*#__PURE__*/function () {\n  function CommandsFactory() {\n    _classCallCheck(this, CommandsFactory);\n  }\n\n  _createClass(CommandsFactory, [{\n    key: \"create\",\n    value: function create(type) {\n      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var Command = _helpers_commandList__WEBPACK_IMPORTED_MODULE_0__[\"default\"][type];\n      return new Command(value);\n    }\n  }]);\n\n  return CommandsFactory;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandsFactory);\n\n//# sourceURL=webpack:///./factory/commandsFactory.js?");

/***/ }),

/***/ "./helpers/commandList.js":
/*!********************************!*\
  !*** ./helpers/commandList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commands_basic_addCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands/basic/addCommand */ \"./commands/basic/addCommand.js\");\n/* harmony import */ var _commands_basic_divCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands/basic/divCommand */ \"./commands/basic/divCommand.js\");\n/* harmony import */ var _commands_basic_mulCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commands/basic/mulCommand */ \"./commands/basic/mulCommand.js\");\n/* harmony import */ var _commands_basic_subCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commands/basic/subCommand */ \"./commands/basic/subCommand.js\");\n/* harmony import */ var _commands_extended_percentCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands/extended/percentCommand */ \"./commands/extended/percentCommand.js\");\n/* harmony import */ var _commands_pows_yCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commands/pows/yCommand */ \"./commands/pows/yCommand.js\");\n/* harmony import */ var _commands_roots_yRootCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commands/roots/yRootCommand */ \"./commands/roots/yRootCommand.js\");\n/* harmony import */ var _commands_extended_invertSignCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands/extended/invertSignCommand */ \"./commands/extended/invertSignCommand.js\");\n/* harmony import */ var _commands_pows_sqrCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commands/pows/sqrCommand */ \"./commands/pows/sqrCommand.js\");\n/* harmony import */ var _commands_pows_cubeCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commands/pows/cubeCommand */ \"./commands/pows/cubeCommand.js\");\n/* harmony import */ var _commands_pows_tenPowCommand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commands/pows/tenPowCommand */ \"./commands/pows/tenPowCommand.js\");\n/* harmony import */ var _commands_extended_oneDIvXCommand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commands/extended/oneDIvXCommand */ \"./commands/extended/oneDIvXCommand.js\");\n/* harmony import */ var _commands_extended_factorialCommand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commands/extended/factorialCommand */ \"./commands/extended/factorialCommand.js\");\n/* harmony import */ var _commands_roots_squareRootCommand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commands/roots/squareRootCommand */ \"./commands/roots/squareRootCommand.js\");\n/* harmony import */ var _commands_roots_cubeRootCommand__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commands/roots/cubeRootCommand */ \"./commands/roots/cubeRootCommand.js\");\n/* harmony import */ var _commands_memory_memoryPlusCommand__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commands/memory/memoryPlusCommand */ \"./commands/memory/memoryPlusCommand.js\");\n/* harmony import */ var _commands_memory_memoryMinusCommand__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commands/memory/memoryMinusCommand */ \"./commands/memory/memoryMinusCommand.js\");\n/* harmony import */ var _commands_memory_memoryReadCommand__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../commands/memory/memoryReadCommand */ \"./commands/memory/memoryReadCommand.js\");\n/* harmony import */ var _commands_memory_memoryClearCommand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commands/memory/memoryClearCommand */ \"./commands/memory/memoryClearCommand.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar commandsList = {\n  '+': _commands_basic_addCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  '-': _commands_basic_subCommand__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  '*': _commands_basic_mulCommand__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  '/': _commands_basic_divCommand__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '^y': _commands_pows_yCommand__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'yRoot(x)': _commands_roots_yRootCommand__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  '%': _commands_extended_percentCommand__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  '+-': _commands_extended_invertSignCommand__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  '^2': _commands_pows_sqrCommand__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  '^3': _commands_pows_cubeCommand__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  '10^x': _commands_pows_tenPowCommand__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  '1/x': _commands_extended_oneDIvXCommand__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  '!': _commands_extended_factorialCommand__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  '^(1/2)': _commands_roots_squareRootCommand__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  '^(1/3)': _commands_roots_cubeRootCommand__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  'M+': _commands_memory_memoryPlusCommand__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  'M-': _commands_memory_memoryMinusCommand__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  MR: _commands_memory_memoryReadCommand__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  MC: _commands_memory_memoryClearCommand__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commandsList);\n\n//# sourceURL=webpack:///./helpers/commandList.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoker_invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker/invoker */ \"./invoker/invoker.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* eslint-disable no-empty */\n\n\nvar digitsButtons = document.querySelectorAll('.digit, .decimal');\nvar operationsButtons = document.querySelectorAll('.calc-keys button:not(.digit, .equal-sign, .decimal, .memory)');\nvar equalButton = document.querySelector('.equal-sign');\nvar screen = document.querySelector('.calc-screen .initial');\nvar operatorValue = document.querySelector('.operator-value');\nvar memoryValue = document.querySelector('.memory-value span');\nvar memoryButtons = document.querySelectorAll('.memory');\nvar toggle = document.getElementById('toggle');\nvar showHistoryButton = document.querySelector('.show-history');\nvar historyContainer = document.querySelector('.history-container');\nvar historyItems = document.getElementsByClassName('history-item');\nvar historyUndoButton = document.querySelector('.history-undo');\nvar invoker = new _invoker_invoker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // functions\n\nvar pushResultToHistory = function pushResultToHistory(_ref) {\n  var operation = _ref.operation,\n      equal = _ref.equal;\n  historyContainer.insertAdjacentHTML('afterbegin', \"\\n\\t\\t<div class=\\\"history-item\\\">\\n\\t\\t\\t<p class=\\\"history-item-operation\\\">\".concat(operation, \"</p>\\n\\t\\t\\t<p class=\\\"history-item-value\\\">= \").concat(equal, \"</p>\\n\\t\\t</div>\\n\\t\"));\n}; // handlers\n\n\ndigitsButtons.forEach(function (digit) {\n  digit.addEventListener('click', function () {\n    if (!invoker.operator && !invoker.rightOperand && !invoker.finish) {\n      // handle 0 before \".\"\n      if (digit.value === '0' && !invoker.leftOperand.includes('.') && invoker.leftOperand === '0') {\n        invoker.leftOperand = digit.value;\n        screen.value = invoker.leftOperand;\n      } else if (digit.value === '.' && invoker.leftOperand.includes('.')) {} else {\n        // handle left operator\n        if (!invoker.leftOperand && digit.value === '.') {\n          invoker.handleLeftOperand(0);\n        }\n\n        invoker.handleLeftOperand(digit.value);\n        screen.value = invoker.leftOperand;\n      } // handle left operator after equal\n\n    } else if (invoker.finish) {\n      invoker.clearUI();\n      invoker.handleLeftOperand(digit.value);\n      screen.value = invoker.leftOperand;\n    } else if (invoker.operator && !invoker.finish) {\n      if (digit.value === '0' && !invoker.rightOperand.includes('.') && invoker.rightOperand === '0') {\n        invoker.rightOperand = digit.value;\n        screen.value = invoker.rightOperand;\n      } else if (digit.value === '.' && invoker.rightOperand.includes('.')) {} else {\n        // handle right operator\n        if (!invoker.rightOperand && digit.value === '.') {\n          invoker.handleRightOperand(0);\n        }\n\n        invoker.handleRightOperand(digit.value);\n        screen.value = invoker.rightOperand;\n      }\n    }\n  });\n});\noperationsButtons.forEach(function (operation) {\n  operation.addEventListener('click', function () {\n    // clicked basic or extended operation ?\n    if (operation.classList.contains('extend-operator')) {\n      invoker.operator = operation.value;\n      invoker.execute(true);\n\n      if (!invoker.historyObject.error) {\n        pushResultToHistory(invoker.historyObject);\n        screen.value = invoker.leftOperand;\n      } else screen.value = invoker.historyObject.error;\n    } else {\n      // clicked basic operation\n      // clicked after equal?\n      if (invoker.finish) {\n        invoker.finish = false;\n        invoker.rightOperand = '';\n      } // clicked AC operation?\n\n\n      if (operation.value === 'AC') {\n        screen.value = invoker.clearCalculator();\n        historyContainer.textContent = '';\n        operatorValue.textContent = '';\n      } else {\n        // clicked basic operation\n        // clicked operator when left operator right was entered\n        if (invoker.leftOperand && invoker.operator && invoker.rightOperand) {\n          invoker.execute();\n\n          if (!invoker.historyObject.error) {\n            screen.value = invoker.leftOperand;\n            pushResultToHistory(invoker.historyObject);\n          } else {\n            screen.value = invoker.historyObject.error;\n          }\n\n          invoker.operator = operation.value;\n          operatorValue.textContent = invoker.operator;\n          invoker.finish = false;\n          invoker.rightOperand = '';\n        }\n\n        invoker.operator = operation.value;\n        operatorValue.textContent = invoker.operator;\n      }\n    }\n  });\n});\nequalButton.addEventListener('click', function () {\n  if (!invoker.operator && !invoker.rightOperand) {\n    screen.value = invoker.leftOperand || screen.value;\n    invoker.finish = true;\n  } else {\n    if (!invoker.rightOperand) invoker.rightOperand = invoker.leftOperand;\n    invoker.execute();\n\n    if (!invoker.historyObject.error) {\n      screen.value = invoker.leftOperand;\n      pushResultToHistory(invoker.historyObject);\n    } else screen.value = invoker.historyObject.error;\n  }\n\n  operatorValue.textContent = '';\n});\nmemoryButtons.forEach(function (memoryBtn) {\n  memoryBtn.addEventListener('click', function () {\n    var valueToMemory = screen.value;\n\n    if (memoryBtn.value === 'M+' || memoryBtn.value === 'M-') {\n      memoryValue.textContent = invoker.handleMemory(memoryBtn.value, valueToMemory);\n    } else if (memoryBtn.value === 'MR') {\n      // check in which operator return memory value\n      screen.value = invoker.handleMemoryRead(memoryBtn.value);\n    } else {\n      memoryValue.textContent = invoker.handleMemory(memoryBtn.value);\n    }\n  });\n});\ntoggle.addEventListener('input', function (e) {\n  var isChecked = e.target.checked;\n\n  if (isChecked) {\n    document.documentElement.dataset.theme = 'light';\n  } else {\n    document.documentElement.dataset.theme = 'dark';\n  }\n});\nhistoryUndoButton.addEventListener('click', function () {\n  if (historyItems.length) {\n    invoker.undo();\n    screen.value = invoker.leftOperand; // pop history container\n\n    historyContainer.removeChild(historyItems[0]);\n  }\n});\nshowHistoryButton.addEventListener('click', function () {\n  var history = document.querySelector('.history');\n  history.classList.toggle('visible');\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./invoker/invoker.js":
/*!****************************!*\
  !*** ./invoker/invoker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calculator */ \"./calculator/index.js\");\n/* harmony import */ var _factory_commandsFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory/commandsFactory */ \"./factory/commandsFactory.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\n\nvar _leftOperand = /*#__PURE__*/new WeakMap();\n\nvar _operator = /*#__PURE__*/new WeakMap();\n\nvar _rightOperand = /*#__PURE__*/new WeakMap();\n\nvar _finish = /*#__PURE__*/new WeakMap();\n\nvar _historyObject = /*#__PURE__*/new WeakMap();\n\nvar _factory = /*#__PURE__*/new WeakMap();\n\nvar _calculator = /*#__PURE__*/new WeakMap();\n\nvar Invoker = /*#__PURE__*/function () {\n  function Invoker() {\n    _classCallCheck(this, Invoker);\n\n    _classPrivateFieldInitSpec(this, _leftOperand, {\n      writable: true,\n      value: ''\n    });\n\n    _classPrivateFieldInitSpec(this, _operator, {\n      writable: true,\n      value: ''\n    });\n\n    _classPrivateFieldInitSpec(this, _rightOperand, {\n      writable: true,\n      value: ''\n    });\n\n    _classPrivateFieldInitSpec(this, _finish, {\n      writable: true,\n      value: false\n    });\n\n    _classPrivateFieldInitSpec(this, _historyObject, {\n      writable: true,\n      value: {}\n    });\n\n    _classPrivateFieldInitSpec(this, _factory, {\n      writable: true,\n      value: new _factory_commandsFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    });\n\n    _classPrivateFieldInitSpec(this, _calculator, {\n      writable: true,\n      value: new _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    });\n  }\n\n  _createClass(Invoker, [{\n    key: \"leftOperand\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _leftOperand);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _leftOperand, value);\n    }\n  }, {\n    key: \"operator\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _operator);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _operator, value);\n    }\n  }, {\n    key: \"rightOperand\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _rightOperand);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _rightOperand, value);\n    }\n  }, {\n    key: \"finish\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _finish);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _finish, value);\n    }\n  }, {\n    key: \"historyObject\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _historyObject);\n    },\n    set: function set(value) {\n      _classPrivateFieldSet(this, _historyObject, value);\n    }\n  }, {\n    key: \"factory\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _factory);\n    }\n  }, {\n    key: \"calculator\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _calculator);\n    },\n    set: function set(calc) {\n      _classPrivateFieldSet(this, _calculator, calc);\n    }\n  }, {\n    key: \"clearUI\",\n    value: function clearUI() {\n      this.leftOperand = '';\n      this.operator = '';\n      this.rightOperand = '';\n      this.finish = false;\n    }\n  }, {\n    key: \"clearCalculator\",\n    value: function clearCalculator() {\n      this.clearUI();\n      this.calculator.clearHistory();\n      this.calculator.value = 0;\n      return this.calculator.value;\n    }\n  }, {\n    key: \"handleLeftOperand\",\n    value: function handleLeftOperand(value) {\n      if (this.finish) {\n        this.leftOperand = value;\n      } else {\n        this.leftOperand += value;\n      }\n\n      this.calculator.value = +this.leftOperand;\n    }\n  }, {\n    key: \"handleRightOperand\",\n    value: function handleRightOperand(value) {\n      this.rightOperand += value;\n    }\n  }, {\n    key: \"handleMemory\",\n    value: function handleMemory(operation) {\n      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var command = this.factory.create(operation, +value);\n      this.calculator.executeMemoryCommand(command);\n      return this.calculator.memory;\n    } // eslint-disable-next-line consistent-return\n\n  }, {\n    key: \"handleMemoryRead\",\n    value: function handleMemoryRead(btnValue) {\n      if (!this.operator) {\n        this.finish = true;\n        this.handleLeftOperand(this.handleMemory(btnValue).toString());\n        return this.leftOperand;\n      }\n\n      if (!this.rightOperand) {\n        this.rightOperand = this.handleMemory(btnValue).toString();\n        return this.rightOperand;\n      }\n    }\n  }, {\n    key: \"execute\",\n    value: function execute() {\n      var isExtCommand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var command = isExtCommand ? this.factory.create(this.operator, +this.leftOperand) : this.factory.create(this.operator, +this.rightOperand);\n\n      _classPrivateFieldSet(this, _historyObject, {});\n\n      try {\n        this.calculator.executeCommand(command);\n        this.historyObject.operation = \"\".concat(this.leftOperand, \" \").concat(this.operator, \" \").concat(this.rightOperand);\n        this.historyObject.equal = this.calculator.value;\n        this.finish = true;\n        this.leftOperand = this.calculator.value.toString();\n        return this.leftOperand;\n      } catch (error) {\n        this.clearUI();\n        this.historyObject.error = error.message;\n        return this.historyObject.error;\n      }\n    }\n  }, {\n    key: \"undo\",\n    value: function undo() {\n      this.calculator.undo();\n      this.clearUI();\n      this.leftOperand = this.calculator.value.toString();\n    }\n  }]);\n\n  return Invoker;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoker);\n\n//# sourceURL=webpack:///./invoker/invoker.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles/styles.css":
/*!**********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles/styles.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"../node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n\\t--background: #333;\\r\\n\\t--calc-shadow: #343030d4;\\r\\n\\t--calc-background: #1c1b1b;\\r\\n\\t--calc-color: #fff;\\r\\n\\t--button-background: #36363696;\\r\\n\\t--button-shadow-outset: #262626;\\r\\n\\t--button-shadow-inset: #464646;\\r\\n\\t--button-active: #363636e8;\\r\\n\\t--hover-gradient-start: #313131;\\r\\n\\t--hover-gradient-end: #3a3a3a;\\r\\n\\t--button-outline: #adadad;\\r\\n\\t--operator-background: #ffa000;\\r\\n\\t--operator-shadow-outset: #b57200;\\r\\n\\t--operator-shadow-inset: #ffce00;\\r\\n\\t--operator-hover: #f7a824;\\r\\n\\t--keys-background: #34303033;\\r\\n\\t--operator-ext-background: #5c5858e8;\\r\\n\\t--operator-ext-hover: #6c6969e8;\\r\\n\\t--operator-ext-active: #413f3fe8;\\r\\n\\t--toggle-shadow-inset1: #181717;\\r\\n\\t--toggle-shadow-inset2: #201f1f;\\r\\n}\\r\\n\\r\\n:root[data-theme=\\\"light\\\"] {\\r\\n\\t--background: #fff;\\r\\n\\t--calc-shadow: #bebebe;\\r\\n\\t--calc-background: #e3e4e4;\\r\\n\\t--calc-color: #000000c2;\\r\\n\\t--button-background: #c9c9c996;\\r\\n\\t--button-shadow-outset: #ababab;\\r\\n\\t--button-shadow-inset: #e7e7e7;\\r\\n\\t--button-active: #363636e8;\\r\\n\\t--hover-gradient-start: #b5b5b5;\\r\\n\\t--hover-gradient-end: #d7d7d7;\\r\\n\\t--button-outline: #525252;\\r\\n\\t--operator-background: #ffa000;\\r\\n\\t--operator-shadow-outset: #b57200;\\r\\n\\t--operator-shadow-inset: #ffce00;\\r\\n\\t--operator-hover: #f7a824;\\r\\n\\t--keys-background: #34303033;\\r\\n\\t--operator-ext-background: #a3a7a7e8;\\r\\n\\t--operator-ext-hover: #afb1b1e8;\\r\\n\\t--operator-ext-active: #bec0c0e8;\\r\\n\\t--toggle-shadow-inset1: #c1c2c2;\\r\\n\\t--toggle-shadow-inset2: #ffffffce;\\r\\n}\\r\\n\\r\\n* {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\tbackground-color: var(--background);\\r\\n\\ttransition: 0.5s;\\r\\n}\\r\\n\\r\\n.container {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-evenly;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tpadding: 20px;\\r\\n}\\r\\n\\r\\n.calc {\\r\\n\\twidth: 40%;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tborder-radius: 30px;\\r\\n\\tmargin-bottom: 15px;\\r\\n\\tbox-shadow: 0px 0px 8px 4px var(--calc-shadow);\\r\\n}\\r\\n\\r\\n.history {\\r\\n\\tdisplay: none;\\r\\n\\twidth: 40%;\\r\\n\\tpadding: 25px 0 25px 25px;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tborder-radius: 30px;\\r\\n\\tbox-shadow: 0px 0px 8px 4px var(--calc-shadow);\\r\\n}\\r\\n\\r\\n.visible {\\r\\n\\tdisplay: block;\\r\\n\\tanimation: backInLeft 0.5s;\\r\\n}\\r\\n\\r\\n\\r\\n.history-header {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tfont-size: 25px;\\r\\n\\tpadding-right: 25px;\\r\\n}\\r\\n\\r\\n.history-undo {\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.history-header-clear {\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.history-title p {\\r\\n\\tfont-size: 25px;\\r\\n\\ttext-decoration: underline;\\r\\n\\ttext-decoration-color: var(--operator-background);\\r\\n}\\r\\n\\r\\n.history-container {\\r\\n\\theight: 590px;\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: 1fr;\\r\\n\\tborder-radius: 10px;\\r\\n\\tpadding-right: 25px;\\r\\n\\talign-content: start;\\r\\n\\tgap: 10px;\\r\\n\\tmargin: 15px 0;\\r\\n\\ttransition: all ease-in 0.2s;\\r\\n\\toverflow-y: auto;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar {\\r\\n\\twidth: 5px;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar-track {\\r\\n\\tbackground: transparent;\\r\\n\\tbox-shadow: inset 0 0 5px var(--button-shadow-inset);\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar-thumb {\\r\\n\\tbackground: var(--operator-ext-background);\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\\r\\n.history-item {\\r\\n\\theight: fit-content;\\r\\n\\tpadding: 15px;\\r\\n\\tborder-radius: 15px;\\r\\n\\ttext-align: right;\\r\\n\\tfont-size: 25px;\\r\\n\\tbackground-color: var(--button-background);\\r\\n\\tbox-shadow:  2px 2px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.history-item:hover {\\r\\n\\tbackground: linear-gradient(145deg, var(--hover-gradient-start), var(--hover-gradient-end));\\r\\n\\tbox-shadow:  1px 1px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.history-item:active {\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--button-shadow-outset),\\r\\n            inset -5px -5px 10px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox] {\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.toggle label {\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tborder-radius: 50px;\\r\\n\\tcursor: pointer;\\r\\n\\tdisplay: inline-block;\\r\\n\\tposition: relative;\\r\\n\\ttransition: all ease-in-out 0.3s;\\r\\n\\twidth: 50px;\\r\\n\\theight: 25px;\\r\\n\\tbox-shadow: inset 9px 10px 9px 0px var(--toggle-shadow-inset1),\\r\\n\\t\\t\\t\\t\\t\\t\\tinset -10px -9px 4px var(--toggle-shadow-inset2);\\r\\n}\\r\\n\\r\\n.toggle label::after {\\r\\n\\tbackground-color: var(--operator-ext-background);\\r\\n\\tborder-radius: 50%;\\r\\n\\tcontent: ' ';\\r\\n\\tcursor: pointer;\\r\\n\\tdisplay: inline-block;\\r\\n\\tposition: absolute;\\r\\n\\tleft: 3px;\\r\\n\\ttop: 2.5px;\\r\\n\\ttransition: all ease-in-out 0.3s;\\r\\n\\twidth: 20px;\\r\\n\\theight: 20px;\\r\\n\\tbox-shadow: 1px 1px 2px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t0px -1px 2px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox]:checked ~ label {\\r\\n\\tbackground-color: var(--calc-background);\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox]:checked ~ label::after {\\r\\n\\tbackground-color: var(--operator-ext-background);\\r\\n\\ttransform: translateX(24px);\\r\\n}\\r\\n\\r\\n.calc-screen {\\r\\n\\tpadding: 25px;\\r\\n}\\r\\n\\r\\n.calc-info {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tcolor: var(--calc-color);\\r\\n}\\r\\n\\r\\n.memory-value {\\r\\n\\tcolor: var(--operator-background);\\r\\n\\tfont-weight: 600;\\r\\n}\\r\\n\\r\\n.memory-value span {\\r\\n\\tcolor: var(--calc-color);\\r\\n}\\r\\n\\r\\n.operator-value {\\r\\n\\tfont-size: 16px;\\r\\n\\tpadding-right: 20px;\\r\\n}\\r\\n\\r\\n.calc-screen input[type=text] {\\r\\n\\twidth: 100%;\\r\\n\\tfont-size: 55px;\\r\\n\\theight: 80px;\\r\\n\\tborder: none;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tcolor: var(--calc-color);\\r\\n\\ttext-align: right;\\r\\n\\tpadding-right: 20px;\\r\\n\\tpadding-left: 10px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n\\tpadding: 10px 0;\\r\\n\\tborder-radius: 30px;\\r\\n\\tbackground-color: var(--button-background);\\r\\n\\tfont-size: 30px;\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tborder: none;\\r\\n\\ttransition: all 0.2s ease-out;\\r\\n\\tbox-shadow:  2px 2px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n\\tbackground: linear-gradient(145deg, var(--hover-gradient-start), var(--hover-gradient-end));\\r\\n\\tbox-shadow:  1px 1px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n\\tbackground-color: var(--button-active);\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\tinset -5px -5px 10px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:focus-visible {\\r\\n\\toutline: 2px solid var(--button-outline);\\r\\n\\r\\n}\\r\\n\\r\\nbutton.operator {\\r\\n\\tbackground-color: var(--operator-background);\\r\\n\\tbox-shadow:  2px 2px 2px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--operator-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton.operator:hover {\\r\\n\\tbackground: var(--operator-hover) !important;\\r\\n\\tbox-shadow:  1px 1px 4px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--operator-shadow-inset) !important;\\r\\n}\\r\\n\\r\\nbutton.operator:active {\\r\\n\\tbackground-color: var(--operator-hover) !important;\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\tinset -5px -5px 10px var(--operator-shadow-inset) !important;\\r\\n}\\r\\n\\r\\n.operator-ext {\\r\\n\\tbackground: var(--operator-ext-background);\\r\\n\\tfont-size: 25px;\\r\\n}\\r\\n\\r\\n.operator-ext:hover {\\r\\n\\tbackground: var(--operator-ext-hover);\\r\\n}\\r\\n\\r\\n.operator-ext:active {\\r\\n\\tbackground: var(--operator-ext-active);\\r\\n}\\r\\n\\r\\n.calc-keys {\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: repeat(6, 1fr);\\r\\n\\tgrid-gap: 20px;\\r\\n\\tpadding: 30px;\\r\\n\\tborder-radius: 50px 50px 32px 32px;\\r\\n\\tbackground-color: var(--keys-background);\\r\\n}\\r\\n\\r\\n.zero {\\r\\n\\tgrid-area: 6 / 3 / 6 / 5;\\r\\n}\\r\\n\\r\\nsup {\\r\\n\\tfont-size: 16px;\\r\\n}\\r\\n\\r\\n.memory-clear {\\r\\n\\tgrid-area: 1 / 3 / 1 / 5;\\r\\n}\\r\\n\\r\\nbutton[value=\\\"1/x\\\"] {\\r\\n\\tgrid-area: 6 / 1 / 6 / 3;\\r\\n}\\r\\n\\r\\n\\r\\n.active {\\r\\n\\ttransform: scale(1.2);\\r\\n}\\r\\n\\r\\n\\r\\n@keyframes backInLeft {\\r\\n  0% {\\r\\n    transform: translateX(-2000px) scale(.7);\\r\\n    opacity: .7;\\r\\n  }\\r\\n\\r\\n  80% {\\r\\n    transform: translateX(0px) scale(.7);\\r\\n    opacity: .7;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991.98px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 70%;\\r\\n\\t}\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 575px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tmargin: 0;\\r\\n    border-radius: 0;\\r\\n\\t}\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,0BAA0B;CAC1B,kBAAkB;CAClB,8BAA8B;CAC9B,+BAA+B;CAC/B,8BAA8B;CAC9B,0BAA0B;CAC1B,+BAA+B;CAC/B,6BAA6B;CAC7B,yBAAyB;CACzB,8BAA8B;CAC9B,iCAAiC;CACjC,gCAAgC;CAChC,yBAAyB;CACzB,4BAA4B;CAC5B,oCAAoC;CACpC,+BAA+B;CAC/B,gCAAgC;CAChC,+BAA+B;CAC/B,+BAA+B;AAChC;;AAEA;CACC,kBAAkB;CAClB,sBAAsB;CACtB,0BAA0B;CAC1B,uBAAuB;CACvB,8BAA8B;CAC9B,+BAA+B;CAC/B,8BAA8B;CAC9B,0BAA0B;CAC1B,+BAA+B;CAC/B,6BAA6B;CAC7B,yBAAyB;CACzB,8BAA8B;CAC9B,iCAAiC;CACjC,gCAAgC;CAChC,yBAAyB;CACzB,4BAA4B;CAC5B,oCAAoC;CACpC,+BAA+B;CAC/B,gCAAgC;CAChC,+BAA+B;CAC/B,iCAAiC;AAClC;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,4DAA4D;AAC7D;;AAEA;CACC,mCAAmC;CACnC,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,eAAe;CACf,aAAa;AACd;;AAEA;CACC,UAAU;CACV,wCAAwC;CACxC,mBAAmB;CACnB,mBAAmB;CACnB,8CAA8C;AAC/C;;AAEA;CACC,aAAa;CACb,UAAU;CACV,yBAAyB;CACzB,wCAAwC;CACxC,wBAAwB;CACxB,mBAAmB;CACnB,8CAA8C;AAC/C;;AAEA;CACC,cAAc;CACd,0BAA0B;AAC3B;;;AAGA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;CACxB,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,0BAA0B;CAC1B,iDAAiD;AAClD;;AAEA;CACC,aAAa;CACb,aAAa;CACb,0BAA0B;CAC1B,mBAAmB;CACnB,mBAAmB;CACnB,oBAAoB;CACpB,SAAS;CACT,cAAc;CACd,4BAA4B;CAC5B,gBAAgB;AACjB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,uBAAuB;CACvB,oDAAoD;CACpD,kBAAkB;AACnB;;AAEA;CACC,0CAA0C;CAC1C,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf,0CAA0C;CAC1C;+CAC8C;AAC/C;;AAEA;CACC,2FAA2F;CAC3F;8CAC6C;AAC9C;;AAEA;CACC;2DAC0D;AAC3D;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,wCAAwC;CACxC,mBAAmB;CACnB,eAAe;CACf,qBAAqB;CACrB,kBAAkB;CAClB,gCAAgC;CAChC,WAAW;CACX,YAAY;CACZ;uDACsD;AACvD;;AAEA;CACC,gDAAgD;CAChD,kBAAkB;CAClB,YAAY;CACZ,eAAe;CACf,qBAAqB;CACrB,kBAAkB;CAClB,SAAS;CACT,UAAU;CACV,gCAAgC;CAChC,WAAW;CACX,YAAY;CACZ;8CAC6C;AAC9C;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,gDAAgD;CAChD,2BAA2B;AAC5B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,wBAAwB;AACzB;;AAEA;CACC,iCAAiC;CACjC,gBAAgB;AACjB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,wCAAwC;CACxC,wBAAwB;CACxB,iBAAiB;CACjB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,0CAA0C;CAC1C,eAAe;CACf,wBAAwB;CACxB,YAAY;CACZ,6BAA6B;CAC7B;+CAC8C;AAC/C;;AAEA;CACC,2FAA2F;CAC3F;8CAC6C;AAC9C;;AAEA;CACC,sCAAsC;CACtC;qDACoD;AACrD;;AAEA;CACC,wCAAwC;;AAEzC;;AAEA;CACC,4CAA4C;CAC5C;iDACgD;AACjD;;AAEA;CACC,4CAA4C;CAC5C;4DAC2D;AAC5D;;AAEA;CACC,kDAAkD;CAClD;mEACkE;AACnE;;AAEA;CACC,0CAA0C;CAC1C,eAAe;AAChB;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,qCAAqC;CACrC,cAAc;CACd,aAAa;CACb,kCAAkC;CAClC,wCAAwC;AACzC;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;;AAGA;CACC,qBAAqB;AACtB;;;AAGA;EACE;IACE,wCAAwC;IACxC,WAAW;EACb;;EAEA;IACE,oCAAoC;IACpC,WAAW;EACb;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;AACF;;AAEA;CACC;EACC,UAAU;CACX;;AAED;;AAEA;CACC;EACC,UAAU;CACX;AACD;;AAEA;CACC;EACC,WAAW;EACX,SAAS;IACP,gBAAgB;CACnB;AACD\",\"sourcesContent\":[\":root {\\r\\n\\t--background: #333;\\r\\n\\t--calc-shadow: #343030d4;\\r\\n\\t--calc-background: #1c1b1b;\\r\\n\\t--calc-color: #fff;\\r\\n\\t--button-background: #36363696;\\r\\n\\t--button-shadow-outset: #262626;\\r\\n\\t--button-shadow-inset: #464646;\\r\\n\\t--button-active: #363636e8;\\r\\n\\t--hover-gradient-start: #313131;\\r\\n\\t--hover-gradient-end: #3a3a3a;\\r\\n\\t--button-outline: #adadad;\\r\\n\\t--operator-background: #ffa000;\\r\\n\\t--operator-shadow-outset: #b57200;\\r\\n\\t--operator-shadow-inset: #ffce00;\\r\\n\\t--operator-hover: #f7a824;\\r\\n\\t--keys-background: #34303033;\\r\\n\\t--operator-ext-background: #5c5858e8;\\r\\n\\t--operator-ext-hover: #6c6969e8;\\r\\n\\t--operator-ext-active: #413f3fe8;\\r\\n\\t--toggle-shadow-inset1: #181717;\\r\\n\\t--toggle-shadow-inset2: #201f1f;\\r\\n}\\r\\n\\r\\n:root[data-theme=\\\"light\\\"] {\\r\\n\\t--background: #fff;\\r\\n\\t--calc-shadow: #bebebe;\\r\\n\\t--calc-background: #e3e4e4;\\r\\n\\t--calc-color: #000000c2;\\r\\n\\t--button-background: #c9c9c996;\\r\\n\\t--button-shadow-outset: #ababab;\\r\\n\\t--button-shadow-inset: #e7e7e7;\\r\\n\\t--button-active: #363636e8;\\r\\n\\t--hover-gradient-start: #b5b5b5;\\r\\n\\t--hover-gradient-end: #d7d7d7;\\r\\n\\t--button-outline: #525252;\\r\\n\\t--operator-background: #ffa000;\\r\\n\\t--operator-shadow-outset: #b57200;\\r\\n\\t--operator-shadow-inset: #ffce00;\\r\\n\\t--operator-hover: #f7a824;\\r\\n\\t--keys-background: #34303033;\\r\\n\\t--operator-ext-background: #a3a7a7e8;\\r\\n\\t--operator-ext-hover: #afb1b1e8;\\r\\n\\t--operator-ext-active: #bec0c0e8;\\r\\n\\t--toggle-shadow-inset1: #c1c2c2;\\r\\n\\t--toggle-shadow-inset2: #ffffffce;\\r\\n}\\r\\n\\r\\n* {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\tbackground-color: var(--background);\\r\\n\\ttransition: 0.5s;\\r\\n}\\r\\n\\r\\n.container {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-evenly;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tpadding: 20px;\\r\\n}\\r\\n\\r\\n.calc {\\r\\n\\twidth: 40%;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tborder-radius: 30px;\\r\\n\\tmargin-bottom: 15px;\\r\\n\\tbox-shadow: 0px 0px 8px 4px var(--calc-shadow);\\r\\n}\\r\\n\\r\\n.history {\\r\\n\\tdisplay: none;\\r\\n\\twidth: 40%;\\r\\n\\tpadding: 25px 0 25px 25px;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tborder-radius: 30px;\\r\\n\\tbox-shadow: 0px 0px 8px 4px var(--calc-shadow);\\r\\n}\\r\\n\\r\\n.visible {\\r\\n\\tdisplay: block;\\r\\n\\tanimation: backInLeft 0.5s;\\r\\n}\\r\\n\\r\\n\\r\\n.history-header {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tfont-size: 25px;\\r\\n\\tpadding-right: 25px;\\r\\n}\\r\\n\\r\\n.history-undo {\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.history-header-clear {\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.history-title p {\\r\\n\\tfont-size: 25px;\\r\\n\\ttext-decoration: underline;\\r\\n\\ttext-decoration-color: var(--operator-background);\\r\\n}\\r\\n\\r\\n.history-container {\\r\\n\\theight: 590px;\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: 1fr;\\r\\n\\tborder-radius: 10px;\\r\\n\\tpadding-right: 25px;\\r\\n\\talign-content: start;\\r\\n\\tgap: 10px;\\r\\n\\tmargin: 15px 0;\\r\\n\\ttransition: all ease-in 0.2s;\\r\\n\\toverflow-y: auto;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar {\\r\\n\\twidth: 5px;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar-track {\\r\\n\\tbackground: transparent;\\r\\n\\tbox-shadow: inset 0 0 5px var(--button-shadow-inset);\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\\r\\n.history-container::-webkit-scrollbar-thumb {\\r\\n\\tbackground: var(--operator-ext-background);\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\\r\\n.history-item {\\r\\n\\theight: fit-content;\\r\\n\\tpadding: 15px;\\r\\n\\tborder-radius: 15px;\\r\\n\\ttext-align: right;\\r\\n\\tfont-size: 25px;\\r\\n\\tbackground-color: var(--button-background);\\r\\n\\tbox-shadow:  2px 2px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.history-item:hover {\\r\\n\\tbackground: linear-gradient(145deg, var(--hover-gradient-start), var(--hover-gradient-end));\\r\\n\\tbox-shadow:  1px 1px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.history-item:active {\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--button-shadow-outset),\\r\\n            inset -5px -5px 10px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox] {\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.toggle label {\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tborder-radius: 50px;\\r\\n\\tcursor: pointer;\\r\\n\\tdisplay: inline-block;\\r\\n\\tposition: relative;\\r\\n\\ttransition: all ease-in-out 0.3s;\\r\\n\\twidth: 50px;\\r\\n\\theight: 25px;\\r\\n\\tbox-shadow: inset 9px 10px 9px 0px var(--toggle-shadow-inset1),\\r\\n\\t\\t\\t\\t\\t\\t\\tinset -10px -9px 4px var(--toggle-shadow-inset2);\\r\\n}\\r\\n\\r\\n.toggle label::after {\\r\\n\\tbackground-color: var(--operator-ext-background);\\r\\n\\tborder-radius: 50%;\\r\\n\\tcontent: ' ';\\r\\n\\tcursor: pointer;\\r\\n\\tdisplay: inline-block;\\r\\n\\tposition: absolute;\\r\\n\\tleft: 3px;\\r\\n\\ttop: 2.5px;\\r\\n\\ttransition: all ease-in-out 0.3s;\\r\\n\\twidth: 20px;\\r\\n\\theight: 20px;\\r\\n\\tbox-shadow: 1px 1px 2px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t0px -1px 2px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox]:checked ~ label {\\r\\n\\tbackground-color: var(--calc-background);\\r\\n}\\r\\n\\r\\n.toggle input[type=checkbox]:checked ~ label::after {\\r\\n\\tbackground-color: var(--operator-ext-background);\\r\\n\\ttransform: translateX(24px);\\r\\n}\\r\\n\\r\\n.calc-screen {\\r\\n\\tpadding: 25px;\\r\\n}\\r\\n\\r\\n.calc-info {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tcolor: var(--calc-color);\\r\\n}\\r\\n\\r\\n.memory-value {\\r\\n\\tcolor: var(--operator-background);\\r\\n\\tfont-weight: 600;\\r\\n}\\r\\n\\r\\n.memory-value span {\\r\\n\\tcolor: var(--calc-color);\\r\\n}\\r\\n\\r\\n.operator-value {\\r\\n\\tfont-size: 16px;\\r\\n\\tpadding-right: 20px;\\r\\n}\\r\\n\\r\\n.calc-screen input[type=text] {\\r\\n\\twidth: 100%;\\r\\n\\tfont-size: 55px;\\r\\n\\theight: 80px;\\r\\n\\tborder: none;\\r\\n\\tbackground-color: var(--calc-background);\\r\\n\\tcolor: var(--calc-color);\\r\\n\\ttext-align: right;\\r\\n\\tpadding-right: 20px;\\r\\n\\tpadding-left: 10px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n\\tpadding: 10px 0;\\r\\n\\tborder-radius: 30px;\\r\\n\\tbackground-color: var(--button-background);\\r\\n\\tfont-size: 30px;\\r\\n\\tcolor: var(--calc-color);\\r\\n\\tborder: none;\\r\\n\\ttransition: all 0.2s ease-out;\\r\\n\\tbox-shadow:  2px 2px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 4px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n\\tbackground: linear-gradient(145deg, var(--hover-gradient-start), var(--hover-gradient-end));\\r\\n\\tbox-shadow:  1px 1px 4px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n\\tbackground-color: var(--button-active);\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--button-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\tinset -5px -5px 10px var(--button-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton:focus-visible {\\r\\n\\toutline: 2px solid var(--button-outline);\\r\\n\\r\\n}\\r\\n\\r\\nbutton.operator {\\r\\n\\tbackground-color: var(--operator-background);\\r\\n\\tbox-shadow:  2px 2px 2px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--operator-shadow-inset);\\r\\n}\\r\\n\\r\\nbutton.operator:hover {\\r\\n\\tbackground: var(--operator-hover) !important;\\r\\n\\tbox-shadow:  1px 1px 4px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\t-1px -1px 2px var(--operator-shadow-inset) !important;\\r\\n}\\r\\n\\r\\nbutton.operator:active {\\r\\n\\tbackground-color: var(--operator-hover) !important;\\r\\n\\tbox-shadow: inset 5px 5px 10px var(--operator-shadow-outset),\\r\\n\\t\\t\\t\\t\\t\\t\\tinset -5px -5px 10px var(--operator-shadow-inset) !important;\\r\\n}\\r\\n\\r\\n.operator-ext {\\r\\n\\tbackground: var(--operator-ext-background);\\r\\n\\tfont-size: 25px;\\r\\n}\\r\\n\\r\\n.operator-ext:hover {\\r\\n\\tbackground: var(--operator-ext-hover);\\r\\n}\\r\\n\\r\\n.operator-ext:active {\\r\\n\\tbackground: var(--operator-ext-active);\\r\\n}\\r\\n\\r\\n.calc-keys {\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: repeat(6, 1fr);\\r\\n\\tgrid-gap: 20px;\\r\\n\\tpadding: 30px;\\r\\n\\tborder-radius: 50px 50px 32px 32px;\\r\\n\\tbackground-color: var(--keys-background);\\r\\n}\\r\\n\\r\\n.zero {\\r\\n\\tgrid-area: 6 / 3 / 6 / 5;\\r\\n}\\r\\n\\r\\nsup {\\r\\n\\tfont-size: 16px;\\r\\n}\\r\\n\\r\\n.memory-clear {\\r\\n\\tgrid-area: 1 / 3 / 1 / 5;\\r\\n}\\r\\n\\r\\nbutton[value=\\\"1/x\\\"] {\\r\\n\\tgrid-area: 6 / 1 / 6 / 3;\\r\\n}\\r\\n\\r\\n\\r\\n.active {\\r\\n\\ttransform: scale(1.2);\\r\\n}\\r\\n\\r\\n\\r\\n@keyframes backInLeft {\\r\\n  0% {\\r\\n    transform: translateX(-2000px) scale(.7);\\r\\n    opacity: .7;\\r\\n  }\\r\\n\\r\\n  80% {\\r\\n    transform: translateX(0px) scale(.7);\\r\\n    opacity: .7;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991.98px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 55%;\\r\\n\\t}\\r\\n\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 70%;\\r\\n\\t}\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 575px) {\\r\\n\\t.calc, .history {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tmargin: 0;\\r\\n    border-radius: 0;\\r\\n\\t}\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles/styles.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles/styles.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7827c997b618a2c6b162")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;