(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************************!*\
  !*** /Users/gudepeng/git/chatApp/main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 8));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.prototype.$store = _store.default;\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({\n  store: _store.default },\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLDRFOztBQUVBQSxhQUFJQyxTQUFKLENBQWNDLE1BQWQsR0FBdUJDLGNBQXZCOztBQUVBSCxhQUFJSSxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFKO0FBQ1hHLE9BQUssRUFBTEEsY0FEVztBQUVMRyxZQUZLLEVBQVo7O0FBSUFFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuXHRzdG9yZSxcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** /Users/gudepeng/git/chatApp/pages.json ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}

__definePage('pages/tabbar/chat/index', function () {return Vue.extend(__webpack_require__(/*! pages/tabbar/chat/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** /Users/gudepeng/git/chatApp/pages/tabbar/chat/index.vue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=027ba153&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/chat/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyN2JhMTUzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2NoYXQvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************************!*\
  !*** /Users/gudepeng/git/chatApp/pages/tabbar/chat/index.vue?vue&type=template&id=027ba153&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=027ba153&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_027ba153_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/gudepeng/git/chatApp/pages/tabbar/chat/index.vue?vue&type=template&id=027ba153&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "content"),
    attrs: { _i: 0 }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************************!*\
  !*** /Users/gudepeng/git/chatApp/pages/tabbar/chat/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/gudepeng/git/chatApp/pages/tabbar/chat/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2NoYXQvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBOztBQUdBLEdBTEE7QUFNQSxRQU5BLG9CQU1BOztBQUVBLEdBUkE7QUFTQSxhQVRBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDExMTExXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAnSGVsbG8nXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRcclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** /Users/gudepeng/git/chatApp/App.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHNcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!********************************************************************!*\
  !*** /Users/gudepeng/git/chatApp/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/gudepeng/git/chatApp/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {var _this = this;\n    // 初始化录音管理器\n    this.$store.commit('initRECORD');\n    // 初始化登录状态\n    this.$store.dispatch('initLogin');\n    __f__(\"log\", 'App Launch', \" at App.vue:8\");\n    // 监听键盘高度变化\n    uni.onNetworkStatusChange(function (res) {\n      if (res.isConnected) {\n        _this.$store.dispatch('reconnect');\n      };\n    });\n  },\n  onShow: function onShow() {\n    this.$store.dispatch('location');\n    __f__(\"log\", 'App Show', \" at App.vue:18\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:21\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLEdBYkE7QUFjQTtBQUNBO0FBQ0E7QUFDQSxHQWpCQTtBQWtCQTtBQUNBO0FBQ0EsR0FwQkEsRSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyDliJ3lp4vljJblvZXpn7PnrqHnkIblmahcclxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdpbml0UkVDT1JEJylcclxuXHRcdFx0Ly8g5Yid5aeL5YyW55m75b2V54q25oCBXHJcblx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdpbml0TG9naW4nKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXHJcblx0XHRcdC8vIOebkeWQrOmUruebmOmrmOW6puWPmOWMllxyXG5cdFx0XHR1bmkub25OZXR3b3JrU3RhdHVzQ2hhbmdlKHJlcyA9PiB7XHJcblx0XHRcdFx0aWYocmVzLmlzQ29ubmVjdGVkKXtcclxuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdyZWNvbm5lY3QnKVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdsb2NhdGlvbicpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!**************************************************!*\
  !*** /Users/gudepeng/git/chatApp/store/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 8));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 14));\n\n\n\nvar _audio = _interopRequireDefault(__webpack_require__(/*! @/store/modules/audio.js */ 15));\nvar _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue.default.use(_vuex.default);var _default =\n\nnew _vuex.default.Store({\n  modules: {\n    audio: _audio.default,\n    user: _user.default } });exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsImF1ZGlvIiwidXNlciJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBLDJGLDZGQUhBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVIsRTs7QUFLZSxJQUFJQSxjQUFLQyxLQUFULENBQWU7QUFDN0JDLFNBQU8sRUFBQztBQUNQQyxTQUFLLEVBQUxBLGNBRE87QUFFUEMsUUFBSSxFQUFKQSxhQUZPLEVBRHFCLEVBQWYsQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuaW1wb3J0IGF1ZGlvIGZyb20gJ0Avc3RvcmUvbW9kdWxlcy9hdWRpby5qcyc7XHJcbmltcG9ydCB1c2VyIGZyb20gJ0Avc3RvcmUvbW9kdWxlcy91c2VyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRtb2R1bGVzOntcclxuXHRcdGF1ZGlvLFxyXG5cdFx0dXNlclxyXG5cdH1cclxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** /Users/gudepeng/git/chatApp/store/modules/audio.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  state: {\n    // 存放全局事件\n    events: [],\n    // 录音管理器\n    RECORD: null,\n    RecordTime: 0,\n    RECORDTIMER: null,\n    sendVoice: null },\n\n  mutations: {\n    // 初始化录音管理器\n    initRECORD: function initRECORD(state) {\n      state.RECORD = uni.getRecorderManager();\n      // 监听录音开始\n      state.RECORD.onStart(function () {\n        state.RecordTime = 0;\n        state.RECORDTIMER = setInterval(function () {\n          state.RecordTime++;\n        }, 1000);\n      });\n      // 监听录音结束\n      state.RECORD.onStop(function (e) {\n        if (state.RECORDTIMER) {\n          clearInterval(state.RECORDTIMER);\n          state.RECORDTIMER = null;\n        }\n        // 执行发送\n        if (typeof state.sendVoice === 'function') {\n          state.sendVoice(e.tempFilePath);\n        }\n      });\n    },\n    // 注册发送音频事件\n    regSendVoiceEvent: function regSendVoiceEvent(state, event) {\n      state.sendVoice = event;\n    },\n    // 注册全局事件\n    regEvent: function regEvent(state, event) {\n      state.events.push(event);\n    },\n    // 执行全局事件\n    doEvent: function doEvent(state, params) {\n      state.events.forEach(function (e) {\n        // console.log('执行全局事件');\n        e(params);\n      });\n    },\n    // 注销事件\n    removeEvent: function removeEvent(state, event) {\n      var index = state.events.findIndex(function (item) {\n        return item === event;\n      });\n      if (index !== -1) {\n        state.events.splice(index, 1);\n      }\n    } },\n\n  actions: {\n    // 分发注册全局事件\n    audioOn: function audioOn(_ref, event) {var commit = _ref.commit;\n      commit('regEvent', event);\n    },\n    // 分发执行全局事件\n    audioEmit: function audioEmit(_ref2, params) {var commit = _ref2.commit;\n      commit('doEvent', params);\n    },\n    // 分发注销全局事件\n    audioOff: function audioOff(_ref3, event) {var commit = _ref3.commit;\n      commit('removeEvent', event);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9hdWRpby5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImV2ZW50cyIsIlJFQ09SRCIsIlJlY29yZFRpbWUiLCJSRUNPUkRUSU1FUiIsInNlbmRWb2ljZSIsIm11dGF0aW9ucyIsImluaXRSRUNPUkQiLCJ1bmkiLCJnZXRSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJvblN0b3AiLCJlIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBGaWxlUGF0aCIsInJlZ1NlbmRWb2ljZUV2ZW50IiwiZXZlbnQiLCJyZWdFdmVudCIsInB1c2giLCJkb0V2ZW50IiwicGFyYW1zIiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiYWN0aW9ucyIsImF1ZGlvT24iLCJjb21taXQiLCJhdWRpb0VtaXQiLCJhdWRpb09mZiJdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2RBLE9BQUssRUFBQztBQUNMO0FBQ0FDLFVBQU0sRUFBQyxFQUZGO0FBR0w7QUFDQUMsVUFBTSxFQUFDLElBSkY7QUFLTEMsY0FBVSxFQUFDLENBTE47QUFNTEMsZUFBVyxFQUFDLElBTlA7QUFPTEMsYUFBUyxFQUFDLElBUEwsRUFEUTs7QUFVZEMsV0FBUyxFQUFDO0FBQ1Q7QUFDQUMsY0FGUyxzQkFFRVAsS0FGRixFQUVRO0FBQ2hCQSxXQUFLLENBQUNFLE1BQU4sR0FBZU0sR0FBRyxDQUFDQyxrQkFBSixFQUFmO0FBQ0E7QUFDQVQsV0FBSyxDQUFDRSxNQUFOLENBQWFRLE9BQWIsQ0FBcUIsWUFBSTtBQUN4QlYsYUFBSyxDQUFDRyxVQUFOLEdBQW1CLENBQW5CO0FBQ0FILGFBQUssQ0FBQ0ksV0FBTixHQUFvQk8sV0FBVyxDQUFDLFlBQUk7QUFDbkNYLGVBQUssQ0FBQ0csVUFBTjtBQUNBLFNBRjhCLEVBRTdCLElBRjZCLENBQS9CO0FBR0EsT0FMRDtBQU1BO0FBQ0FILFdBQUssQ0FBQ0UsTUFBTixDQUFhVSxNQUFiLENBQW9CLFVBQUNDLENBQUQsRUFBSztBQUN4QixZQUFJYixLQUFLLENBQUNJLFdBQVYsRUFBdUI7QUFDdEJVLHVCQUFhLENBQUNkLEtBQUssQ0FBQ0ksV0FBUCxDQUFiO0FBQ0FKLGVBQUssQ0FBQ0ksV0FBTixHQUFvQixJQUFwQjtBQUNBO0FBQ0Q7QUFDQSxZQUFJLE9BQU9KLEtBQUssQ0FBQ0ssU0FBYixLQUEyQixVQUEvQixFQUEyQztBQUMxQ0wsZUFBSyxDQUFDSyxTQUFOLENBQWdCUSxDQUFDLENBQUNFLFlBQWxCO0FBQ0E7QUFDRCxPQVREO0FBVUEsS0F0QlE7QUF1QlQ7QUFDQUMscUJBeEJTLDZCQXdCU2hCLEtBeEJULEVBd0JlaUIsS0F4QmYsRUF3QnFCO0FBQzdCakIsV0FBSyxDQUFDSyxTQUFOLEdBQWtCWSxLQUFsQjtBQUNBLEtBMUJRO0FBMkJUO0FBQ0FDLFlBNUJTLG9CQTRCQWxCLEtBNUJBLEVBNEJNaUIsS0E1Qk4sRUE0Qlk7QUFDcEJqQixXQUFLLENBQUNDLE1BQU4sQ0FBYWtCLElBQWIsQ0FBa0JGLEtBQWxCO0FBQ0EsS0E5QlE7QUErQlQ7QUFDQUcsV0FoQ1MsbUJBZ0NEcEIsS0FoQ0MsRUFnQ0txQixNQWhDTCxFQWdDWTtBQUNwQnJCLFdBQUssQ0FBQ0MsTUFBTixDQUFhcUIsT0FBYixDQUFxQixVQUFBVCxDQUFDLEVBQUU7QUFDdkI7QUFDQUEsU0FBQyxDQUFDUSxNQUFELENBQUQ7QUFDQSxPQUhEO0FBSUEsS0FyQ1E7QUFzQ1Q7QUFDQUUsZUF2Q1MsdUJBdUNHdkIsS0F2Q0gsRUF1Q1NpQixLQXZDVCxFQXVDZTtBQUN2QixVQUFJTyxLQUFLLEdBQUd4QixLQUFLLENBQUNDLE1BQU4sQ0FBYXdCLFNBQWIsQ0FBdUIsVUFBQUMsSUFBSSxFQUFJO0FBQzFDLGVBQU9BLElBQUksS0FBS1QsS0FBaEI7QUFDQSxPQUZXLENBQVo7QUFHQSxVQUFJTyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2pCeEIsYUFBSyxDQUFDQyxNQUFOLENBQWEwQixNQUFiLENBQW9CSCxLQUFwQixFQUEwQixDQUExQjtBQUNBO0FBQ0QsS0E5Q1EsRUFWSTs7QUEwRGRJLFNBQU8sRUFBQztBQUNQO0FBQ0FDLFdBRk8seUJBRVVaLEtBRlYsRUFFZ0IsS0FBZGEsTUFBYyxRQUFkQSxNQUFjO0FBQ3RCQSxZQUFNLENBQUMsVUFBRCxFQUFZYixLQUFaLENBQU47QUFDQSxLQUpNO0FBS1A7QUFDQWMsYUFOTyw0QkFNWVYsTUFOWixFQU1tQixLQUFmUyxNQUFlLFNBQWZBLE1BQWU7QUFDekJBLFlBQU0sQ0FBQyxTQUFELEVBQVdULE1BQVgsQ0FBTjtBQUNBLEtBUk07QUFTUDtBQUNBVyxZQVZPLDJCQVVXZixLQVZYLEVBVWlCLEtBQWRhLE1BQWMsU0FBZEEsTUFBYztBQUN2QkEsWUFBTSxDQUFDLGFBQUQsRUFBZWIsS0FBZixDQUFOO0FBQ0EsS0FaTSxFQTFETSxFIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0YXRlOntcclxuXHRcdC8vIOWtmOaUvuWFqOWxgOS6i+S7tlxyXG5cdFx0ZXZlbnRzOltdLFxyXG5cdFx0Ly8g5b2V6Z+z566h55CG5ZmoXHJcblx0XHRSRUNPUkQ6bnVsbCxcclxuXHRcdFJlY29yZFRpbWU6MCxcclxuXHRcdFJFQ09SRFRJTUVSOm51bGwsXHJcblx0XHRzZW5kVm9pY2U6bnVsbFxyXG5cdH0sXHJcblx0bXV0YXRpb25zOntcclxuXHRcdC8vIOWIneWni+WMluW9lemfs+euoeeQhuWZqFxyXG5cdFx0aW5pdFJFQ09SRChzdGF0ZSl7XHJcblx0XHRcdHN0YXRlLlJFQ09SRCA9IHVuaS5nZXRSZWNvcmRlck1hbmFnZXIoKVxyXG5cdFx0XHQvLyDnm5HlkKzlvZXpn7PlvIDlp4tcclxuXHRcdFx0c3RhdGUuUkVDT1JELm9uU3RhcnQoKCk9PntcclxuXHRcdFx0XHRzdGF0ZS5SZWNvcmRUaW1lID0gMFxyXG5cdFx0XHRcdHN0YXRlLlJFQ09SRFRJTUVSID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuXHRcdFx0XHRcdHN0YXRlLlJlY29yZFRpbWUrK1xyXG5cdFx0XHRcdH0sMTAwMClcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8g55uR5ZCs5b2V6Z+z57uT5p2fXHJcblx0XHRcdHN0YXRlLlJFQ09SRC5vblN0b3AoKGUpPT57XHJcblx0XHRcdFx0aWYgKHN0YXRlLlJFQ09SRFRJTUVSKSB7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHN0YXRlLlJFQ09SRFRJTUVSKVxyXG5cdFx0XHRcdFx0c3RhdGUuUkVDT1JEVElNRVIgPSBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOaJp+ihjOWPkemAgVxyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3RhdGUuc2VuZFZvaWNlID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRzdGF0ZS5zZW5kVm9pY2UoZS50ZW1wRmlsZVBhdGgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOazqOWGjOWPkemAgemfs+mikeS6i+S7tlxyXG5cdFx0cmVnU2VuZFZvaWNlRXZlbnQoc3RhdGUsZXZlbnQpe1xyXG5cdFx0XHRzdGF0ZS5zZW5kVm9pY2UgPSBldmVudFxyXG5cdFx0fSxcclxuXHRcdC8vIOazqOWGjOWFqOWxgOS6i+S7tlxyXG5cdFx0cmVnRXZlbnQoc3RhdGUsZXZlbnQpe1xyXG5cdFx0XHRzdGF0ZS5ldmVudHMucHVzaChldmVudClcclxuXHRcdH0sXHJcblx0XHQvLyDmiafooYzlhajlsYDkuovku7ZcclxuXHRcdGRvRXZlbnQoc3RhdGUscGFyYW1zKXtcclxuXHRcdFx0c3RhdGUuZXZlbnRzLmZvckVhY2goZT0+e1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfmiafooYzlhajlsYDkuovku7YnKTtcclxuXHRcdFx0XHRlKHBhcmFtcylcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDms6jplIDkuovku7ZcclxuXHRcdHJlbW92ZUV2ZW50KHN0YXRlLGV2ZW50KXtcclxuXHRcdFx0bGV0IGluZGV4ID0gc3RhdGUuZXZlbnRzLmZpbmRJbmRleChpdGVtID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gZXZlbnRcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy5zcGxpY2UoaW5kZXgsMSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0YWN0aW9uczp7XHJcblx0XHQvLyDliIblj5Hms6jlhozlhajlsYDkuovku7ZcclxuXHRcdGF1ZGlvT24oe2NvbW1pdH0sZXZlbnQpe1xyXG5cdFx0XHRjb21taXQoJ3JlZ0V2ZW50JyxldmVudClcclxuXHRcdH0sXHJcblx0XHQvLyDliIblj5HmiafooYzlhajlsYDkuovku7ZcclxuXHRcdGF1ZGlvRW1pdCh7Y29tbWl0fSxwYXJhbXMpe1xyXG5cdFx0XHRjb21taXQoJ2RvRXZlbnQnLHBhcmFtcylcclxuXHRcdH0sXHJcblx0XHQvLyDliIblj5Hms6jplIDlhajlsYDkuovku7ZcclxuXHRcdGF1ZGlvT2ZmKHtjb21taXR9LGV2ZW50KXtcclxuXHRcdFx0Y29tbWl0KCdyZW1vdmVFdmVudCcsZXZlbnQpXHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************!*\
  !*** /Users/gudepeng/git/chatApp/store/modules/user.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/common/js/request.js */ 17));\nvar _config = _interopRequireDefault(__webpack_require__(/*! @/common/js/config.js */ 18));\nvar _chat = _interopRequireDefault(__webpack_require__(/*! @/common/js/chat.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =\n{\n  state: {\n    user: false,\n\n    apply: {\n      rows: [],\n      count: 0 },\n\n\n    mailList: [],\n\n    chat: null,\n\n    // 会话列表\n    chatList: [],\n\n    // 总未读数\n    totalNoreadnum: 0,\n\n    notice: {\n      avatar: \"\",\n      user_id: 0,\n      num: 0 },\n\n    //纬度\n    latitude: '',\n    //经度\n    longitude: '' },\n\n  mutations: {\n    updateUser: function updateUser(state, _ref) {var k = _ref.k,v = _ref.v;\n      if (state.user) {\n        state.user[k] = v;\n        uni.setStorageSync('user', JSON.stringify(state.user));\n      }\n    } },\n\n  actions: {\n    // 登录后处理\n    login: function login(_ref2, res) {var state = _ref2.state,dispatch = _ref2.dispatch;\n      // 存到状态中\n      __f__(\"log\", res, \" at store/modules/user.js:46\");\n      state.user = res;\n      // 存储到本地存储中\n      uni.setStorageSync('token', res.token);\n      uni.setStorageSync('user', JSON.stringify(res));\n      // 获取好友申请列表\n      // dispatch('getApply')\n      // 连接socket\n      __f__(\"log\", 'new chat', \" at store/modules/user.js:54\");\n      state.chat = new _chat.default({\n        url: _config.default.socketUrl });\n\n      // 获取会话列表\n      // dispatch('getChatList')\n      // 初始化总未读数角标\n      // dispatch('updateBadge')\n      // 获取朋友圈动态通知\n      //dispatch('getNotice');\n    },\n    // 退出登录处理\n    logout: function logout(_ref3) {var state = _ref3.state;\n      // 清除登录状态\n      state.user = false;\n      // 清除本地存储数据\n      uni.removeStorageSync('token');\n      uni.removeStorageSync('user');\n      uni.removeStorageSync('user_id');\n      // 关闭socket连接\n      if (state.chat) {\n        state.chat.close();\n        state.chat = null;\n      }\n      // 跳转到登录页\n      uni.reLaunch({\n        url: \"/pages/common/login/login\" });\n\n      // 注销监听事件\n      uni.$off('onUpdateChatList');\n      uni.$off('momentNotice');\n      uni.$off('totalNoreadnum');\n    },\n    // 初始化登录状态\n    initLogin: function initLogin(_ref4) {var state = _ref4.state,dispatch = _ref4.dispatch;\n      // 拿到存储\n      var user = uni.getStorageSync('user');\n      if (user) {\n        // 初始化登录状态\n        state.user = JSON.parse(user);\n        // 连接socket\n        state.chat = new _chat.default({\n          url: _config.default.socketUrl });\n\n        // 获取会话列表\n        dispatch('getChatList');\n        // 获取离线信息\n        // 获取好友申请列表\n        // dispatch('getApply')\n        // 初始化总未读数角标\n        // dispatch('updateBadge')\n        // 获取朋友圈动态通知\n        // dispatch('getNotice');\n      }\n    },\n    // 获取好友申请列表\n    getApply: function getApply(_ref5) {var state = _ref5.state,dispatch = _ref5.dispatch;var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n      _request.default.post('/app/imapply/list?page=' + page, { friendId: state.user.id }).then(function (res) {\n        if (page === 1) {\n          state.apply.rows = res.page.list;\n          state.apply.count = res.count;\n        } else {\n          state.apply.rows = [].concat(_toConsumableArray(state.apply.rows), _toConsumableArray(res.page.list));\n          state.apply.count = res.count;\n        }\n        /* if(page === 1){\n          \tstate.apply.rows = res.page.list\n          \tstate.apply.count = res.page.totalCount\n          } else {\n          \tstate.apply.rows = [ ...state.apply.rows, ...res.page.list ]\n          \tstate.apply.count = res.page.totalCount\n          } */\n        // 更新通讯录角标提示\n        dispatch('updateMailBadge');\n\n      });\n      /* $H.get('/app/imapply/'+page).then(res=>{\n          \tconsole.log(res);\n          \tif(page === 1){\n          \t\tstate.apply = res\n          \t} else {\n          \t\tstate.apply.rows = [ ...state.apply.rows, ...res.rows ]\n          \t\tstate.apply.count = res.count\n          \t}\n          \t// 更新通讯录角标提示\n          \tdispatch('updateMailBadge')\n          }) */\n    },\n    // 更新通讯录角标提示\n    updateMailBadge: function updateMailBadge(_ref6) {var state = _ref6.state;\n      var count = state.apply.count > 99 ? '99+' : state.apply.count.toString();\n      if (state.apply.count > 0) {\n        return uni.setTabBarBadge({\n          index: 1,\n          text: count });\n\n      }\n      uni.removeTabBarBadge({\n        index: 1 });\n\n    },\n    // 获取通讯录列表\n    getMailList: function getMailList(_ref7) {var state = _ref7.state;\n      _request.default.get('/app/imfriend/list').then(function (res) {\n        if (res.code == 0) {\n          var list = [];\n          for (var key in res.data) {\n            var data = {\n              title: key,\n              list: res.data[key] };\n\n            __f__(\"log\", \"属性：\" + key + \",值：\" + res.data[key], \" at store/modules/user.js:165\");\n            list.push(data);\n          }\n          state.mailList = list ? list : [], __f__(\"log\",\n          list, \" at store/modules/user.js:169\");\n        }\n\n\n\n      });\n    },\n    // 获取会话列表\n    getChatList: function getChatList(_ref8) {var state = _ref8.state;\n      state.chatList = state.chat.getChatList();\n      // 监听会话列表变化\n      uni.$on('onUpdateChatList', function (list) {\n        state.chatList = list;\n      });\n    },\n    // 获取朋友圈动态通知\n    getNotice: function getNotice(_ref9) {var state = _ref9.state;\n      state.notice = state.chat.getNotice();\n      if (state.notice.num > 0) {\n        uni.setTabBarBadge({\n          index: 2,\n          text: state.notice.num > 99 ? '99+' : state.notice.num.toString() });\n\n      } else {\n        uni.removeTabBarBadge({\n          index: 2 });\n\n      }\n      uni.$on('momentNotice', function (notice) {\n        state.notice = notice;\n      });\n    },\n    // 初始化总未读数角标\n    updateBadge: function updateBadge(_ref10) {var state = _ref10.state;\n      // 开启监听总未读数变化\n      uni.$on('totalNoreadnum', function (num) {\n        state.totalNoreadnum = num;\n      });\n      state.chat.updateBadge();\n    },\n    // 断线自动重连\n    reconnect: function reconnect(_ref11) {var state = _ref11.state;\n      if (state.user && state.chat) {\n        state.chat.reconnect();\n      }\n    },\n    // 获取坐标\n    location: function location(_ref12) {var state = _ref12.state;\n      uni.getLocation({\n        type: 'wgs84',\n        success: function success(res) {\n          state.latitude = res.latitude;\n          state.longitude = res.longitude;\n          _request.default.post('/app/user/updateUser', { latitude: res.latitude, longitude: res.longitude, userId: state.user.id }).then(function (res) {\n            if (res.code == 0) {\n\n            }\n          });\n          __f__(\"log\", '当前位置的经度：' + res.longitude, \" at store/modules/user.js:227\");\n          __f__(\"log\", '当前位置的纬度：' + res.latitude, \" at store/modules/user.js:228\");\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy91c2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwidXNlciIsImFwcGx5Iiwicm93cyIsImNvdW50IiwibWFpbExpc3QiLCJjaGF0IiwiY2hhdExpc3QiLCJ0b3RhbE5vcmVhZG51bSIsIm5vdGljZSIsImF2YXRhciIsInVzZXJfaWQiLCJudW0iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm11dGF0aW9ucyIsInVwZGF0ZVVzZXIiLCJrIiwidiIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsImFjdGlvbnMiLCJsb2dpbiIsInJlcyIsImRpc3BhdGNoIiwidG9rZW4iLCJDaGF0IiwidXJsIiwiJEMiLCJzb2NrZXRVcmwiLCJsb2dvdXQiLCJyZW1vdmVTdG9yYWdlU3luYyIsImNsb3NlIiwicmVMYXVuY2giLCIkb2ZmIiwiaW5pdExvZ2luIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYXJzZSIsImdldEFwcGx5IiwicGFnZSIsIiRIIiwicG9zdCIsImZyaWVuZElkIiwiaWQiLCJ0aGVuIiwibGlzdCIsInVwZGF0ZU1haWxCYWRnZSIsInRvU3RyaW5nIiwic2V0VGFiQmFyQmFkZ2UiLCJpbmRleCIsInRleHQiLCJyZW1vdmVUYWJCYXJCYWRnZSIsImdldE1haWxMaXN0IiwiZ2V0IiwiY29kZSIsImtleSIsImRhdGEiLCJ0aXRsZSIsInB1c2giLCJnZXRDaGF0TGlzdCIsIiRvbiIsImdldE5vdGljZSIsInVwZGF0ZUJhZGdlIiwicmVjb25uZWN0IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJzdWNjZXNzIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBLHVGO0FBQ2U7QUFDZEEsT0FBSyxFQUFDO0FBQ0xDLFFBQUksRUFBQyxLQURBOztBQUdMQyxTQUFLLEVBQUM7QUFDTEMsVUFBSSxFQUFFLEVBREQ7QUFFTEMsV0FBSyxFQUFFLENBRkYsRUFIRDs7O0FBUUxD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LDZCQXdLVyxLQUFQakUsS0FBTyxVQUFQQSxLQUFPO0FBQ2pCLFVBQUdBLEtBQUssQ0FBQ0MsSUFBTixJQUFjRCxLQUFLLENBQUNNLElBQXZCLEVBQTRCO0FBQzNCTixhQUFLLENBQUNNLElBQU4sQ0FBVzJELFNBQVg7QUFDQTtBQUNELEtBNUtNO0FBNktQO0FBQ0FDLFlBOUtPLDRCQThLVSxLQUFQbEUsS0FBTyxVQUFQQSxLQUFPO0FBQ2hCbUIsU0FBRyxDQUFDZ0QsV0FBSixDQUFnQjtBQUNaQyxZQUFJLEVBQUUsT0FETTtBQUVaQyxlQUFPLEVBQUUsaUJBQVU1QyxHQUFWLEVBQWU7QUFDMUJ6QixlQUFLLENBQUNhLFFBQU4sR0FBaUJZLEdBQUcsQ0FBQ1osUUFBckI7QUFDQWIsZUFBSyxDQUFDYyxTQUFOLEdBQWtCVyxHQUFHLENBQUNYLFNBQXRCO0FBQ0E0QiwyQkFBR0MsSUFBSCxDQUFRLHNCQUFSLEVBQStCLEVBQUM5QixRQUFRLEVBQUNZLEdBQUcsQ0FBQ1osUUFBZCxFQUF1QkMsU0FBUyxFQUFDVyxHQUFHLENBQUNYLFNBQXJDLEVBQStDd0QsTUFBTSxFQUFDdEUsS0FBSyxDQUFDQyxJQUFOLENBQVc0QyxFQUFqRSxFQUEvQixFQUFxR0MsSUFBckcsQ0FBMEcsVUFBQXJCLEdBQUcsRUFBRTtBQUM5RyxnQkFBR0EsR0FBRyxDQUFDK0IsSUFBSixJQUFVLENBQWIsRUFBZTs7QUFFZDtBQUNELFdBSkQ7QUFLTSx1QkFBWSxhQUFhL0IsR0FBRyxDQUFDWCxTQUE3QjtBQUNBLHVCQUFZLGFBQWFXLEdBQUcsQ0FBQ1osUUFBN0I7QUFDSCxTQVpXLEVBQWhCOztBQWNBLEtBN0xNLEVBckNNLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAkSCBmcm9tICdAL2NvbW1vbi9qcy9yZXF1ZXN0LmpzJztcbmltcG9ydCAkQyBmcm9tICdAL2NvbW1vbi9qcy9jb25maWcuanMnO1xuaW1wb3J0IENoYXQgZnJvbSAnQC9jb21tb24vanMvY2hhdC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdHN0YXRlOntcblx0XHR1c2VyOmZhbHNlLFxuXHRcdFxuXHRcdGFwcGx5Ontcblx0XHRcdHJvd3M6IFtdLFxuXHRcdFx0Y291bnQ6IDBcblx0XHR9LFxuXHRcdFxuXHRcdG1haWxMaXN0OltdLFxuXHRcdFxuXHRcdGNoYXQ6bnVsbCxcblx0XHRcblx0XHQvLyDkvJror53liJfooahcblx0XHRjaGF0TGlzdDpbXSxcblx0XHRcblx0XHQvLyDmgLvmnKror7vmlbBcblx0XHR0b3RhbE5vcmVhZG51bTowLFxuXHRcdFxuXHRcdG5vdGljZTp7XG5cdFx0XHRhdmF0YXI6XCJcIixcblx0XHRcdHVzZXJfaWQ6MCxcblx0XHRcdG51bTowXG5cdFx0fSxcblx0XHQvL+e6rOW6plxuXHRcdGxhdGl0dWRlOicnLFxuXHRcdC8v57uP5bqmXG5cdFx0bG9uZ2l0dWRlOicnXG5cdH0sXG5cdG11dGF0aW9uczp7XG5cdFx0dXBkYXRlVXNlcihzdGF0ZSx7IGssdiB9KXtcblx0XHRcdGlmKHN0YXRlLnVzZXIpe1xuXHRcdFx0XHRzdGF0ZS51c2VyW2tdID0gdlxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXInLEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXIpKVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YWN0aW9uczp7XG5cdFx0Ly8g55m75b2V5ZCO5aSE55CGXG5cdFx0bG9naW4oeyBzdGF0ZSxkaXNwYXRjaCB9LHJlcyl7XG5cdFx0XHQvLyDlrZjliLDnirbmgIHkuK1cblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdHN0YXRlLnVzZXIgPSByZXNcblx0XHRcdC8vIOWtmOWCqOWIsOacrOWcsOWtmOWCqOS4rVxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0b2tlbicscmVzLnRva2VuKVxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VyJyxKU09OLnN0cmluZ2lmeShyZXMpKVxuXHRcdFx0Ly8g6I635Y+W5aW95Y+L55Sz6K+35YiX6KGoXG5cdFx0XHQvLyBkaXNwYXRjaCgnZ2V0QXBwbHknKVxuXHRcdFx0Ly8g6L+e5o6lc29ja2V0XG5cdFx0XHRjb25zb2xlLmxvZygnbmV3IGNoYXQnKVxuXHRcdFx0c3RhdGUuY2hhdCA9IG5ldyBDaGF0KHtcblx0XHRcdFx0dXJsOiRDLnNvY2tldFVybFxuXHRcdFx0fSlcblx0XHRcdC8vIOiOt+WPluS8muivneWIl+ihqFxuXHRcdFx0Ly8gZGlzcGF0Y2goJ2dldENoYXRMaXN0Jylcblx0XHRcdC8vIOWIneWni+WMluaAu+acquivu+aVsOinkuagh1xuXHRcdFx0Ly8gZGlzcGF0Y2goJ3VwZGF0ZUJhZGdlJylcblx0XHRcdC8vIOiOt+WPluaci+WPi+WciOWKqOaAgemAmuefpVxuXHRcdFx0Ly9kaXNwYXRjaCgnZ2V0Tm90aWNlJyk7XG5cdFx0fSxcblx0XHQvLyDpgIDlh7rnmbvlvZXlpITnkIZcblx0XHRsb2dvdXQoeyBzdGF0ZSB9KXtcblx0XHRcdC8vIOa4hemZpOeZu+W9leeKtuaAgVxuXHRcdFx0c3RhdGUudXNlciA9IGZhbHNlXG5cdFx0XHQvLyDmuIXpmaTmnKzlnLDlrZjlgqjmlbDmja5cblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKTtcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlcicpO1xuXHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VyX2lkJyk7XG5cdFx0XHQvLyDlhbPpl61zb2NrZXTov57mjqVcblx0XHRcdGlmKHN0YXRlLmNoYXQpe1xuXHRcdFx0XHRzdGF0ZS5jaGF0LmNsb3NlKClcblx0XHRcdFx0c3RhdGUuY2hhdCA9IG51bGxcblx0XHRcdH1cblx0XHRcdC8vIOi3s+i9rOWIsOeZu+W9lemhtVxuXHRcdFx0dW5pLnJlTGF1bmNoKHtcblx0XHRcdFx0dXJsOlwiL3BhZ2VzL2NvbW1vbi9sb2dpbi9sb2dpblwiXG5cdFx0XHR9KVxuXHRcdFx0Ly8g5rOo6ZSA55uR5ZCs5LqL5Lu2XG5cdFx0XHR1bmkuJG9mZignb25VcGRhdGVDaGF0TGlzdCcpXG5cdFx0XHR1bmkuJG9mZignbW9tZW50Tm90aWNlJylcblx0XHRcdHVuaS4kb2ZmKCd0b3RhbE5vcmVhZG51bScpXG5cdFx0fSxcblx0XHQvLyDliJ3lp4vljJbnmbvlvZXnirbmgIFcblx0XHRpbml0TG9naW4oeyBzdGF0ZSxkaXNwYXRjaCB9KXtcblx0XHRcdC8vIOaLv+WIsOWtmOWCqFxuXHRcdFx0bGV0IHVzZXIgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKVxuXHRcdFx0aWYodXNlcil7XG5cdFx0XHRcdC8vIOWIneWni+WMlueZu+W9leeKtuaAgVxuXHRcdFx0XHRzdGF0ZS51c2VyID0gSlNPTi5wYXJzZSh1c2VyKVxuXHRcdFx0XHQvLyDov57mjqVzb2NrZXRcblx0XHRcdFx0c3RhdGUuY2hhdCA9IG5ldyBDaGF0KHtcblx0XHRcdFx0XHR1cmw6JEMuc29ja2V0VXJsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIOiOt+WPluS8muivneWIl+ihqFxuXHRcdFx0XHRkaXNwYXRjaCgnZ2V0Q2hhdExpc3QnKVxuXHRcdFx0XHQvLyDojrflj5bnprvnur/kv6Hmga9cblx0XHRcdFx0Ly8g6I635Y+W5aW95Y+L55Sz6K+35YiX6KGoXG5cdFx0XHRcdC8vIGRpc3BhdGNoKCdnZXRBcHBseScpXG5cdFx0XHRcdC8vIOWIneWni+WMluaAu+acquivu+aVsOinkuagh1xuXHRcdFx0XHQvLyBkaXNwYXRjaCgndXBkYXRlQmFkZ2UnKVxuXHRcdFx0XHQvLyDojrflj5bmnIvlj4vlnIjliqjmgIHpgJrnn6Vcblx0XHRcdFx0Ly8gZGlzcGF0Y2goJ2dldE5vdGljZScpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g6I635Y+W5aW95Y+L55Sz6K+35YiX6KGoXG5cdFx0Z2V0QXBwbHkoe3N0YXRlLGRpc3BhdGNofSxwYWdlID0gMSl7XG5cdFx0XHQkSC5wb3N0KCcvYXBwL2ltYXBwbHkvbGlzdD9wYWdlPScrcGFnZSx7ZnJpZW5kSWQ6c3RhdGUudXNlci5pZH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdGlmKHBhZ2UgPT09IDEpe1xuXHRcdFx0XHRcdHN0YXRlLmFwcGx5LnJvd3MgPSByZXMucGFnZS5saXN0XG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkuY291bnQgPSByZXMuY291bnRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZS5hcHBseS5yb3dzID0gWyAuLi5zdGF0ZS5hcHBseS5yb3dzLCAuLi5yZXMucGFnZS5saXN0IF1cblx0XHRcdFx0XHRzdGF0ZS5hcHBseS5jb3VudCA9IHJlcy5jb3VudFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8qIGlmKHBhZ2UgPT09IDEpe1xuXHRcdFx0XHRcdHN0YXRlLmFwcGx5LnJvd3MgPSByZXMucGFnZS5saXN0XG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkuY291bnQgPSByZXMucGFnZS50b3RhbENvdW50XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkucm93cyA9IFsgLi4uc3RhdGUuYXBwbHkucm93cywgLi4ucmVzLnBhZ2UubGlzdCBdXG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkuY291bnQgPSByZXMucGFnZS50b3RhbENvdW50XG5cdFx0XHRcdH0gKi9cblx0XHRcdFx0Ly8g5pu05paw6YCa6K6v5b2V6KeS5qCH5o+Q56S6XG5cdFx0XHRcdGRpc3BhdGNoKCd1cGRhdGVNYWlsQmFkZ2UnKVxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0XHQvKiAkSC5nZXQoJy9hcHAvaW1hcHBseS8nK3BhZ2UpLnRoZW4ocmVzPT57XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdGlmKHBhZ2UgPT09IDEpe1xuXHRcdFx0XHRcdHN0YXRlLmFwcGx5ID0gcmVzXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdGUuYXBwbHkucm93cyA9IFsgLi4uc3RhdGUuYXBwbHkucm93cywgLi4ucmVzLnJvd3MgXVxuXHRcdFx0XHRcdHN0YXRlLmFwcGx5LmNvdW50ID0gcmVzLmNvdW50XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8g5pu05paw6YCa6K6v5b2V6KeS5qCH5o+Q56S6XG5cdFx0XHRcdGRpc3BhdGNoKCd1cGRhdGVNYWlsQmFkZ2UnKVxuXHRcdFx0fSkgKi9cblx0XHR9LFxuXHRcdC8vIOabtOaWsOmAmuiur+W9leinkuagh+aPkOekulxuXHRcdHVwZGF0ZU1haWxCYWRnZSh7IHN0YXRlIH0pe1xuXHRcdFx0bGV0IGNvdW50ID0gc3RhdGUuYXBwbHkuY291bnQgPiA5OSA/ICc5OSsnIDogc3RhdGUuYXBwbHkuY291bnQudG9TdHJpbmcoKVxuXHRcdFx0aWYoc3RhdGUuYXBwbHkuY291bnQgPiAwKXtcblx0XHRcdFx0cmV0dXJuIHVuaS5zZXRUYWJCYXJCYWRnZSh7XG5cdFx0XHRcdFx0aW5kZXg6MSxcblx0XHRcdFx0XHR0ZXh0OmNvdW50XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHR1bmkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRpbmRleDoxXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g6I635Y+W6YCa6K6v5b2V5YiX6KGoXG5cdFx0Z2V0TWFpbExpc3QoeyBzdGF0ZSB9KXtcblx0XHRcdCRILmdldCgnL2FwcC9pbWZyaWVuZC9saXN0JykudGhlbihyZXM9Pntcblx0XHRcdFx0aWYocmVzLmNvZGU9PTApe1xuXHRcdFx0XHRcdGxldCBsaXN0ID0gW11cblx0XHRcdFx0XHRmb3IodmFyIGtleSBpbiByZXMuZGF0YSl7XG5cdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICBrZXksXG5cdFx0XHRcdFx0XHRcdGxpc3Q6IHJlcy5kYXRhW2tleV1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKFwi5bGe5oCn77yaXCIgKyBrZXkgKyBcIizlgLzvvJpcIiArICByZXMuZGF0YVtrZXldKTtcblx0XHRcdFx0XHQgIGxpc3QucHVzaChkYXRhKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdGF0ZS5tYWlsTGlzdCA9IGxpc3QgPyBsaXN0IDogW10sXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobGlzdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDojrflj5bkvJror53liJfooahcblx0XHRnZXRDaGF0TGlzdCh7IHN0YXRlIH0pe1xuXHRcdFx0c3RhdGUuY2hhdExpc3QgPSBzdGF0ZS5jaGF0LmdldENoYXRMaXN0KClcblx0XHRcdC8vIOebkeWQrOS8muivneWIl+ihqOWPmOWMllxuXHRcdFx0dW5pLiRvbignb25VcGRhdGVDaGF0TGlzdCcsKGxpc3QpPT57XG5cdFx0XHRcdHN0YXRlLmNoYXRMaXN0ID0gbGlzdFxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiOt+WPluaci+WPi+WciOWKqOaAgemAmuefpVxuXHRcdGdldE5vdGljZSh7IHN0YXRlIH0pe1xuXHRcdFx0c3RhdGUubm90aWNlID0gc3RhdGUuY2hhdC5nZXROb3RpY2UoKVxuXHRcdFx0aWYoc3RhdGUubm90aWNlLm51bSA+IDApe1xuXHRcdFx0XHR1bmkuc2V0VGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRcdGluZGV4OjIsXG5cdFx0XHRcdFx0dGV4dDpzdGF0ZS5ub3RpY2UubnVtID4gOTkgPyAnOTkrJyA6IHN0YXRlLm5vdGljZS5udW0udG9TdHJpbmcoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dW5pLnJlbW92ZVRhYkJhckJhZGdlKHtcblx0XHRcdFx0XHRpbmRleDoyXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHR1bmkuJG9uKCdtb21lbnROb3RpY2UnLChub3RpY2UpPT57XG5cdFx0XHRcdHN0YXRlLm5vdGljZSA9IG5vdGljZVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWIneWni+WMluaAu+acquivu+aVsOinkuagh1xuXHRcdHVwZGF0ZUJhZGdlKHtzdGF0ZX0pe1xuXHRcdFx0Ly8g5byA5ZCv55uR5ZCs5oC75pyq6K+75pWw5Y+Y5YyWXG5cdFx0XHR1bmkuJG9uKCd0b3RhbE5vcmVhZG51bScsKG51bSk9Pntcblx0XHRcdFx0c3RhdGUudG90YWxOb3JlYWRudW0gPSBudW1cblx0XHRcdH0pXG5cdFx0XHRzdGF0ZS5jaGF0LnVwZGF0ZUJhZGdlKClcblx0XHR9LFxuXHRcdC8vIOaWree6v+iHquWKqOmHjei/nlxuXHRcdHJlY29ubmVjdCh7c3RhdGV9KXtcblx0XHRcdGlmKHN0YXRlLnVzZXIgJiYgc3RhdGUuY2hhdCl7XG5cdFx0XHRcdHN0YXRlLmNoYXQucmVjb25uZWN0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOiOt+WPluWdkOagh1xuXHRcdGxvY2F0aW9uKHtzdGF0ZX0pe1xuXHRcdFx0dW5pLmdldExvY2F0aW9uKHtcblx0XHRcdCAgICB0eXBlOiAnd2dzODQnLFxuXHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRzdGF0ZS5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZVxuXHRcdFx0XHRcdHN0YXRlLmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGVcblx0XHRcdFx0XHQkSC5wb3N0KCcvYXBwL3VzZXIvdXBkYXRlVXNlcicse2xhdGl0dWRlOnJlcy5sYXRpdHVkZSxsb25naXR1ZGU6cmVzLmxvbmdpdHVkZSx1c2VySWQ6c3RhdGUudXNlci5pZH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0XHRpZihyZXMuY29kZT09MCl7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3kvY3nva7nmoTnu4/luqbvvJonICsgcmVzLmxvbmdpdHVkZSk7XG5cdFx0XHQgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3kvY3nva7nmoTnuqzluqbvvJonICsgcmVzLmxhdGl0dWRlKTtcblx0XHRcdCAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** /Users/gudepeng/git/chatApp/common/js/request.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 18));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  // 全局配置\n  common: {\n    baseUrl: _config.default.baseUrl,\n    header: {\n      'Content-Type': 'application/json;charset=UTF-8' },\n\n    data: {},\n    method: 'GET',\n    dataType: 'json',\n    token: true },\n\n  // 请求 返回promise\n  request: function request() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // 组织参数\n    options.url = this.common.baseUrl + options.url;\n    options.header = options.header || this.common.header;\n    options.data = options.data || this.common.data;\n    options.method = options.method || this.common.method;\n    options.dataType = options.dataType || this.common.dataType;\n    options.token = options.token === false ? false : this.common.token;\n\n    // 请求之前验证...\n    // token验证\n    if (options.token) {\n      var token = uni.getStorageSync('token');\n      // 二次验证\n      if (!token) {\n        uni.showToast({ title: '请先登录', icon: 'none' });\n        // token不存在时跳转\n        return uni.reLaunch({\n          url: '/pages/login/login' });\n\n      }\n      // 往header头中添加token\n      options.header.token = token;\n    }\n\n    // 请求\n    return new Promise(function (res, rej) {\n      // 请求中...\n      uni.request(_objectSpread({},\n      options, {\n        success: function success(result) {\n          __f__(\"log\", result, \" at common/js/request.js:47\");\n          // 返回原始数据\n          if (options.native) {\n            return res(result);\n          }\n          // 服务端失败\n          if (result.statusCode !== 200) {\n            if (options.toast !== false) {\n              uni.showToast({\n                title: result.data.data || '服务端失败',\n                icon: 'none' });\n\n            }\n            // token不合法，直接退出登录\n            if (result.data.data === 'Token 令牌不合法!') {\n              _index.default.dispatch('logout');\n            }\n            return rej(result.data);\n          }\n          // 其他验证...\n          if (result.data.code != 1) {\n            if (result.data.msg != '') {\n              uni.showToast({\n                title: result.data.msg,\n                icon: 'none' });\n\n            }\n            return rej(result.data);\n          }\n          // 成功\n          var data = result.data;\n          res(data.data);\n        },\n        fail: function fail(error) {\n          uni.showToast({ title: error.errMsg || '请求失败', icon: 'none' });\n          return rej(error);\n        } }));\n\n    });\n  },\n  // get请求\n  get: function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'GET';\n    return this.request(options);\n  },\n  // post请求\n  post: function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'POST';\n    return this.request(options);\n  },\n  // delete请求\n  del: function del(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    options.url = url;\n    options.data = data;\n    options.method = 'DELETE';\n    return this.request(options);\n  },\n  // 上传文件\n  upload: function upload(url, data) {var _this = this;var onProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    return new Promise(function (result, reject) {\n      // 上传\n      var token = uni.getStorageSync('token');\n      if (!token) {\n        uni.showToast({ title: '请先登录', icon: 'none' });\n        // token不存在时跳转\n        return uni.reLaunch({\n          url: '/pages/common/login/login' });\n\n      }\n\n      var uploadTask = uni.uploadFile({\n        url: _this.common.baseUrl + url,\n        filePath: data.filePath,\n        name: data.name || \"files\",\n        header: { token: token },\n        success: function success(res) {\n          __f__(\"log\", res, \" at common/js/request.js:127\");\n          if (res.statusCode !== 200) {\n            result(false);\n            return uni.showToast({\n              title: '上传失败',\n              icon: 'none' });\n\n          }\n          var message = JSON.parse(res.data);\n          result(message.url);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at common/js/request.js:139\");\n          reject(err);\n        } });\n\n\n      uploadTask.onProgressUpdate(function (res) {\n        if (typeof onProgress === 'function') {\n          onProgress(res.progress);\n        }\n      });\n\n    });\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiY29tbW9uIiwiYmFzZVVybCIsIiRDIiwiaGVhZGVyIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwidG9rZW4iLCJyZXF1ZXN0Iiwib3B0aW9ucyIsInVybCIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwicmVMYXVuY2giLCJQcm9taXNlIiwicmVzIiwicmVqIiwic3VjY2VzcyIsInJlc3VsdCIsIm5hdGl2ZSIsInN0YXR1c0NvZGUiLCJ0b2FzdCIsIiRzdG9yZSIsImRpc3BhdGNoIiwiY29kZSIsIm1zZyIsImZhaWwiLCJlcnJvciIsImVyck1zZyIsImdldCIsInBvc3QiLCJkZWwiLCJ1cGxvYWQiLCJvblByb2dyZXNzIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwib25Qcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzIl0sIm1hcHBpbmdzIjoib0lBQUE7QUFDQSxxRjtBQUNlO0FBQ1g7QUFDQUEsUUFBTSxFQUFDO0FBQ0hDLFdBQU8sRUFBQ0MsZ0JBQUdELE9BRFI7QUFFSEUsVUFBTSxFQUFDO0FBQ0gsc0JBQWUsZ0NBRFosRUFGSjs7QUFLSEMsUUFBSSxFQUFDLEVBTEY7QUFNSEMsVUFBTSxFQUFDLEtBTko7QUFPSEMsWUFBUSxFQUFDLE1BUE47QUFRSEMsU0FBSyxFQUFDLElBUkgsRUFGSTs7QUFZWDtBQUNBQyxTQWJXLHFCQWFVLEtBQWJDLE9BQWEsdUVBQUgsRUFBRztBQUNqQjtBQUNBQSxXQUFPLENBQUNDLEdBQVIsR0FBYyxLQUFLVixNQUFMLENBQVlDLE9BQVosR0FBc0JRLE9BQU8sQ0FBQ0MsR0FBNUM7QUFDQUQsV0FBTyxDQUFDTixNQUFSLEdBQWlCTSxPQUFPLENBQUNOLE1BQVIsSUFBa0IsS0FBS0gsTUFB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QUFDQSxTQXBCZ0MsRUFBZixDQUFuQjs7O0FBdUJBUCxnQkFBVSxDQUFDUSxnQkFBWCxDQUE0QixVQUFDNUIsR0FBRCxFQUFTO0FBQ3BDLFlBQUcsT0FBT2tCLFVBQVAsS0FBc0IsVUFBekIsRUFBb0M7QUFDbkNBLG9CQUFVLENBQUNsQixHQUFHLENBQUM2QixRQUFMLENBQVY7QUFDQTtBQUNELE9BSkQ7O0FBTUEsS0F4Q00sQ0FBUDtBQXlDQSxHQXBKYSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRDIGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCAkc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8g5YWo5bGA6YWN572uXG4gICAgY29tbW9uOntcbiAgICAgICAgYmFzZVVybDokQy5iYXNlVXJsLFxuICAgICAgICBoZWFkZXI6e1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6e30sXG4gICAgICAgIG1ldGhvZDonR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6J2pzb24nLFxuICAgICAgICB0b2tlbjp0cnVlXG4gICAgfSxcbiAgICAvLyDor7fmsYIg6L+U5ZuecHJvbWlzZVxuICAgIHJlcXVlc3Qob3B0aW9ucyA9IHt9KXtcbiAgICAgICAgLy8g57uE57uH5Y+C5pWwXG4gICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5jb21tb24uYmFzZVVybCArIG9wdGlvbnMudXJsXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyID0gb3B0aW9ucy5oZWFkZXIgfHwgdGhpcy5jb21tb24uaGVhZGVyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB0aGlzLmNvbW1vbi5kYXRhXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGhpcy5jb21tb24ubWV0aG9kXG4gICAgICAgIG9wdGlvbnMuZGF0YVR5cGUgPSBvcHRpb25zLmRhdGFUeXBlIHx8IHRoaXMuY29tbW9uLmRhdGFUeXBlXG4gICAgICAgIG9wdGlvbnMudG9rZW4gPSBvcHRpb25zLnRva2VuID09PSBmYWxzZSA/ICBmYWxzZSA6IHRoaXMuY29tbW9uLnRva2VuXG5cbiAgICAgICAgLy8g6K+35rGC5LmL5YmN6aqM6K+BLi4uXG4gICAgICAgIC8vIHRva2Vu6aqM6K+BXG4gICAgICAgIGlmIChvcHRpb25zLnRva2VuKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgICAgICAgICAgIC8vIOS6jOasoemqjOivgVxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+WFiOeZu+W9lScsIGljb246ICdub25lJyB9KTtcbiAgICAgICAgICAgICAgICAvLyB0b2tlbuS4jeWtmOWcqOaXtui3s+i9rFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmkucmVMYXVuY2goe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5b6AaGVhZGVy5aS05Lit5re75YqgdG9rZW5cbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyLnRva2VuID0gdG9rZW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOivt+axglxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57XG4gICAgICAgICAgICAvLyDor7fmsYLkuK0uLi5cbiAgICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDov5Tlm57ljp/lp4vmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5uYXRpdmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcyhyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5pyN5Yqh56uv5aSx6LSlXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9hc3QgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQuZGF0YS5kYXRhIHx8ICfmnI3liqHnq6/lpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdC8vIHRva2Vu5LiN5ZCI5rOV77yM55u05o6l6YCA5Ye655m75b2VXG5cdFx0XHRcdFx0XHRpZihyZXN1bHQuZGF0YS5kYXRhID09PSAnVG9rZW4g5Luk54mM5LiN5ZCI5rOVIScpe1xuXHRcdFx0XHRcdFx0XHQkc3RvcmUuZGlzcGF0Y2goJ2xvZ291dCcpXG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqKHJlc3VsdC5kYXRhKSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlhbbku5bpqozor4EuLi5cblx0XHRcdFx0XHRpZihyZXN1bHQuZGF0YS5jb2RlIT0xKXtcblx0XHRcdFx0XHRcdGlmKHJlc3VsdC5kYXRhLm1zZyE9Jycpe1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZWoocmVzdWx0LmRhdGEpXG5cdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICAvLyDmiJDlip9cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YVxuICAgICAgICAgICAgICAgICAgICByZXMoZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3QoeyB0aXRsZTogZXJyb3IuZXJyTXNnIHx8ICfor7fmsYLlpLHotKUnLCBpY29uOiAnbm9uZScgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWooZXJyb3IpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyBnZXTor7fmsYJcbiAgICBnZXQodXJsLGRhdGEgPSB7fSxvcHRpb25zID0ge30pe1xuICAgICAgICBvcHRpb25zLnVybCA9IHVybFxuICAgICAgICBvcHRpb25zLmRhdGEgPSBkYXRhXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCdcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKVxuICAgIH0sXG4gICAgLy8gcG9zdOivt+axglxuICAgIHBvc3QodXJsLGRhdGEgPSB7fSxvcHRpb25zID0ge30pe1xuICAgICAgICBvcHRpb25zLnVybCA9IHVybFxuICAgICAgICBvcHRpb25zLmRhdGEgPSBkYXRhXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucylcbiAgICB9LFxuICAgIC8vIGRlbGV0Zeivt+axglxuICAgIGRlbCh1cmwsZGF0YSA9IHt9LG9wdGlvbnMgPSB7fSl7XG4gICAgICAgIG9wdGlvbnMudXJsID0gdXJsXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IGRhdGFcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJ1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgfSxcblx0Ly8g5LiK5Lyg5paH5Lu2XG5cdHVwbG9hZCh1cmwsZGF0YSxvblByb2dyZXNzID0gZmFsc2Upe1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzdWx0LHJlamVjdCk9Pntcblx0XHRcdC8vIOS4iuS8oFxuXHRcdFx0bGV0IHRva2VuID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXG5cdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHQgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35YWI55m75b2VJywgaWNvbjogJ25vbmUnIH0pO1xuXHRcdFx0ICAgIC8vIHRva2Vu5LiN5a2Y5Zyo5pe26Lez6L2sXG5cdFx0XHQgICAgcmV0dXJuIHVuaS5yZUxhdW5jaCh7XG5cdFx0XHQgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vbG9naW4vbG9naW4nLFxuXHRcdFx0ICAgIH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCB1cGxvYWRUYXNrID0gdW5pLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHR1cmw6dGhpcy5jb21tb24uYmFzZVVybCArIHVybCxcblx0XHRcdFx0ZmlsZVBhdGg6ZGF0YS5maWxlUGF0aCxcblx0XHRcdFx0bmFtZTpkYXRhLm5hbWUgfHwgXCJmaWxlc1wiLFxuXHRcdFx0XHRoZWFkZXI6eyB0b2tlbiB9LFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRcdGlmKHJlcy5zdGF0dXNDb2RlICE9PSAyMDApe1xuXHRcdFx0XHRcdFx0cmVzdWx0KGZhbHNlKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S4iuS8oOWksei0pScsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcblx0XHRcdFx0XHRyZXN1bHQobWVzc2FnZS51cmwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0XG5cdFx0XHR1cGxvYWRUYXNrLm9uUHJvZ3Jlc3NVcGRhdGUoKHJlcykgPT4ge1xuXHRcdFx0XHRpZih0eXBlb2Ygb25Qcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0b25Qcm9ncmVzcyhyZXMucHJvZ3Jlc3MpXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0fSlcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************!*\
  !*** /Users/gudepeng/git/chatApp/common/js/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n\n  baseUrl: \"http://192.168.31.206:8080\",\n\n  socketUrl: \"ws://192.168.31.206:8000/ws\" };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwic29ja2V0VXJsIl0sIm1hcHBpbmdzIjoic0dBQWU7O0FBRWRBLFNBQU8sRUFBQyw0QkFGTTs7QUFJWEMsV0FBUyxFQUFDLDZCQUpDLEUiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cblx0YmFzZVVybDpcImh0dHA6Ly8xOTIuMTY4LjMxLjIwNjo4MDgwXCIsXG5cdFxuICAgIHNvY2tldFVybDpcIndzOi8vMTkyLjE2OC4zMS4yMDY6ODAwMC93c1wiXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************************************!*\
  !*** /Users/gudepeng/git/chatApp/common/js/chat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 20));var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 17));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var\nchat = /*#__PURE__*/function () {\n  function chat(arg) {_classCallCheck(this, chat);\n    this.timer = null;\n    this.url = arg.url;\n    this.isOnline = false;\n    this.socket = null;\n    this.reconnectTime = 0;\n    this.isOpenReconnect = true;\n    // 获取当前用户相关信息\n    var user = uni.getStorageSync('user');\n    __f__(\"log\", user, \" at common/js/chat.js:13\");\n    this.user = user ? JSON.parse(user) : {},\n    // 初始化聊天对象\n    this.TO = false;\n\n    // 连接和监听\n    if (this.user.token) {\n      this.connectSocket();\n    }\n  }\n  // 断线重连\n  _createClass(chat, [{ key: \"reconnect\", value: function reconnect() {\n      __f__(\"log\", this.isOnline, \" at common/js/chat.js:25\");\n      if (this.isOnline) {\n        return;\n      }\n      if (this.reconnectTime >= 3) {\n        return this.reconnectConfirm();\n      }\n      this.reconnectTime += 1;\n      this.connectSocket();\n    }\n    // 连接socket\n  }, { key: \"connectSocket\", value: function connectSocket() {var _this = this;\n      __f__(\"log\", 'connectSocket', \" at common/js/chat.js:37\");\n      this.socket = uni.connectSocket({\n        url: this.url,\n        complete: function complete() {} });\n\n      // 监听连接成功\n      this.socket.onOpen(function () {return _this.onOpen();});\n      // 监听接收信息\n      this.socket.onMessage(function (res) {return _this.onMessage(res);});\n      // 监听断开\n      this.socket.onClose(function () {return _this.onClose();});\n      // 监听错误\n      this.socket.onError(function () {return _this.onError();});\n    } }, { key: \"sendMessage\", value: function sendMessage(\n    message) {\n      this.socket.send({\n        data: message,\n        success: function success() {\n          __f__(\"log\", 'success', \" at common/js/chat.js:55\");\n        },\n        fail: function fail() {\n          __f__(\"log\", 'fail', \" at common/js/chat.js:58\");\n        } });\n\n    }\n    // 监听打开\n  }, { key: \"onOpen\", value: function onOpen() {var _this2 = this;\n      __f__(\"log\", 123, \" at common/js/chat.js:64\");\n      this.sendMessage(JSON.stringify({ type: 0, data: { id: 1, token: 111 } }));\n      // 用户上线\n      this.isOnline = true;\n      __f__(\"log\", 'socket连接成功', \" at common/js/chat.js:68\");\n      this.isOpenReconnect = true;\n      //心跳\n      this.timer = setInterval(function () {\n        if (_this2.socket != null) {\n          _this2.socket.send({\n            data: JSON.stringify({ type: 2, data: {} }),\n            success: function success() {\n              __f__(\"log\", '心跳发送成功success', \" at common/js/chat.js:76\");\n            },\n            fail: function fail() {\n              __f__(\"log\", '心跳发送失败fail', \" at common/js/chat.js:79\");\n            } });\n\n        }\n      }, 15000);\n    }\n\n    // 监听关闭\n  }, { key: \"onClose\", value: function onClose() {\n      // 用户下线\n      this.isOnline = false;\n      this.socket = null;\n      if (this.isOpenReconnect) {\n        this.reconnect();\n      }\n      __f__(\"log\", 'socket连接关闭', \" at common/js/chat.js:94\");\n      clearInterval(this.timer);\n    }\n    // 监听连接错误\n  }, { key: \"onError\", value: function onError() {\n      clearInterval(this.timer);\n      // 用户下线\n      this.isOnline = false;\n      this.socket = null;\n      __f__(\"log\", 'socket连接错误', \" at common/js/chat.js:103\");\n    }\n    // 监听接收消息\n  }, { key: \"onMessage\", value: function onMessage(data) {\n      var res = JSON.parse(data.data);\n      //心跳\n      if (res.code == 0) {\n        return;\n      }\n      __f__(\"log\", '监听接收消息', res, \" at common/js/chat.js:112\");\n      // 错误\n      switch (res.msg) {\n        case 'fail':\n          return uni.showToast({\n            title: res.data,\n            icon: 'none' });\n\n          break;\n        case 'recall': // 撤回消息\n          //撤回  自己发的  return\n          if (res.code == 2) {\n            if (res.message.from_id == this.user.userId) {\n              return;\n            }\n          }\n          this.handleOnRecall(res.message);\n          break;\n        case 'updateApplyList': // 新的好友申请\n          __f__(\"log\", 'updateApplyList', \" at common/js/chat.js:131\");\n          _index.default.dispatch('getApply');\n          break;\n        case 'moment': // 朋友圈更新\n          this.handleMoment(res.message);\n          break;\n        default:\n          //群聊  自己发的  return\n          if (res.code == 2) {\n            if (res.message.type == 'system') {\n\n            } else {\n              if (res.message.from_id == this.user.userId) {\n                return;\n              }\n            }\n          }\n          // 处理消息\n          this.handleOnMessage(res.message);\n          break;}\n\n    }\n    // 获取本地存储中的朋友圈动态通知\n  }, { key: \"getNotice\", value: function getNotice() {\n      var notice = uni.getStorageSync('moment_' + this.user.id);\n      return notice ? JSON.parse(notice) : {\n        avatar: \"\",\n        user_id: 0,\n        num: 0 };\n\n    }\n    // 处理朋友圈通知\n  }, { key: \"handleMoment\", value: function () {var _handleMoment = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(message) {var notice;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                notice = this.getNotice();_context.t0 =\n                message.type;_context.next = _context.t0 ===\n                'new' ? 4 : 6;break;case 4:\n                if (message.user_id !== this.user.id) {\n                  notice.avatar = message.avatar;\n                  notice.user_id = message.user_id;\n                  uni.showTabBarRedDot({\n                    index: 2 });\n\n                }return _context.abrupt(\"break\", 9);case 6:\n\n\n                if (message.user_id !== this.user.id) {\n                  notice.avatar = message.avatar;\n                  notice.user_id = message.user_id;\n                  notice.num += 1;\n                }\n                if (notice.num > 0) {\n                  uni.setTabBarBadge({\n                    index: 2,\n                    text: notice.num > 99 ? '99+' : notice.num.toString() });\n\n                } else {\n                  uni.removeTabBarBadge({\n                    index: 2 });\n\n                }return _context.abrupt(\"break\", 9);case 9:\n\n\n                uni.$emit('momentNotice', notice);\n                uni.setStorageSync('moment_' + this.user.id, JSON.stringify(notice));case 11:case \"end\":return _context.stop();}}}, _callee, this);}));function handleMoment(_x) {return _handleMoment.apply(this, arguments);}return handleMoment;}()\n\n    // 读取朋友圈动态\n  }, { key: \"readMoments\", value: function () {var _readMoments = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var notice;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                notice = {\n                  avatar: \"\",\n                  user_id: 0,\n                  num: 0 };\n\n                uni.setStorageSync('moment_' + this.user.id, JSON.stringify(notice));\n                uni.hideTabBarRedDot({\n                  index: 2 });\n\n                uni.removeTabBarBadge({\n                  index: 2 });\n\n                uni.$emit('momentNotice', notice);case 5:case \"end\":return _context2.stop();}}}, _callee2, this);}));function readMoments() {return _readMoments.apply(this, arguments);}return readMoments;}()\n\n    // 监听撤回消息处理\n  }, { key: \"handleOnRecall\", value: function () {var _handleOnRecall = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(message) {var id, key, list, index;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                // 通知聊天页撤回消息\n                uni.$emit('onMessage', _objectSpread({},\n                message, {\n                  isremove: 1 }));\n\n                // 修改聊天记录\n                id = message.chat_type === 'group' ? message.to_id : message.from_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.id === message.id;});if (!(\n                index === -1)) {_context3.next = 7;break;}return _context3.abrupt(\"return\");case 7:\n                list[index].isremove = 1;\n                // 存储\n                this.setStorage(key, list);\n                // 当前会话最后一条消息的显示\n                this.updateChatItem({\n                  id: id,\n                  chat_type: message.chat_type },\n                function (item) {\n                  item.data = '对方撤回了一条消息';\n                  item.update_time = new Date().getTime();\n                  return item;\n                });case 10:case \"end\":return _context3.stop();}}}, _callee3, this);}));function handleOnRecall(_x2) {return _handleOnRecall.apply(this, arguments);}return handleOnRecall;}()\n\n    // 处理消息\n  }, { key: \"handleOnMessage\", value: function () {var _handleOnMessage = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(message) {var _this$addChatDetail, data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                // 添加消息记录到本地存储中\n                _this$addChatDetail = this.addChatDetail(message, false), data = _this$addChatDetail.data;\n                // 更新会话列表\n                this.updateChatList(data, false);\n                // 全局通知\n                uni.$emit('onMessage', data);case 3:case \"end\":return _context4.stop();}}}, _callee4, this);}));function handleOnMessage(_x3) {return _handleOnMessage.apply(this, arguments);}return handleOnMessage;}()\n\n    // 关闭连接\n  }, { key: \"close\", value: function close() {\n      if (this.socket) {\n        this.socket.close();\n      }\n      this.isOpenReconnect = false;\n    }\n    // 创建聊天对象\n  }, { key: \"createChatObject\", value: function createChatObject(detail) {\n      this.TO = detail;\n      __f__(\"log\", '创建聊天对象', this.TO, \" at common/js/chat.js:260\");\n    }\n    // 销毁聊天对象\n  }, { key: \"destoryChatObject\", value: function destoryChatObject() {\n      this.TO = false;\n      __f__(\"log\", '销毁聊天对象', \" at common/js/chat.js:265\");\n    }\n    // 断线重连提示\n  }, { key: \"reconnectConfirm\", value: function reconnectConfirm() {\n      this.connectSocket();\n      this.reconnectTime = 0;\n      /* uni.showModal({\n                              \tcontent: '你已经断线，是否重新连接？',\n                              \tconfirmText:\"重新连接\",\n                              \tsuccess:(res)=> {\n                              \t\tif (res.confirm) {\n                              \t\t\tthis.connectSocket()\n                              \t\t}\n                              \t}\n                              }); */\n    }\n    // 验证是否上线\n  }, { key: \"checkOnline\", value: function checkOnline() {\n      if (!this.isOnline) {\n        // 断线重连提示\n        this.reconnectConfirm();\n        return false;\n      }\n      return true;\n    }\n    // 组织发送信息格式\n  }, { key: \"formatSendData\", value: function formatSendData(params) {\n      return {\n        id: 0, // 唯一id，后端生成，用于撤回指定消息\n        from_avatar: this.user.avatar, // 发送者头像\n        from_name: this.user.nickname || this.user.username, // 发送者昵称\n        from_id: this.user.id, // 发送者id\n        to_id: params.to_id || this.TO.id, // 接收人/群 id\n        to_name: params.to_name || this.TO.name, // 接收人/群 名称\n        to_avatar: params.to_avatar || this.TO.avatar, // 接收人/群 头像\n        chat_type: params.chat_type || this.TO.chat_type, // 接收类型\n        type: params.type, // 消息类型\n        data: params.data, // 消息内容\n        options: params.options ? params.options : {}, // 其他参数\n        create_time: new Date().getTime(), // 创建时间\n        isremove: 0, // 是否撤回\n        sendStatus: params.sendStatus ? params.sendStatus : \"pending\" // 发送状态，success发送成功,fail发送失败,pending发送中\n      };\n    }\n    // 撤回消息\n  }, { key: \"recall\", value: function recall(message) {var _this3 = this;\n      return new Promise(function (result, reject) {\n        _request.default.post('/app/message/recall', {\n          to_id: message.to_id,\n          chat_type: message.chat_type,\n          id: message.id }).\n        then(function (res) {\n          // key值：chatDetail_当前用户id_会话类型_接收人/群id\n          var key = \"chatDetail_\".concat(_this3.user.id, \"_\").concat(message.chat_type, \"_\").concat(message.to_id);\n          // 获取原来的聊天记录\n          var list = _this3.getChatDetail(key);\n          // 根据k查找对应聊天记录\n          var index = list.findIndex(function (item) {return item.id === message.id;});\n          if (index === -1) return;\n          list[index].isremove = 1;\n          // 存储\n          _this3.setStorage(key, list);\n          result(res);\n          // 更新会话最后一条消息显示\n          _this3.updateChatItem({\n            id: message.to_id,\n            chat_type: message.chat_type },\n          function (item) {\n            item.data = '你撤回了一条消息';\n            item.update_time = new Date().getTime();\n            return item;\n          });\n        }).catch(function (err) {\n          reject(err);\n        });\n      });\n    }\n    // 发送消息\n  }, { key: \"send\", value: function send(message) {var _this4 = this;var onProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(result, reject) {var _this4$addChatDetail, k, isUpload, uploadResult, data;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                  // 添加消息历史记录\n                  _this4$addChatDetail = _this4.addChatDetail(message), k = _this4$addChatDetail.k;\n                  // 更新会话列表\n                  _this4.updateChatList(message);\n                  // 验证是否上线\n                  if (_this4.checkOnline()) {_context5.next = 4;break;}return _context5.abrupt(\"return\", reject('未上线'));case 4:\n\n                  // 上传文件\n                  isUpload = message.type !== 'text' && message.type !== 'emoticon' && message.type !== 'card' && !message.data.startsWith('http://tangzhe123-com');\n\n                  uploadResult = '';if (!\n                  isUpload) {_context5.next = 14;break;}_context5.next = 9;return (\n                    _request.default.upload('/app/user/upload', {\n                      filePath: message.data },\n                    onProgress));case 9:uploadResult = _context5.sent;if (\n                  uploadResult) {_context5.next = 14;break;}\n                  // 发送失败\n                  message.sendStatus = 'fail';\n                  // 更新指定历史记录\n                  _this4.updateChatDetail(message, k);\n                  // 断线重连提示\n                  return _context5.abrupt(\"return\", reject(err));case 14:\n\n\n                  data = isUpload ? uploadResult : message.data;\n                  message.data = data;\n                  //视屏封面\n                  if (message.type === 'video') {\n                    message.options.poster = 'http://qiniu.doctorfss.com/upload/20191030/0711014cf8724cae9b906f04291de906.jpg';\n                  }\n                  // 提交到后端\n                  /* let mes = message\n                  mes.id=new Date().getTime()\n                  console.log(mes)\n                  let da = {\n                  \tcode:2,\n                  \tmessage: mes\n                  }\n                  let that = this\n                  this.socket.send({\n                  \tdata:JSON.stringify(da),\n                  \tsuccess() {\n                  \t\tmessage.sendStatus = 'success'\n                  \t\t// 更新指定历史记录\n                  \t\tconsole.log('更新指定历史记录',message);\n                  \t\tthat.updateChatDetail(message,k)\n                  \t\tresult(message)\n                  \t},\n                  \tfail() {\n                  \t\t// 发送失败\n                  \t\tmessage.sendStatus = 'fail'\n                  \t\t// 更新指定历史记录\n                  \t\tthat.updateChatDetail(message,k)\n                  \t\t// 断线重连提示\n                  \t\t//reject(message)\n                  \t}\n                  }) */\n\n                  //let data = isUpload ? uploadResult : message.data\n                  __f__(\"log\", message.options, \" at common/js/chat.js:404\");\n                  _request.default.post('/app/message/send', {\n                    to_id: message.to_id || _this4.TO.id,\n                    chat_type: message.chat_type || _this4.TO.chat_type,\n                    type: message.type,\n                    data: data,\n                    options: JSON.stringify(message.options) == '{}' ? null : message.options }).\n                  then(function (res) {\n                    // 发送成功\n                    message.id = res.data.id;\n                    message.sendStatus = 'success';\n\n                    if (message.type === 'video') {\n                      message.options = res.data.options;\n                    }\n\n                    // 更新指定历史记录\n                    __f__(\"log\", '更新指定历史记录', message, \" at common/js/chat.js:421\");\n                    _this4.updateChatDetail(message, k);\n                    result(res);\n                  }).catch(function (err) {\n                    // 发送失败\n                    message.sendStatus = 'fail';\n                    // 更新指定历史记录\n                    _this4.updateChatDetail(message, k);\n                    // 断线重连提示\n                    reject(err);\n                  });case 19:case \"end\":return _context5.stop();}}}, _callee5);}));return function (_x4, _x5) {return _ref.apply(this, arguments);};}());\n\n    }\n    // 添加聊天记录\n  }, { key: \"addChatDetail\", value: function addChatDetail(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      __f__(\"log\", '添加聊天记录', \" at common/js/chat.js:436\");\n      // 获取对方id\n      var id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n      // key值：chatDetail_当前用户id_会话类型_接收人/群id\n      var key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n      // 获取原来的聊天记录\n      var list = this.getChatDetail(key);\n      __f__(\"log\", '获取原来的聊天记录', list, \" at common/js/chat.js:443\");\n      // 标识\n      message.k = 'k' + list.length;\n      list.push(message);\n      // 加入缓存\n      __f__(\"log\", '加入缓存', key, \" at common/js/chat.js:448\");\n      this.setStorage(key, list);\n      // 返回\n      return {\n        data: message,\n        k: message.k };\n\n    }\n    // 删除指定聊天记录\n  }, { key: \"deleteChatDetailItem\", value: function () {var _deleteChatDetailItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(message) {var isSend,id,key,list,index,_args6 = arguments;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:isSend = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.k === message.k || item.id === message.id;});if (!(\n                index === -1)) {_context6.next = 7;break;}return _context6.abrupt(\"return\");case 7:\n                list.splice(index, 1);\n                // 存储\n                this.setStorage(key, list);case 9:case \"end\":return _context6.stop();}}}, _callee6, this);}));function deleteChatDetailItem(_x6) {return _deleteChatDetailItem.apply(this, arguments);}return deleteChatDetailItem;}()\n\n    // 更新指定历史记录\n  }, { key: \"updateChatDetail\", value: function () {var _updateChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(message, k) {var isSend,id,key,list,index,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:isSend = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;\n                // 获取对方id\n                id = message.chat_type === 'user' ? isSend ? message.to_id : message.from_id : message.to_id;\n                // key值：chatDetail_当前用户id_会话类型_接收人/群id\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(message.chat_type, \"_\").concat(id);\n                __f__(\"log\", 'key值', key, \" at common/js/chat.js:477\");\n                // 获取原来的聊天记录\n                list = this.getChatDetail(key);\n                __f__(\"log\", '获取原来的聊天记录', list, \" at common/js/chat.js:480\");\n                // 根据k查找对应聊天记录\n                index = list.findIndex(function (item) {return item.k === k;});\n                __f__(\"log\", '根据k查找对应聊天记录', index, \" at common/js/chat.js:483\");if (!(\n                index === -1)) {_context7.next = 10;break;}return _context7.abrupt(\"return\");case 10:\n                list[index] = message;\n                // 存储\n                this.setStorage(key, list);case 12:case \"end\":return _context7.stop();}}}, _callee7, this);}));function updateChatDetail(_x7, _x8) {return _updateChatDetail.apply(this, arguments);}return updateChatDetail;}()\n\n    // 获取聊天记录\n  }, { key: \"getChatDetail\", value: function getChatDetail() {var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      key = key ? key : \"chatDetail_\".concat(this.user.id, \"_\").concat(this.TO.chat_type, \"_\").concat(this.TO.id);\n      return this.getStorage(key);\n    }\n\n    // 格式化会话最后一条消息显示\n  }, { key: \"formatChatItemData\", value: function formatChatItemData(message, isSend) {\n      var data = message.data;\n      switch (message.type) {\n        case 'emoticon':\n          data = '[表情]';\n          break;\n        case 'image':\n          data = '[图片]';\n          break;\n        case 'audio':\n          data = '[语音]';\n          break;\n        case 'video':\n          data = '[视频]';\n          break;\n        case 'card':\n          data = '[名片]';\n          break;}\n\n      data = isSend ? data : \"\".concat(message.from_name, \": \").concat(data);\n      return data;\n    }\n\n    /**\n       {\n       \tid:1, // 接收人/群 id\n       \tchat_type:'user', // 接收类型 user单聊 group群聊\n       \tavatar:'', // 接收人/群 头像\n       \tname:'昵称', // 接收人/群 昵称\n       \tupdate_time:(new Date()).getTime(), // 最后一条消息的时间戳\n       \tdata:\"最后一条消息内容\", // 最后一条消息内容\n       \ttype:'text', \t\t   // 最后一条消息类型\n       \tnoreadnum:0, // 未读数\n       \tistop:false, // 是否置顶\n       \tshownickname:0, // 是否显示昵称\n       \tnowarn:0, // 消息免打扰\n       \tstrongwarn:0, // 是否开启强提醒\n      \t\n      \tuser_id:0, // 群管理员id\n      \tremark:\"公告\", // 群公告\n      \tinvite_confirm:0, // 邀请确认\n       }\n       * **/\n    // 初始化会话\n  }, { key: \"initChatListItem\", value: function initChatListItem(message) {\n      // 获取本地存储会话列表\n      var list = this.getChatList();\n      // 会话是否存在\n      var index = list.findIndex(function (item) {\n        return item.chat_type === message.chat_type && item.id === message.to_id;\n      });\n      // 最后一条消息展现形式\n      var data = this.formatChatItemData(message, true);\n      // 会话不存在，创建会话\n      if (index === -1) {\n        var chatItem = {\n          id: message.to_id, // 接收人/群 id\n          chat_type: message.chat_type, // 接收类型 user单聊 group群聊\n          avatar: message.to_avatar, // 接收人/群 头像\n          name: message.to_name, // 接收人/群 昵称\n          update_time: new Date().getTime(), // 最后一条消息的时间戳\n          data: message.data, // 最后一条消息内容\n          type: 'system', // 最后一条消息类型\n          noreadnum: 0, // 未读数\n          istop: false, // 是否置顶\n          shownickname: false, // 是否显示昵称\n          nowarn: false, // 消息免打扰\n          strongwarn: false // 是否开启强提醒\n        };\n        // 群聊\n        if (message.chat_type === 'group' && message.group) {\n          chatItem = _objectSpread({},\n          chatItem, {\n            user_id: message.group.user_id, // 群管理员id\n            remark: '', // 群公告\n            invite_confirm: message.group.invite_confirm // 邀请确认\n          });\n        }\n        list.unshift(chatItem);\n        // 存储\n        var key = \"chatlist_\".concat(this.user.id);\n        this.setStorage(key, list);\n        // 通知更新vuex中的聊天会话列表\n        uni.$emit('onUpdateChatList', list);\n      }\n    }\n    // 更新会话列表\n  }, { key: \"updateChatList\", value: function updateChatList(message) {var isSend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      // 获取本地存储会话列表\n      var list = this.getChatList();\n      // 是否处于当前聊天中\n      var isCurrentChat = false;\n      // 接收人/群 id/头像/昵称\n      var id = 0;\n      var avatar = '';\n      var name = '';\n\n      // 判断私聊还是群聊\n      if (message.chat_type === 'user') {// 私聊\n        // 聊天对象是否存在\n        isCurrentChat = this.TO ? isSend ? this.TO.id === message.to_id : this.TO.id === message.from_id : false;\n\n        id = isSend ? message.to_id : message.from_id;\n        avatar = isSend ? message.to_avatar : message.from_avatar;\n        name = isSend ? message.to_name : message.from_name;\n      } else {// 群聊\n        isCurrentChat = this.TO && this.TO.id === message.to_id;\n        id = message.to_id;\n        avatar = message.to_avatar;\n        name = message.to_name;\n      }\n\n      // 会话是否存在\n      var index = list.findIndex(function (item) {\n        return item.chat_type === message.chat_type && item.id === id;\n      });\n      // 最后一条消息展现形式\n      // let data = isSend ? message.data : `${message.from_name}: ${message.data}`\n      var data = this.formatChatItemData(message, isSend);\n      // 会话不存在，创建会话\n      // 未读数是否 + 1\n      var noreadnum = isSend || isCurrentChat ? 0 : 1;\n      if (index === -1) {\n        var chatItem = {\n          id: id, // 接收人/群 id\n          chat_type: message.chat_type, // 接收类型 user单聊 group群聊\n          avatar: avatar, // 接收人/群 头像\n          name: name, // 接收人/群 昵称\n          update_time: new Date().getTime(), // 最后一条消息的时间戳\n          data: data, // 最后一条消息内容\n          type: message.type, // 最后一条消息类型\n          noreadnum: noreadnum, // 未读数\n          istop: false, // 是否置顶\n          shownickname: false, // 是否显示昵称\n          nowarn: false, // 消息免打扰\n          strongwarn: false // 是否开启强提醒\n        };\n        // 群聊\n        if (message.chat_type === 'group' && message.group) {\n          chatItem.shownickname = true;\n          chatItem.name = message.to_name;\n          chatItem = _objectSpread({},\n          chatItem, {\n            user_id: message.group.user_id, // 群管理员id\n            remark: \"\", // 群公告\n            invite_confirm: 1 // 邀请确认\n          });\n        }\n        list.unshift(chatItem);\n      } else {// 存在，更新会话\n        // 拿到当前会话\n        var item = list[index];\n        // 更新该会话最后一条消息时间，内容，类型\n        item.update_time = new Date().getTime();\n        // 群聊\n        /* if(message.chat_type === 'group'){\n        \titem.name = message.to_name\n        } */\n        item.name = message.to_name;\n        item.data = data;\n        item.type = message.type;\n        // 未读数更新\n        item.noreadnum += noreadnum;\n        // 置顶会话\n        list = this.listToFirst(list, index);\n      }\n      // 存储\n      var key = \"chatlist_\".concat(this.user.id);\n      this.setStorage(key, list);\n      // 更新未读数\n      this.updateBadge(list);\n      // 通知更新vuex中的聊天会话列表\n      uni.$emit('onUpdateChatList', list);\n      return list;\n    }\n    // 更新未读数\n  }, { key: \"updateBadge\", value: function () {var _updateBadge = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var list,total,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:list = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : false;\n                // 获取所有会话列表\n                list = list ? list : this.getChatList();\n                // 统计所有未读数\n                total = 0;\n                list.forEach(function (item) {\n                  total += item.noreadnum;\n                });\n                // 设置底部导航栏角标\n                if (total > 0) {\n                  uni.setTabBarBadge({\n                    index: 0,\n                    text: total <= 99 ? total.toString() : '99+' });\n\n                } else {\n                  uni.removeTabBarBadge({\n                    index: 0 });\n\n                }\n                uni.$emit('totalNoreadnum', total);case 6:case \"end\":return _context8.stop();}}}, _callee8, this);}));function updateBadge() {return _updateBadge.apply(this, arguments);}return updateBadge;}()\n\n    // 更新指定会话\n  }, { key: \"updateChatItem\", value: function () {var _updateChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(where, data) {var list, index, key;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === where.id && item.chat_type === where.chat_type;});if (!(\n                index === -1)) {_context9.next = 4;break;}return _context9.abrupt(\"return\");case 4:\n                // 更新数据\n                if (typeof data === 'function') {\n                  list[index] = data(list[index]);\n                } else {\n                  list[index] = data;\n                }\n\n                key = \"chatlist_\".concat(this.user.id);\n                this.setStorage(key, list);\n\n                // 更新会话列表状态\n                uni.$emit('onUpdateChatList', list);case 8:case \"end\":return _context9.stop();}}}, _callee9, this);}));function updateChatItem(_x9, _x10) {return _updateChatItem.apply(this, arguments);}return updateChatItem;}()\n\n    // 读取会话\n  }, { key: \"readChatItem\", value: function () {var _readChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].noreadnum = 0;\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context10.stop();}}}, _callee10, this);}));function readChatItem(_x11, _x12) {return _readChatItem.apply(this, arguments);}return readChatItem;}()\n\n    // 删除指定会话\n  }, { key: \"removeChatItem\", value: function () {var _removeChatItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(id, chat_type) {var list, index, key;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list.splice(index, 1);\n\n                  key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(key, list);\n                  // 重新获取总未读数\n                  this.updateBadge();\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 3:case \"end\":return _context11.stop();}}}, _callee11, this);}));function removeChatItem(_x13, _x14) {return _removeChatItem.apply(this, arguments);}return removeChatItem;}()\n\n    // 清空聊天记录\n  }, { key: \"clearChatDetail\", value: function () {var _clearChatDetail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12(id, chat_type) {var key, list, index, _key;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:\n                key = \"chatDetail_\".concat(this.user.id, \"_\").concat(chat_type, \"_\").concat(id);\n                uni.removeStorageSync(key);\n\n                // 获取所有会话列表\n                list = this.getChatList();\n                // 找到当前会话\n                index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n                if (index !== -1) {\n                  list[index].data = '';\n\n                  _key = \"chatlist_\".concat(this.user.id);\n                  this.setStorage(_key, list);\n                  // 更新会话列表状态\n                  uni.$emit('onUpdateChatList', list);\n                }case 5:case \"end\":return _context12.stop();}}}, _callee12, this);}));function clearChatDetail(_x15, _x16) {return _clearChatDetail.apply(this, arguments);}return clearChatDetail;}()\n\n    // 获取本地存储会话列表\n  }, { key: \"getChatList\", value: function getChatList() {\n      var key = \"chatlist_\".concat(this.user.id);\n      return this.getStorage(key);\n    }\n    // 获取指定会话\n  }, { key: \"getChatListItem\", value: function getChatListItem(id, chat_type) {\n      // 获取所有会话列表\n      var list = this.getChatList();\n      // 找到当前会话\n      var index = list.findIndex(function (item) {return item.id === id && item.chat_type === chat_type;});\n      if (index !== -1) {\n        return list[index];\n      }\n      return false;\n    }\n    // 获取存储\n  }, { key: \"getStorage\", value: function getStorage(key) {\n      var list = uni.getStorageSync(key);\n      return list ? JSON.parse(list) : [];\n    }\n    // 设置存储\n  }, { key: \"setStorage\", value: function setStorage(key, value) {\n      return uni.setStorageSync(key, JSON.stringify(value));\n    }\n    // 数组置顶\n  }, { key: \"listToFirst\", value: function listToFirst(arr, index) {\n      if (index != 0) {\n        arr.unshift(arr.splice(index, 1)[0]);\n      }\n      return arr;\n    } }]);return chat;}();var _default =\n\nchat;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL2NoYXQuanMiXSwibmFtZXMiOlsiY2hhdCIsImFyZyIsInRpbWVyIiwidXJsIiwiaXNPbmxpbmUiLCJzb2NrZXQiLCJyZWNvbm5lY3RUaW1lIiwiaXNPcGVuUmVjb25uZWN0IiwidXNlciIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInBhcnNlIiwiVE8iLCJ0b2tlbiIsImNvbm5lY3RTb2NrZXQiLCJyZWNvbm5lY3RDb25maXJtIiwiY29tcGxldGUiLCJvbk9wZW4iLCJvbk1lc3NhZ2UiLCJyZXMiLCJvbkNsb3NlIiwib25FcnJvciIsIm1lc3NhZ2UiLCJzZW5kIiwiZGF0YSIsInN1Y2Nlc3MiLCJmYWlsIiwic2VuZE1lc3NhZ2UiLCJzdHJpbmdpZnkiLCJ0eXBlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInJlY29ubmVjdCIsImNsZWFySW50ZXJ2YWwiLCJjb2RlIiwibXNnIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZnJvbV9pZCIsInVzZXJJZCIsImhhbmRsZU9uUmVjYWxsIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJoYW5kbGVNb21lbnQiLCJoYW5kbGVPbk1lc3NhZ2UiLCJub3RpY2UiLCJhdmF0YXIiLCJ1c2VyX2lkIiwibnVtIiwiZ2V0Tm90aWNlIiwic2hvd1RhYkJhclJlZERvdCIsImluZGV4Iiwic2V0VGFiQmFyQmFkZ2UiLCJ0ZXh0IiwidG9TdHJpbmciLCJyZW1vdmVUYWJCYXJCYWRnZSIsIiRlbWl0Iiwic2V0U3RvcmFnZVN5bmMiLCJoaWRlVGFiQmFyUmVkRG90IiwiaXNyZW1vdmUiLCJjaGF0X3R5cGUiLCJ0b19pZCIsImtleSIsImxpc3QiLCJnZXRDaGF0RGV0YWlsIiwiZmluZEluZGV4IiwiaXRlbSIsInNldFN0b3JhZ2UiLCJ1cGRhdGVDaGF0SXRlbSIsInVwZGF0ZV90aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGRDaGF0RGV0YWlsIiwidXBkYXRlQ2hhdExpc3QiLCJjbG9zZSIsImRldGFpbCIsInBhcmFtcyIsImZyb21fYXZhdGFyIiwiZnJvbV9uYW1lIiwibmlja25hbWUiLCJ1c2VybmFtZSIsInRvX25hbWUiLCJuYW1lIiwidG9fYXZhdGFyIiwib3B0aW9ucyIsImNyZWF0ZV90aW1lIiwic2VuZFN0YXR1cyIsIlByb21pc2UiLCJyZXN1bHQiLCJyZWplY3QiLCIkSCIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJvblByb2dyZXNzIiwiayIsImNoZWNrT25saW5lIiwiaXNVcGxvYWQiLCJzdGFydHNXaXRoIiwidXBsb2FkUmVzdWx0IiwidXBsb2FkIiwiZmlsZVBhdGgiLCJ1cGRhdGVDaGF0RGV0YWlsIiwicG9zdGVyIiwiaXNTZW5kIiwibGVuZ3RoIiwicHVzaCIsInNwbGljZSIsImdldFN0b3JhZ2UiLCJnZXRDaGF0TGlzdCIsImZvcm1hdENoYXRJdGVtRGF0YSIsImNoYXRJdGVtIiwibm9yZWFkbnVtIiwiaXN0b3AiLCJzaG93bmlja25hbWUiLCJub3dhcm4iLCJzdHJvbmd3YXJuIiwiZ3JvdXAiLCJyZW1hcmsiLCJpbnZpdGVfY29uZmlybSIsInVuc2hpZnQiLCJpc0N1cnJlbnRDaGF0IiwibGlzdFRvRmlyc3QiLCJ1cGRhdGVCYWRnZSIsInRvdGFsIiwiZm9yRWFjaCIsIndoZXJlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJ2YWx1ZSIsImFyciJdLCJtYXBwaW5ncyI6IjJSQUFBO0FBQ0EscUY7QUFDTUEsSTtBQUNMLGdCQUFZQyxHQUFaLEVBQWlCO0FBQ2hCLFNBQUtDLEtBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXRixHQUFHLENBQUNFLEdBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixJQUF2QjtBQUNBO0FBQ0EsUUFBSUMsSUFBSSxHQUFHQyxHQUFHLENBQUNDLGNBQUosQ0FBbUIsTUFBbkIsQ0FB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SSxDQUFDRSxTQUFMLENBQWUsVUFBQUMsSUFBSSxVQUFFQSxJQUFJLENBQUNyQyxFQUFMLEtBQVlBLEVBQVosSUFBa0JxQyxJQUFJLENBQUNOLFNBQUwsS0FBbUJBLFNBQXZDLEVBQW5CLENBQVo7QUFDQSxVQUFHVCxLQUFLLEtBQUssQ0FBQyxDQUFkLEVBQWdCO0FBQ2YsZUFBT1ksSUFBSSxDQUFDWixLQUFELENBQVg7QUFDQTtBQUNELGFBQU8sS0FBUDtBQUNBO0FBQ0Q7cURBQ1dXLEcsRUFBSTtBQUNkLFVBQUlDLElBQUksR0FBR3hELEdBQUcsQ0FBQ0MsY0FBSixDQUFtQnNELEdBQW5CLENBQVg7QUFDQSxhQUFPQyxJQUFJLEdBQUd0RCxJQUFJLENBQUNDLEtBQUwsQ0FBV3FELElBQVgsQ0FBSCxHQUFzQixFQUFqQztBQUNBO0FBQ0Q7cURBQ1dELEcsRUFBSW1FLEssRUFBTTtBQUNwQixhQUFPMUgsR0FBRyxDQUFDa0QsY0FBSixDQUFtQkssR0FBbkIsRUFBdUJyRCxJQUFJLENBQUNrQixTQUFMLENBQWVzRyxLQUFmLENBQXZCLENBQVA7QUFDQTtBQUNEO3VEQUNZQyxHLEVBQUkvRSxLLEVBQU07QUFDckIsVUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZitFLFdBQUcsQ0FBQ1QsT0FBSixDQUFZUyxHQUFHLENBQUN0QixNQUFKLENBQVd6RCxLQUFYLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQVo7QUFDQTtBQUNELGFBQU8rRSxHQUFQO0FBQ0EsSzs7QUFFYXBJLEkiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJEggZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCAkc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleC5qcyc7XG5jbGFzcyBjaGF0IHtcblx0Y29uc3RydWN0b3IoYXJnKSB7XG5cdFx0dGhpcy50aW1lcj1udWxsXG5cdFx0dGhpcy51cmwgPSBhcmcudXJsXG5cdFx0dGhpcy5pc09ubGluZSA9IGZhbHNlXG5cdFx0dGhpcy5zb2NrZXQgPSBudWxsXG5cdFx0dGhpcy5yZWNvbm5lY3RUaW1lID0gMFxuXHRcdHRoaXMuaXNPcGVuUmVjb25uZWN0ID0gdHJ1ZVxuXHRcdC8vIOiOt+WPluW9k+WJjeeUqOaIt+ebuOWFs+S/oeaBr1xuXHRcdGxldCB1c2VyID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyJylcblx0XHRjb25zb2xlLmxvZyh1c2VyKVxuXHRcdHRoaXMudXNlciA9IHVzZXIgPyBKU09OLnBhcnNlKHVzZXIpIDoge30sXG5cdFx0Ly8g5Yid5aeL5YyW6IGK5aSp5a+56LGhXG5cdFx0dGhpcy5UTyA9IGZhbHNlO1xuXHRcdFxuXHRcdC8vIOi/nuaOpeWSjOebkeWQrFxuXHRcdGlmKHRoaXMudXNlci50b2tlbil7XG5cdFx0XHR0aGlzLmNvbm5lY3RTb2NrZXQoKVxuXHRcdH1cblx0fVxuXHQvLyDmlq3nur/ph43ov55cblx0cmVjb25uZWN0KCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5pc09ubGluZSlcblx0XHRpZih0aGlzLmlzT25saW5lKXtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZih0aGlzLnJlY29ubmVjdFRpbWUgPj0gMyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWNvbm5lY3RDb25maXJtKClcblx0XHR9XG5cdFx0dGhpcy5yZWNvbm5lY3RUaW1lICs9IDFcblx0XHR0aGlzLmNvbm5lY3RTb2NrZXQoKVxuXHR9XG5cdC8vIOi/nuaOpXNvY2tldFxuXHRjb25uZWN0U29ja2V0KCl7XG5cdFx0Y29uc29sZS5sb2coJ2Nvbm5lY3RTb2NrZXQnKVxuXHRcdHRoaXMuc29ja2V0ID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuXHRcdFx0dXJsOnRoaXMudXJsLFxuXHRcdFx0Y29tcGxldGU6ICgpPT4ge31cblx0XHR9KVxuXHRcdC8vIOebkeWQrOi/nuaOpeaIkOWKn1xuXHRcdHRoaXMuc29ja2V0Lm9uT3BlbigoKT0+dGhpcy5vbk9wZW4oKSlcblx0XHQvLyDnm5HlkKzmjqXmlLbkv6Hmga9cblx0XHR0aGlzLnNvY2tldC5vbk1lc3NhZ2UoKHJlcyk9PnRoaXMub25NZXNzYWdlKHJlcykpXG5cdFx0Ly8g55uR5ZCs5pat5byAXG5cdFx0dGhpcy5zb2NrZXQub25DbG9zZSgoKT0+dGhpcy5vbkNsb3NlKCkpXG5cdFx0Ly8g55uR5ZCs6ZSZ6K+vXG5cdFx0dGhpcy5zb2NrZXQub25FcnJvcigoKT0+dGhpcy5vbkVycm9yKCkpXG5cdH1cblx0c2VuZE1lc3NhZ2UobWVzc2FnZSl7XG5cdFx0dGhpcy5zb2NrZXQuc2VuZCh7XG5cdFx0XHRkYXRhOm1lc3NhZ2UsXG5cdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbCgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWwnKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0Ly8g55uR5ZCs5omT5byAXG5cdG9uT3Blbigpe1xuXHRcdGNvbnNvbGUubG9nKDEyMylcblx0XHR0aGlzLnNlbmRNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHt0eXBlOiAwLGRhdGE6e2lkOjEsdG9rZW46MTExfX0pKVxuXHRcdC8vIOeUqOaIt+S4iue6v1xuXHRcdHRoaXMuaXNPbmxpbmUgPSB0cnVlXG5cdFx0Y29uc29sZS5sb2coJ3NvY2tldOi/nuaOpeaIkOWKnycpXG5cdFx0dGhpcy5pc09wZW5SZWNvbm5lY3QgPSB0cnVlXG5cdFx0Ly/lv4Pot7Ncblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5zb2NrZXQhPW51bGwpe1xuXHRcdFx0XHR0aGlzLnNvY2tldC5zZW5kKHtcblx0XHRcdFx0XHRkYXRhOkpTT04uc3RyaW5naWZ5KHt0eXBlOjIsZGF0YTp7fX0pLFxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5b+D6Lez5Y+R6YCB5oiQ5Yqfc3VjY2VzcycpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmYWlsKCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+W/g+i3s+WPkemAgeWksei0pWZhaWwnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LCAxNTAwMCk7XG5cdH1cblxuXHQvLyDnm5HlkKzlhbPpl61cblx0b25DbG9zZSgpe1xuXHRcdC8vIOeUqOaIt+S4i+e6v1xuXHRcdHRoaXMuaXNPbmxpbmUgPSBmYWxzZVxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbFxuXHRcdGlmKHRoaXMuaXNPcGVuUmVjb25uZWN0KXtcblx0XHRcdHRoaXMucmVjb25uZWN0KClcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ3NvY2tldOi/nuaOpeWFs+mXrScpXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHR9XG5cdC8vIOebkeWQrOi/nuaOpemUmeivr1xuXHRvbkVycm9yKCl7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHRcdC8vIOeUqOaIt+S4i+e6v1xuXHRcdHRoaXMuaXNPbmxpbmUgPSBmYWxzZVxuXHRcdHRoaXMuc29ja2V0ID0gbnVsbFxuXHRcdGNvbnNvbGUubG9nKCdzb2NrZXTov57mjqXplJnor68nKVxuXHR9XG5cdC8vIOebkeWQrOaOpeaUtua2iOaBr1xuXHRvbk1lc3NhZ2UoZGF0YSl7XG5cdFx0bGV0IHJlcyA9IEpTT04ucGFyc2UoZGF0YS5kYXRhKVxuXHRcdC8v5b+D6LezXG5cdFx0aWYocmVzLmNvZGU9PTApe1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCfnm5HlkKzmjqXmlLbmtojmga8nLHJlcylcblx0XHQvLyDplJnor69cblx0XHRzd2l0Y2ggKHJlcy5tc2cpe1xuXHRcdFx0Y2FzZSAnZmFpbCc6XG5cdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiByZXMuZGF0YSxcblx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZWNhbGwnOiAvLyDmkqTlm57mtojmga9cblx0XHRcdC8v5pKk5ZueICDoh6rlt7Hlj5HnmoQgIHJldHVyblxuXHRcdFx0aWYocmVzLmNvZGU9PTIpe1xuXHRcdFx0XHRpZihyZXMubWVzc2FnZS5mcm9tX2lkPT10aGlzLnVzZXIudXNlcklkKXtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYW5kbGVPblJlY2FsbChyZXMubWVzc2FnZSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1cGRhdGVBcHBseUxpc3QnOiAvLyDmlrDnmoTlpb3lj4vnlLPor7dcblx0XHRcdGNvbnNvbGUubG9nKCd1cGRhdGVBcHBseUxpc3QnKVxuXHRcdFx0JHN0b3JlLmRpc3BhdGNoKCdnZXRBcHBseScpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ21vbWVudCc6IC8vIOaci+WPi+WciOabtOaWsFxuXHRcdFx0dGhpcy5oYW5kbGVNb21lbnQocmVzLm1lc3NhZ2UpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdC8v576k6IGKICDoh6rlt7Hlj5HnmoQgIHJldHVyblxuXHRcdFx0aWYocmVzLmNvZGU9PTIpe1xuXHRcdFx0XHRpZihyZXMubWVzc2FnZS50eXBlID09J3N5c3RlbScpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihyZXMubWVzc2FnZS5mcm9tX2lkPT10aGlzLnVzZXIudXNlcklkKXtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8g5aSE55CG5raI5oGvXG5cdFx0XHR0aGlzLmhhbmRsZU9uTWVzc2FnZShyZXMubWVzc2FnZSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdC8vIOiOt+WPluacrOWcsOWtmOWCqOS4reeahOaci+WPi+WciOWKqOaAgemAmuefpVxuXHRnZXROb3RpY2UoKXtcblx0XHRsZXQgbm90aWNlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdtb21lbnRfJyt0aGlzLnVzZXIuaWQpXG5cdFx0cmV0dXJuIG5vdGljZSA/IEpTT04ucGFyc2Uobm90aWNlKSA6IHtcblx0XHRcdGF2YXRhcjpcIlwiLFxuXHRcdFx0dXNlcl9pZDowLFxuXHRcdFx0bnVtOjBcblx0XHR9XG5cdH1cblx0Ly8g5aSE55CG5pyL5Y+L5ZyI6YCa55+lXG5cdGFzeW5jIGhhbmRsZU1vbWVudChtZXNzYWdlKXtcblx0XHRsZXQgbm90aWNlID0gdGhpcy5nZXROb3RpY2UoKVxuXHRcdHN3aXRjaCAobWVzc2FnZS50eXBlKXtcblx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRpZihtZXNzYWdlLnVzZXJfaWQgIT09IHRoaXMudXNlci5pZCl7XG5cdFx0XHRcdG5vdGljZS5hdmF0YXIgPSBtZXNzYWdlLmF2YXRhclxuXHRcdFx0XHRub3RpY2UudXNlcl9pZCA9IG1lc3NhZ2UudXNlcl9pZFxuXHRcdFx0XHR1bmkuc2hvd1RhYkJhclJlZERvdCh7XG5cdFx0XHRcdFx0aW5kZXg6MlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRpZihtZXNzYWdlLnVzZXJfaWQgIT09IHRoaXMudXNlci5pZCl7XG5cdFx0XHRcdG5vdGljZS5hdmF0YXIgPSBtZXNzYWdlLmF2YXRhclxuXHRcdFx0XHRub3RpY2UudXNlcl9pZCA9IG1lc3NhZ2UudXNlcl9pZFxuXHRcdFx0XHRub3RpY2UubnVtICs9IDFcblx0XHRcdH1cblx0XHRcdGlmKG5vdGljZS5udW0gPiAwKXtcblx0XHRcdFx0dW5pLnNldFRhYkJhckJhZGdlKHtcblx0XHRcdFx0XHRpbmRleDoyLFxuXHRcdFx0XHRcdHRleHQ6bm90aWNlLm51bSA+IDk5ID8gJzk5KycgOiBub3RpY2UubnVtLnRvU3RyaW5nKClcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVuaS5yZW1vdmVUYWJCYXJCYWRnZSh7XG5cdFx0XHRcdFx0aW5kZXg6MlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dW5pLiRlbWl0KCdtb21lbnROb3RpY2UnLG5vdGljZSlcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ21vbWVudF8nK3RoaXMudXNlci5pZCxKU09OLnN0cmluZ2lmeShub3RpY2UpKVxuXHR9XG5cdC8vIOivu+WPluaci+WPi+WciOWKqOaAgVxuXHRhc3luYyByZWFkTW9tZW50cygpe1xuXHRcdGxldCBub3RpY2UgPSB7XG5cdFx0XHRhdmF0YXI6XCJcIixcblx0XHRcdHVzZXJfaWQ6MCxcblx0XHRcdG51bTowXG5cdFx0fVxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYygnbW9tZW50XycrdGhpcy51c2VyLmlkLEpTT04uc3RyaW5naWZ5KG5vdGljZSkpXG5cdFx0dW5pLmhpZGVUYWJCYXJSZWREb3Qoe1xuXHRcdFx0aW5kZXg6MlxuXHRcdH0pXG5cdFx0dW5pLnJlbW92ZVRhYkJhckJhZGdlKHtcblx0XHRcdGluZGV4OjJcblx0XHR9KVxuXHRcdHVuaS4kZW1pdCgnbW9tZW50Tm90aWNlJyxub3RpY2UpXG5cdH1cblx0Ly8g55uR5ZCs5pKk5Zue5raI5oGv5aSE55CGXG5cdGFzeW5jIGhhbmRsZU9uUmVjYWxsKG1lc3NhZ2Upe1xuXHRcdC8vIOmAmuefpeiBiuWkqemhteaSpOWbnua2iOaBr1xuXHRcdHVuaS4kZW1pdCgnb25NZXNzYWdlJyx7XG5cdFx0XHQuLi5tZXNzYWdlLFxuXHRcdFx0aXNyZW1vdmU6MVxuXHRcdH0pXG5cdFx0Ly8g5L+u5pS56IGK5aSp6K6w5b2VXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICdncm91cCcgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkXG5cdFx0Ly8ga2V55YC877yaY2hhdERldGFpbF/lvZPliY3nlKjmiLdpZF/kvJror53nsbvlnotf5o6l5pS25Lq6L+e+pGlkXG5cdFx0bGV0IGtleSA9IGBjaGF0RGV0YWlsXyR7dGhpcy51c2VyLmlkfV8ke21lc3NhZ2UuY2hhdF90eXBlfV8ke2lkfWBcblx0XHQvLyDojrflj5bljp/mnaXnmoTogYrlpKnorrDlvZVcblx0XHRsZXQgbGlzdCA9IHRoaXMuZ2V0Q2hhdERldGFpbChrZXkpXG5cdFx0Ly8g5qC55o2ua+afpeaJvuWvueW6lOiBiuWkqeiusOW9lVxuXHRcdGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW09Pml0ZW0uaWQgPT09IG1lc3NhZ2UuaWQpXG5cdFx0aWYoaW5kZXggPT09IC0xKSByZXR1cm47XG5cdFx0bGlzdFtpbmRleF0uaXNyZW1vdmUgPSAxXG5cdFx0Ly8g5a2Y5YKoXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGtleSxsaXN0KVxuXHRcdC8vIOW9k+WJjeS8muivneacgOWQjuS4gOadoea2iOaBr+eahOaYvuekulxuXHRcdHRoaXMudXBkYXRlQ2hhdEl0ZW0oe1xuXHRcdFx0aWQsXG5cdFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGVcblx0XHR9LChpdGVtKT0+e1xuXHRcdFx0aXRlbS5kYXRhID0gJ+WvueaWueaSpOWbnuS6huS4gOadoea2iOaBrydcblx0XHRcdGl0ZW0udXBkYXRlX3RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cdFx0XHRyZXR1cm4gaXRlbVxuXHRcdH0pXG5cdH1cblx0Ly8g5aSE55CG5raI5oGvXG5cdGFzeW5jIGhhbmRsZU9uTWVzc2FnZShtZXNzYWdlKXtcblx0XHQvLyDmt7vliqDmtojmga/orrDlvZXliLDmnKzlnLDlrZjlgqjkuK1cblx0XHRsZXQgeyBkYXRhIH0gPSB0aGlzLmFkZENoYXREZXRhaWwobWVzc2FnZSxmYWxzZSlcblx0XHQvLyDmm7TmlrDkvJror53liJfooahcblx0XHR0aGlzLnVwZGF0ZUNoYXRMaXN0KGRhdGEsZmFsc2UpXG5cdFx0Ly8g5YWo5bGA6YCa55+lXG5cdFx0dW5pLiRlbWl0KCdvbk1lc3NhZ2UnLGRhdGEpXG5cdH1cblx0Ly8g5YWz6Zet6L+e5o6lXG5cdGNsb3NlKCl7XG5cdFx0aWYodGhpcy5zb2NrZXQpe1xuXHRcdFx0dGhpcy5zb2NrZXQuY2xvc2UoKVxuXHRcdH1cblx0XHR0aGlzLmlzT3BlblJlY29ubmVjdCA9IGZhbHNlXG5cdH1cblx0Ly8g5Yib5bu66IGK5aSp5a+56LGhXG5cdGNyZWF0ZUNoYXRPYmplY3QoZGV0YWlsKXtcblx0XHR0aGlzLlRPID0gZGV0YWlsXG5cdFx0Y29uc29sZS5sb2coJ+WIm+W7uuiBiuWkqeWvueixoScsdGhpcy5UTyk7XG5cdH1cblx0Ly8g6ZSA5q+B6IGK5aSp5a+56LGhXG5cdGRlc3RvcnlDaGF0T2JqZWN0KCl7XG5cdFx0dGhpcy5UTyA9IGZhbHNlXG5cdFx0Y29uc29sZS5sb2coJ+mUgOavgeiBiuWkqeWvueixoScpO1xuXHR9XG5cdC8vIOaWree6v+mHjei/nuaPkOekulxuXHRyZWNvbm5lY3RDb25maXJtKCl7XG5cdFx0dGhpcy5jb25uZWN0U29ja2V0KClcblx0XHR0aGlzLnJlY29ubmVjdFRpbWUgPSAwXG5cdFx0LyogdW5pLnNob3dNb2RhbCh7XG5cdFx0XHRjb250ZW50OiAn5L2g5bey57uP5pat57q/77yM5piv5ZCm6YeN5paw6L+e5o6l77yfJyxcblx0XHRcdGNvbmZpcm1UZXh0Olwi6YeN5paw6L+e5o6lXCIsXG5cdFx0XHRzdWNjZXNzOihyZXMpPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3RTb2NrZXQoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7ICovXG5cdH1cblx0Ly8g6aqM6K+B5piv5ZCm5LiK57q/XG5cdGNoZWNrT25saW5lKCl7XG5cdFx0aWYoIXRoaXMuaXNPbmxpbmUpe1xuXHRcdFx0Ly8g5pat57q/6YeN6L+e5o+Q56S6XG5cdFx0XHR0aGlzLnJlY29ubmVjdENvbmZpcm0oKVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cblx0Ly8g57uE57uH5Y+R6YCB5L+h5oGv5qC85byPXG5cdGZvcm1hdFNlbmREYXRhKHBhcmFtcyl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOjAsIC8vIOWUr+S4gGlk77yM5ZCO56uv55Sf5oiQ77yM55So5LqO5pKk5Zue5oyH5a6a5raI5oGvXG5cdFx0XHRmcm9tX2F2YXRhcjp0aGlzLnVzZXIuYXZhdGFyLC8vIOWPkemAgeiAheWktOWDj1xuXHRcdFx0ZnJvbV9uYW1lOnRoaXMudXNlci5uaWNrbmFtZSB8fCB0aGlzLnVzZXIudXNlcm5hbWUsIC8vIOWPkemAgeiAheaYteensFxuXHRcdFx0ZnJvbV9pZDp0aGlzLnVzZXIuaWQsIC8vIOWPkemAgeiAhWlkXG5cdFx0XHR0b19pZDpwYXJhbXMudG9faWQgfHwgdGhpcy5UTy5pZCwgLy8g5o6l5pS25Lq6L+e+pCBpZFxuXHRcdFx0dG9fbmFtZTpwYXJhbXMudG9fbmFtZSB8fCB0aGlzLlRPLm5hbWUsIC8vIOaOpeaUtuS6ui/nvqQg5ZCN56ewXG5cdFx0XHR0b19hdmF0YXI6cGFyYW1zLnRvX2F2YXRhciB8fCB0aGlzLlRPLmF2YXRhciwgLy8g5o6l5pS25Lq6L+e+pCDlpLTlg49cblx0XHRcdGNoYXRfdHlwZTpwYXJhbXMuY2hhdF90eXBlIHx8IHRoaXMuVE8uY2hhdF90eXBlLCAvLyDmjqXmlLbnsbvlnotcblx0XHRcdHR5cGU6cGFyYW1zLnR5cGUsLy8g5raI5oGv57G75Z6LXG5cdFx0XHRkYXRhOnBhcmFtcy5kYXRhLCAvLyDmtojmga/lhoXlrrlcblx0XHRcdG9wdGlvbnM6cGFyYW1zLm9wdGlvbnMgPyBwYXJhbXMub3B0aW9ucyA6IHt9LCAvLyDlhbbku5blj4LmlbBcblx0XHRcdGNyZWF0ZV90aW1lOihuZXcgRGF0ZSgpKS5nZXRUaW1lKCksIC8vIOWIm+W7uuaXtumXtFxuXHRcdFx0aXNyZW1vdmU6MCwgLy8g5piv5ZCm5pKk5ZueXG5cdFx0XHRzZW5kU3RhdHVzOnBhcmFtcy5zZW5kU3RhdHVzID8gcGFyYW1zLnNlbmRTdGF0dXMgOiBcInBlbmRpbmdcIiAvLyDlj5HpgIHnirbmgIHvvIxzdWNjZXNz5Y+R6YCB5oiQ5YqfLGZhaWzlj5HpgIHlpLHotKUscGVuZGluZ+WPkemAgeS4rVxuXHRcdH1cblx0fVxuXHQvLyDmkqTlm57mtojmga9cblx0cmVjYWxsKG1lc3NhZ2Upe1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzdWx0LHJlamVjdCk9Pntcblx0XHRcdCRILnBvc3QoJy9hcHAvbWVzc2FnZS9yZWNhbGwnLHtcblx0XHRcdFx0dG9faWQ6bWVzc2FnZS50b19pZCxcblx0XHRcdFx0Y2hhdF90eXBlOm1lc3NhZ2UuY2hhdF90eXBlLFxuXHRcdFx0XHRpZDptZXNzYWdlLmlkLFxuXHRcdFx0fSkudGhlbihyZXM9Pntcblx0XHRcdFx0Ly8ga2V55YC877yaY2hhdERldGFpbF/lvZPliY3nlKjmiLdpZF/kvJror53nsbvlnotf5o6l5pS25Lq6L+e+pGlkXG5cdFx0XHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHttZXNzYWdlLmNoYXRfdHlwZX1fJHttZXNzYWdlLnRvX2lkfWBcblx0XHRcdFx0Ly8g6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VXG5cdFx0XHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0RGV0YWlsKGtleSlcblx0XHRcdFx0Ly8g5qC55o2ua+afpeaJvuWvueW6lOiBiuWkqeiusOW9lVxuXHRcdFx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmlkID09PSBtZXNzYWdlLmlkKVxuXHRcdFx0XHRpZihpbmRleCA9PT0gLTEpIHJldHVybjtcblx0XHRcdFx0bGlzdFtpbmRleF0uaXNyZW1vdmUgPSAxXG5cdFx0XHRcdC8vIOWtmOWCqFxuXHRcdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXG5cdFx0XHRcdHJlc3VsdChyZXMpXG5cdFx0XHRcdC8vIOabtOaWsOS8muivneacgOWQjuS4gOadoea2iOaBr+aYvuekulxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXRJdGVtKHtcblx0XHRcdFx0XHRpZDptZXNzYWdlLnRvX2lkLFxuXHRcdFx0XHRcdGNoYXRfdHlwZTptZXNzYWdlLmNoYXRfdHlwZVxuXHRcdFx0XHR9LChpdGVtKT0+e1xuXHRcdFx0XHRcdGl0ZW0uZGF0YSA9ICfkvaDmkqTlm57kuobkuIDmnaHmtojmga8nXG5cdFx0XHRcdFx0aXRlbS51cGRhdGVfdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcblx0XHRcdFx0XHRyZXR1cm4gaXRlbVxuXHRcdFx0XHR9KVxuXHRcdFx0fSkuY2F0Y2goZXJyPT57XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0Ly8g5Y+R6YCB5raI5oGvXG5cdHNlbmQobWVzc2FnZSxvblByb2dyZXNzID0gZmFsc2Upe1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzdWx0LHJlamVjdCk9Pntcblx0XHRcdC8vIOa3u+WKoOa2iOaBr+WOhuWPsuiusOW9lVxuXHRcdFx0bGV0IHsgayB9ID0gdGhpcy5hZGRDaGF0RGV0YWlsKG1lc3NhZ2UpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooahcblx0XHRcdHRoaXMudXBkYXRlQ2hhdExpc3QobWVzc2FnZSlcblx0XHRcdC8vIOmqjOivgeaYr+WQpuS4iue6v1xuXHRcdFx0aWYoIXRoaXMuY2hlY2tPbmxpbmUoKSkgcmV0dXJuIHJlamVjdCgn5pyq5LiK57q/JylcblxuXHRcdFx0Ly8g5LiK5Lyg5paH5Lu2XG5cdFx0XHRsZXQgaXNVcGxvYWQgPSAobWVzc2FnZS50eXBlICE9PSAndGV4dCcgJiYgbWVzc2FnZS50eXBlICE9PSAnZW1vdGljb24nICYmIG1lc3NhZ2UudHlwZSAhPT0gJ2NhcmQnICYmICFtZXNzYWdlLmRhdGEuc3RhcnRzV2l0aCgnaHR0cDovL3Rhbmd6aGUxMjMtY29tJykpXG5cdFx0XHRcblx0XHRcdGxldCB1cGxvYWRSZXN1bHQgPSAnJ1xuXHRcdFx0aWYoaXNVcGxvYWQpe1xuXHRcdFx0XHR1cGxvYWRSZXN1bHQgPSBhd2FpdCAkSC51cGxvYWQoJy9hcHAvdXNlci91cGxvYWQnLHtcblx0XHRcdFx0XHRmaWxlUGF0aDptZXNzYWdlLmRhdGFcblx0XHRcdFx0fSxvblByb2dyZXNzKVxuXHRcdFx0XHRpZighdXBsb2FkUmVzdWx0KXtcblx0XHRcdFx0XHQvLyDlj5HpgIHlpLHotKVcblx0XHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnZmFpbCdcblx0XHRcdFx0XHQvLyDmm7TmlrDmjIflrprljoblj7LorrDlvZVcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSxrKVxuXHRcdFx0XHRcdC8vIOaWree6v+mHjei/nuaPkOekulxuXHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgZGF0YSA9IGlzVXBsb2FkID8gdXBsb2FkUmVzdWx0IDogbWVzc2FnZS5kYXRhXG5cdFx0XHRtZXNzYWdlLmRhdGEgPSBkYXRhXG5cdFx0XHQvL+inhuWxj+WwgemdolxuXHRcdFx0aWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3ZpZGVvJykge1xuXHRcdFx0XHRtZXNzYWdlLm9wdGlvbnMucG9zdGVyID0gJ2h0dHA6Ly9xaW5pdS5kb2N0b3Jmc3MuY29tL3VwbG9hZC8yMDE5MTAzMC8wNzExMDE0Y2Y4NzI0Y2FlOWI5MDZmMDQyOTFkZTkwNi5qcGcnO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5o+Q5Lqk5Yiw5ZCO56uvXG5cdFx0XHQvKiBsZXQgbWVzID0gbWVzc2FnZVxuXHRcdFx0bWVzLmlkPW5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRjb25zb2xlLmxvZyhtZXMpXG5cdFx0XHRsZXQgZGEgPSB7XG5cdFx0XHRcdGNvZGU6Mixcblx0XHRcdFx0bWVzc2FnZTogbWVzXG5cdFx0XHR9XG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRcdHRoaXMuc29ja2V0LnNlbmQoe1xuXHRcdFx0XHRkYXRhOkpTT04uc3RyaW5naWZ5KGRhKSxcblx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnc3VjY2Vzcydcblx0XHRcdFx0XHQvLyDmm7TmlrDmjIflrprljoblj7LorrDlvZVcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VJyxtZXNzYWdlKTtcblx0XHRcdFx0XHR0aGF0LnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSxrKVxuXHRcdFx0XHRcdHJlc3VsdChtZXNzYWdlKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsKCkge1xuXHRcdFx0XHRcdC8vIOWPkemAgeWksei0pVxuXHRcdFx0XHRcdG1lc3NhZ2Uuc2VuZFN0YXR1cyA9ICdmYWlsJ1xuXHRcdFx0XHRcdC8vIOabtOaWsOaMh+WumuWOhuWPsuiusOW9lVxuXHRcdFx0XHRcdHRoYXQudXBkYXRlQ2hhdERldGFpbChtZXNzYWdlLGspXG5cdFx0XHRcdFx0Ly8g5pat57q/6YeN6L+e5o+Q56S6XG5cdFx0XHRcdFx0Ly9yZWplY3QobWVzc2FnZSlcblx0XHRcdFx0fVxuXHRcdFx0fSkgKi9cblx0XHRcdFxuXHRcdFx0Ly9sZXQgZGF0YSA9IGlzVXBsb2FkID8gdXBsb2FkUmVzdWx0IDogbWVzc2FnZS5kYXRhXG5cdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLm9wdGlvbnMpXG5cdFx0XHQkSC5wb3N0KCcvYXBwL21lc3NhZ2Uvc2VuZCcse1xuXHRcdFx0XHR0b19pZDptZXNzYWdlLnRvX2lkIHx8IHRoaXMuVE8uaWQsIFxuXHRcdFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGUgfHwgdGhpcy5UTy5jaGF0X3R5cGUsIFxuXHRcdFx0XHR0eXBlOm1lc3NhZ2UudHlwZSwgXG5cdFx0XHRcdGRhdGEsIFxuXHRcdFx0XHRvcHRpb25zOkpTT04uc3RyaW5naWZ5KG1lc3NhZ2Uub3B0aW9ucyk9PSd7fSc/bnVsbDptZXNzYWdlLm9wdGlvbnNcblx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdC8vIOWPkemAgeaIkOWKn1xuXHRcdFx0XHRtZXNzYWdlLmlkID0gcmVzLmRhdGEuaWRcblx0XHRcdFx0bWVzc2FnZS5zZW5kU3RhdHVzID0gJ3N1Y2Nlc3MnXG5cdFx0XHRcdFxuXHRcdFx0XHRpZihtZXNzYWdlLnR5cGUgPT09ICd2aWRlbycpe1xuXHRcdFx0XHRcdG1lc3NhZ2Uub3B0aW9ucyA9IHJlcy5kYXRhLm9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfmm7TmlrDmjIflrprljoblj7LorrDlvZUnLG1lc3NhZ2UpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNoYXREZXRhaWwobWVzc2FnZSxrKVxuXHRcdFx0XHRyZXN1bHQocmVzKVxuXHRcdFx0fSkuY2F0Y2goZXJyPT57XG5cdFx0XHRcdC8vIOWPkemAgeWksei0pVxuXHRcdFx0XHRtZXNzYWdlLnNlbmRTdGF0dXMgPSAnZmFpbCdcblx0XHRcdFx0Ly8g5pu05paw5oyH5a6a5Y6G5Y+y6K6w5b2VXG5cdFx0XHRcdHRoaXMudXBkYXRlQ2hhdERldGFpbChtZXNzYWdlLGspXG5cdFx0XHRcdC8vIOaWree6v+mHjei/nuaPkOekulxuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdC8vIOa3u+WKoOiBiuWkqeiusOW9lVxuXHRhZGRDaGF0RGV0YWlsKG1lc3NhZ2UsaXNTZW5kID0gdHJ1ZSl7XG5cdFx0Y29uc29sZS5sb2coJ+a3u+WKoOiBiuWkqeiusOW9lScpO1xuXHRcdC8vIOiOt+WPluWvueaWuWlkXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJyA/IChpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkKSA6IG1lc3NhZ2UudG9faWRcblx0XHQvLyBrZXnlgLzvvJpjaGF0RGV0YWlsX+W9k+WJjeeUqOaIt2lkX+S8muivneexu+Wei1/mjqXmlLbkurov576kaWRcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxuXHRcdC8vIOiOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lVxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0RGV0YWlsKGtleSlcblx0XHRjb25zb2xlLmxvZygn6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VJyxsaXN0KVxuXHRcdC8vIOagh+ivhlxuXHRcdG1lc3NhZ2UuayA9ICdrJytsaXN0Lmxlbmd0aFxuXHRcdGxpc3QucHVzaChtZXNzYWdlKVxuXHRcdC8vIOWKoOWFpee8k+WtmFxuXHRcdGNvbnNvbGUubG9nKCfliqDlhaXnvJPlrZgnLGtleSlcblx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXG5cdFx0Ly8g6L+U5ZueXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6bWVzc2FnZSxcblx0XHRcdGs6bWVzc2FnZS5rXG5cdFx0fVxuXHR9XG5cdC8vIOWIoOmZpOaMh+WumuiBiuWkqeiusOW9lVxuXHRhc3luYyBkZWxldGVDaGF0RGV0YWlsSXRlbShtZXNzYWdlLGlzU2VuZCA9IHRydWUpe1xuXHRcdC8vIOiOt+WPluWvueaWuWlkXG5cdFx0bGV0IGlkID0gbWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJyA/IChpc1NlbmQgPyBtZXNzYWdlLnRvX2lkIDogbWVzc2FnZS5mcm9tX2lkKSA6IG1lc3NhZ2UudG9faWRcblx0XHQvLyBrZXnlgLzvvJpjaGF0RGV0YWlsX+W9k+WJjeeUqOaIt2lkX+S8muivneexu+Wei1/mjqXmlLbkurov576kaWRcblx0XHRsZXQga2V5ID0gYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7bWVzc2FnZS5jaGF0X3R5cGV9XyR7aWR9YFxuXHRcdC8vIOiOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lVxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0RGV0YWlsKGtleSlcblx0XHQvLyDmoLnmja5r5p+l5om+5a+55bqU6IGK5aSp6K6w5b2VXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbT0+aXRlbS5rID09PSBtZXNzYWdlLmsgfHwgaXRlbS5pZCA9PT0gbWVzc2FnZS5pZClcblx0XHRpZihpbmRleCA9PT0gLTEpIHJldHVybjtcblx0XHRsaXN0LnNwbGljZShpbmRleCwxKVxuXHRcdC8vIOWtmOWCqFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0fVxuXHQvLyDmm7TmlrDmjIflrprljoblj7LorrDlvZVcblx0YXN5bmMgdXBkYXRlQ2hhdERldGFpbChtZXNzYWdlLGssaXNTZW5kID0gdHJ1ZSl7XG5cdFx0Ly8g6I635Y+W5a+55pa5aWRcblx0XHRsZXQgaWQgPSBtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ3VzZXInID8gKGlzU2VuZCA/IG1lc3NhZ2UudG9faWQgOiBtZXNzYWdlLmZyb21faWQpIDogbWVzc2FnZS50b19pZFxuXHRcdC8vIGtleeWAvO+8mmNoYXREZXRhaWxf5b2T5YmN55So5oi3aWRf5Lya6K+d57G75Z6LX+aOpeaUtuS6ui/nvqRpZFxuXHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHttZXNzYWdlLmNoYXRfdHlwZX1fJHtpZH1gXG5cdFx0Y29uc29sZS5sb2coJ2tleeWAvCcsa2V5KVxuXHRcdC8vIOiOt+WPluWOn+adpeeahOiBiuWkqeiusOW9lVxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0RGV0YWlsKGtleSlcblx0XHRjb25zb2xlLmxvZygn6I635Y+W5Y6f5p2l55qE6IGK5aSp6K6w5b2VJyxsaXN0KVxuXHRcdC8vIOagueaNrmvmn6Xmib7lr7nlupTogYrlpKnorrDlvZVcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmsgPT09IGspXG5cdFx0Y29uc29sZS5sb2coJ+agueaNrmvmn6Xmib7lr7nlupTogYrlpKnorrDlvZUnLGluZGV4KVxuXHRcdGlmKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGxpc3RbaW5kZXhdID0gbWVzc2FnZVxuXHRcdC8vIOWtmOWCqFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0fVxuXHQvLyDojrflj5bogYrlpKnorrDlvZVcblx0Z2V0Q2hhdERldGFpbChrZXkgPSBmYWxzZSl7XG5cdFx0a2V5ID0ga2V5ID8ga2V5IDogYGNoYXREZXRhaWxfJHt0aGlzLnVzZXIuaWR9XyR7dGhpcy5UTy5jaGF0X3R5cGV9XyR7dGhpcy5UTy5pZH1gXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RvcmFnZShrZXkpXG5cdH1cblx0XG5cdC8vIOagvOW8j+WMluS8muivneacgOWQjuS4gOadoea2iOaBr+aYvuekulxuXHRmb3JtYXRDaGF0SXRlbURhdGEobWVzc2FnZSxpc1NlbmQpe1xuXHRcdGxldCBkYXRhID0gbWVzc2FnZS5kYXRhXG5cdFx0c3dpdGNoIChtZXNzYWdlLnR5cGUpe1xuXHRcdFx0Y2FzZSAnZW1vdGljb24nOlxuXHRcdFx0ZGF0YSA9ICdb6KGo5oOFXSdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRkYXRhID0gJ1vlm77niYddJ1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdGRhdGEgPSAnW+ivremfs10nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0ZGF0YSA9ICdb6KeG6aKRXSdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYXJkJzpcblx0XHRcdGRhdGEgPSAnW+WQjeeJh10nXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRkYXRhID0gaXNTZW5kID8gZGF0YSA6IGAke21lc3NhZ2UuZnJvbV9uYW1lfTogJHtkYXRhfWBcblx0XHRyZXR1cm4gZGF0YVxuXHR9XG5cdFxuXHQvKipcblx0IHtcblx0IFx0aWQ6MSwgLy8g5o6l5pS25Lq6L+e+pCBpZFxuXHQgXHRjaGF0X3R5cGU6J3VzZXInLCAvLyDmjqXmlLbnsbvlnosgdXNlcuWNleiBiiBncm91cOe+pOiBilxuXHQgXHRhdmF0YXI6JycsIC8vIOaOpeaUtuS6ui/nvqQg5aS05YOPXG5cdCBcdG5hbWU6J+aYteensCcsIC8vIOaOpeaUtuS6ui/nvqQg5pi156ewXG5cdCBcdHVwZGF0ZV90aW1lOihuZXcgRGF0ZSgpKS5nZXRUaW1lKCksIC8vIOacgOWQjuS4gOadoea2iOaBr+eahOaXtumXtOaIs1xuXHQgXHRkYXRhOlwi5pyA5ZCO5LiA5p2h5raI5oGv5YaF5a65XCIsIC8vIOacgOWQjuS4gOadoea2iOaBr+WGheWuuVxuXHQgXHR0eXBlOid0ZXh0JywgXHRcdCAgIC8vIOacgOWQjuS4gOadoea2iOaBr+exu+Wei1xuXHQgXHRub3JlYWRudW06MCwgLy8g5pyq6K+75pWwXG5cdCBcdGlzdG9wOmZhbHNlLCAvLyDmmK/lkKbnva7pobZcblx0IFx0c2hvd25pY2tuYW1lOjAsIC8vIOaYr+WQpuaYvuekuuaYteensFxuXHQgXHRub3dhcm46MCwgLy8g5raI5oGv5YWN5omT5omwXG5cdCBcdHN0cm9uZ3dhcm46MCwgLy8g5piv5ZCm5byA5ZCv5by65o+Q6YaSXG5cdFx0XG5cdFx0dXNlcl9pZDowLCAvLyDnvqTnrqHnkIblkZhpZFxuXHRcdHJlbWFyazpcIuWFrOWRilwiLCAvLyDnvqTlhazlkYpcblx0XHRpbnZpdGVfY29uZmlybTowLCAvLyDpgoDor7fnoa7orqRcblx0IH1cblx0ICogKiovXG5cdC8vIOWIneWni+WMluS8muivnVxuXHRpbml0Q2hhdExpc3RJdGVtKG1lc3NhZ2Upe1xuXHRcdCAvLyDojrflj5bmnKzlnLDlrZjlgqjkvJror53liJfooahcblx0XHQgbGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQgLy8g5Lya6K+d5piv5ZCm5a2Y5ZyoXG5cdFx0IGxldCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGl0ZW09Pntcblx0XHQgXHRyZXR1cm4gaXRlbS5jaGF0X3R5cGUgPT09IG1lc3NhZ2UuY2hhdF90eXBlICYmIGl0ZW0uaWQgPT09IG1lc3NhZ2UudG9faWRcblx0XHQgfSlcblx0XHQgLy8g5pyA5ZCO5LiA5p2h5raI5oGv5bGV546w5b2i5byPXG5cdFx0IGxldCBkYXRhID0gdGhpcy5mb3JtYXRDaGF0SXRlbURhdGEobWVzc2FnZSx0cnVlKVxuXHRcdCAvLyDkvJror53kuI3lrZjlnKjvvIzliJvlu7rkvJror51cblx0XHQgaWYoaW5kZXggPT09IC0xKXtcblx0XHQgXHRsZXQgY2hhdEl0ZW0gPSB7XG5cdFx0IFx0XHRpZDptZXNzYWdlLnRvX2lkLCAvLyDmjqXmlLbkurov576kIGlkXG5cdFx0IFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGUsIC8vIOaOpeaUtuexu+WeiyB1c2Vy5Y2V6IGKIGdyb3Vw576k6IGKXG5cdFx0IFx0XHRhdmF0YXI6bWVzc2FnZS50b19hdmF0YXIsLy8g5o6l5pS25Lq6L+e+pCDlpLTlg49cblx0XHQgXHRcdG5hbWU6bWVzc2FnZS50b19uYW1lLC8vIOaOpeaUtuS6ui/nvqQg5pi156ewXG5cdFx0IFx0XHR1cGRhdGVfdGltZToobmV3IERhdGUoKSkuZ2V0VGltZSgpLCAvLyDmnIDlkI7kuIDmnaHmtojmga/nmoTml7bpl7TmiLNcblx0XHQgXHRcdGRhdGE6bWVzc2FnZS5kYXRhLCAvLyDmnIDlkI7kuIDmnaHmtojmga/lhoXlrrlcblx0XHQgXHRcdHR5cGU6J3N5c3RlbScsIFx0XHQgICAvLyDmnIDlkI7kuIDmnaHmtojmga/nsbvlnotcblx0XHQgXHRcdG5vcmVhZG51bTowLCAvLyDmnKror7vmlbBcblx0XHQgXHRcdGlzdG9wOmZhbHNlLCAvLyDmmK/lkKbnva7pobZcblx0XHQgXHRcdHNob3duaWNrbmFtZTpmYWxzZSwgLy8g5piv5ZCm5pi+56S65pi156ewXG5cdFx0IFx0XHRub3dhcm46ZmFsc2UsIC8vIOa2iOaBr+WFjeaJk+aJsFxuXHRcdCBcdFx0c3Ryb25nd2FybjpmYWxzZSwgLy8g5piv5ZCm5byA5ZCv5by65o+Q6YaSXG5cdFx0IFx0fVxuXHRcdCBcdC8vIOe+pOiBilxuXHRcdCBcdGlmKG1lc3NhZ2UuY2hhdF90eXBlID09PSAnZ3JvdXAnICYmIG1lc3NhZ2UuZ3JvdXApe1xuXHRcdCBcdFx0Y2hhdEl0ZW0gPSB7XG5cdFx0IFx0XHRcdC4uLmNoYXRJdGVtLFxuXHRcdCBcdFx0XHR1c2VyX2lkOm1lc3NhZ2UuZ3JvdXAudXNlcl9pZCwgLy8g576k566h55CG5ZGYaWRcblx0XHQgXHRcdFx0cmVtYXJrOicnLCAvLyDnvqTlhazlkYpcblx0XHQgXHRcdFx0aW52aXRlX2NvbmZpcm06bWVzc2FnZS5ncm91cC5pbnZpdGVfY29uZmlybSwgLy8g6YKA6K+356Gu6K6kXG5cdFx0IFx0XHR9XG5cdFx0IFx0fVxuXHRcdCBcdGxpc3QudW5zaGlmdChjaGF0SXRlbSlcblx0XHQgXHQvLyDlrZjlgqhcblx0XHQgXHRsZXQga2V5ID0gYGNoYXRsaXN0XyR7dGhpcy51c2VyLmlkfWBcblx0XHQgXHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXG5cdFx0IFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxuXHRcdCBcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0XHQgfVxuXHR9XG5cdC8vIOabtOaWsOS8muivneWIl+ihqFxuXHR1cGRhdGVDaGF0TGlzdChtZXNzYWdlLGlzU2VuZCA9IHRydWUpe1xuXHRcdC8vIOiOt+WPluacrOWcsOWtmOWCqOS8muivneWIl+ihqFxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXG5cdFx0Ly8g5piv5ZCm5aSE5LqO5b2T5YmN6IGK5aSp5LitXG5cdFx0bGV0IGlzQ3VycmVudENoYXQgPSBmYWxzZVxuXHRcdC8vIOaOpeaUtuS6ui/nvqQgaWQv5aS05YOPL+aYteensFxuXHRcdGxldCBpZCA9IDBcblx0XHRsZXQgYXZhdGFyID0gJydcblx0XHRsZXQgbmFtZSA9ICcnXG5cdFx0XG5cdFx0Ly8g5Yik5pat56eB6IGK6L+Y5piv576k6IGKXG5cdFx0aWYobWVzc2FnZS5jaGF0X3R5cGUgPT09ICd1c2VyJyl7IC8vIOengeiBilxuXHRcdFx0Ly8g6IGK5aSp5a+56LGh5piv5ZCm5a2Y5ZyoXG5cdFx0XHRpc0N1cnJlbnRDaGF0ID0gdGhpcy5UTyA/IChpc1NlbmQgPyB0aGlzLlRPLmlkID09PSBtZXNzYWdlLnRvX2lkIDogdGhpcy5UTy5pZCA9PT0gbWVzc2FnZS5mcm9tX2lkKSA6IGZhbHNlXG5cdFx0XHRcblx0XHRcdGlkID0gaXNTZW5kID8gbWVzc2FnZS50b19pZCA6IG1lc3NhZ2UuZnJvbV9pZFxuXHRcdFx0YXZhdGFyID0gaXNTZW5kID8gbWVzc2FnZS50b19hdmF0YXIgOiBtZXNzYWdlLmZyb21fYXZhdGFyXG5cdFx0XHRuYW1lID0gaXNTZW5kID8gbWVzc2FnZS50b19uYW1lIDogbWVzc2FnZS5mcm9tX25hbWVcblx0XHR9IGVsc2UgeyAvLyDnvqTogYpcblx0XHRcdGlzQ3VycmVudENoYXQgPSB0aGlzLlRPICYmICh0aGlzLlRPLmlkID09PSBtZXNzYWdlLnRvX2lkKVxuXHRcdFx0aWQgPSBtZXNzYWdlLnRvX2lkXG5cdFx0XHRhdmF0YXIgPSBtZXNzYWdlLnRvX2F2YXRhclxuXHRcdFx0bmFtZSA9IG1lc3NhZ2UudG9fbmFtZVxuXHRcdH1cblx0XHRcblx0XHQvLyDkvJror53mmK/lkKblrZjlnKhcblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT57XG5cdFx0XHRyZXR1cm4gaXRlbS5jaGF0X3R5cGUgPT09IG1lc3NhZ2UuY2hhdF90eXBlICYmIGl0ZW0uaWQgPT09IGlkXG5cdFx0fSlcblx0XHQvLyDmnIDlkI7kuIDmnaHmtojmga/lsZXnjrDlvaLlvI9cblx0XHQvLyBsZXQgZGF0YSA9IGlzU2VuZCA/IG1lc3NhZ2UuZGF0YSA6IGAke21lc3NhZ2UuZnJvbV9uYW1lfTogJHttZXNzYWdlLmRhdGF9YFxuXHRcdGxldCBkYXRhID0gdGhpcy5mb3JtYXRDaGF0SXRlbURhdGEobWVzc2FnZSxpc1NlbmQpXG5cdFx0Ly8g5Lya6K+d5LiN5a2Y5Zyo77yM5Yib5bu65Lya6K+dXG5cdFx0Ly8g5pyq6K+75pWw5piv5ZCmICsgMVxuXHRcdGxldCBub3JlYWRudW0gPSAoaXNTZW5kIHx8IGlzQ3VycmVudENoYXQpID8gMCA6IDFcblx0XHRpZihpbmRleCA9PT0gLTEpe1xuXHRcdFx0bGV0IGNoYXRJdGVtID0ge1xuXHRcdFx0XHRpZCwgLy8g5o6l5pS25Lq6L+e+pCBpZFxuXHRcdFx0XHRjaGF0X3R5cGU6bWVzc2FnZS5jaGF0X3R5cGUsIC8vIOaOpeaUtuexu+WeiyB1c2Vy5Y2V6IGKIGdyb3Vw576k6IGKXG5cdFx0XHRcdGF2YXRhciwgLy8g5o6l5pS25Lq6L+e+pCDlpLTlg49cblx0XHRcdFx0bmFtZSwgLy8g5o6l5pS25Lq6L+e+pCDmmLXnp7Bcblx0XHRcdFx0dXBkYXRlX3RpbWU6KG5ldyBEYXRlKCkpLmdldFRpbWUoKSwgLy8g5pyA5ZCO5LiA5p2h5raI5oGv55qE5pe26Ze05oizXG5cdFx0XHRcdGRhdGEsIC8vIOacgOWQjuS4gOadoea2iOaBr+WGheWuuVxuXHRcdFx0XHR0eXBlOm1lc3NhZ2UudHlwZSwgXHRcdCAgIC8vIOacgOWQjuS4gOadoea2iOaBr+exu+Wei1xuXHRcdFx0XHRub3JlYWRudW0sIC8vIOacquivu+aVsFxuXHRcdFx0XHRpc3RvcDpmYWxzZSwgLy8g5piv5ZCm572u6aG2XG5cdFx0XHRcdHNob3duaWNrbmFtZTpmYWxzZSwgLy8g5piv5ZCm5pi+56S65pi156ewXG5cdFx0XHRcdG5vd2FybjpmYWxzZSwgLy8g5raI5oGv5YWN5omT5omwXG5cdFx0XHRcdHN0cm9uZ3dhcm46ZmFsc2UsIC8vIOaYr+WQpuW8gOWQr+W8uuaPkOmGklxuXHRcdFx0fVxuXHRcdFx0Ly8g576k6IGKXG5cdFx0XHRpZihtZXNzYWdlLmNoYXRfdHlwZSA9PT0gJ2dyb3VwJyAmJiBtZXNzYWdlLmdyb3VwKXtcblx0XHRcdFx0Y2hhdEl0ZW0uc2hvd25pY2tuYW1lID0gdHJ1ZVxuXHRcdFx0XHRjaGF0SXRlbS5uYW1lID0gbWVzc2FnZS50b19uYW1lXG5cdFx0XHRcdGNoYXRJdGVtID0ge1xuXHRcdFx0XHRcdC4uLmNoYXRJdGVtLFxuXHRcdFx0XHRcdHVzZXJfaWQ6bWVzc2FnZS5ncm91cC51c2VyX2lkLCAvLyDnvqTnrqHnkIblkZhpZFxuXHRcdFx0XHRcdHJlbWFyazpcIlwiLCAvLyDnvqTlhazlkYpcblx0XHRcdFx0XHRpbnZpdGVfY29uZmlybToxLCAvLyDpgoDor7fnoa7orqRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGlzdC51bnNoaWZ0KGNoYXRJdGVtKVxuXHRcdH0gZWxzZSB7IC8vIOWtmOWcqO+8jOabtOaWsOS8muivnVxuXHRcdFx0Ly8g5ou/5Yiw5b2T5YmN5Lya6K+dXG5cdFx0XHRsZXQgaXRlbSA9IGxpc3RbaW5kZXhdXG5cdFx0XHQvLyDmm7TmlrDor6XkvJror53mnIDlkI7kuIDmnaHmtojmga/ml7bpl7TvvIzlhoXlrrnvvIznsbvlnotcblx0XHRcdGl0ZW0udXBkYXRlX3RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cdFx0XHQvLyDnvqTogYpcblx0XHRcdC8qIGlmKG1lc3NhZ2UuY2hhdF90eXBlID09PSAnZ3JvdXAnKXtcblx0XHRcdFx0aXRlbS5uYW1lID0gbWVzc2FnZS50b19uYW1lXG5cdFx0XHR9ICovXG5cdFx0XHRpdGVtLm5hbWU9bWVzc2FnZS50b19uYW1lXG5cdFx0XHRpdGVtLmRhdGEgPSBkYXRhXG5cdFx0XHRpdGVtLnR5cGUgPSBtZXNzYWdlLnR5cGVcblx0XHRcdC8vIOacquivu+aVsOabtOaWsFxuXHRcdFx0aXRlbS5ub3JlYWRudW0gKz0gbm9yZWFkbnVtXG5cdFx0XHQvLyDnva7pobbkvJror51cblx0XHRcdGxpc3QgPSB0aGlzLmxpc3RUb0ZpcnN0KGxpc3QsaW5kZXgpXG5cdFx0fVxuXHRcdC8vIOWtmOWCqFxuXHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0XHQvLyDmm7TmlrDmnKror7vmlbBcblx0XHR0aGlzLnVwZGF0ZUJhZGdlKGxpc3QpXG5cdFx0Ly8g6YCa55+l5pu05pawdnVleOS4reeahOiBiuWkqeS8muivneWIl+ihqFxuXHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0XHRyZXR1cm4gbGlzdFxuXHR9XG5cdC8vIOabtOaWsOacquivu+aVsFxuXHRhc3luYyB1cGRhdGVCYWRnZShsaXN0ID0gZmFsc2Upe1xuXHRcdC8vIOiOt+WPluaJgOacieS8muivneWIl+ihqFxuXHRcdGxpc3QgPSBsaXN0ID8gbGlzdCA6IHRoaXMuZ2V0Q2hhdExpc3QoKVxuXHRcdC8vIOe7n+iuoeaJgOacieacquivu+aVsFxuXHRcdGxldCB0b3RhbCA9IDBcblx0XHRsaXN0LmZvckVhY2goaXRlbT0+e1xuXHRcdFx0dG90YWwgKz0gaXRlbS5ub3JlYWRudW1cblx0XHR9KVxuXHRcdC8vIOiuvue9ruW6lemDqOWvvOiIquagj+inkuagh1xuXHRcdGlmKHRvdGFsID4gMCl7XG5cdFx0XHR1bmkuc2V0VGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRpbmRleDowLFxuXHRcdFx0XHR0ZXh0OnRvdGFsIDw9IDk5ID8gdG90YWwudG9TdHJpbmcoKSA6ICc5OSsnXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR1bmkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xuXHRcdFx0XHRpbmRleDowXG5cdFx0XHR9KVxuXHRcdH1cblx0XHR1bmkuJGVtaXQoJ3RvdGFsTm9yZWFkbnVtJyx0b3RhbClcblx0fVxuXHQvLyDmm7TmlrDmjIflrprkvJror51cblx0YXN5bmMgdXBkYXRlQ2hhdEl0ZW0od2hlcmUsZGF0YSl7XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmlkID09PSB3aGVyZS5pZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gd2hlcmUuY2hhdF90eXBlKVxuXHRcdGlmKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdC8vIOabtOaWsOaVsOaNrlxuXHRcdGlmKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdGxpc3RbaW5kZXhdID0gZGF0YShsaXN0W2luZGV4XSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlzdFtpbmRleF0gPSBkYXRhXG5cdFx0fVxuXHRcdFxuXHRcdGxldCBrZXkgPSBgY2hhdGxpc3RfJHt0aGlzLnVzZXIuaWR9YFxuXHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblxuXHRcdC8vIOabtOaWsOS8muivneWIl+ihqOeKtuaAgVxuXHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0fVxuXHQvLyDor7vlj5bkvJror51cblx0YXN5bmMgcmVhZENoYXRJdGVtKGlkLGNoYXRfdHlwZSl7XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmlkID09PSBpZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gY2hhdF90eXBlKVxuXHRcdGlmKGluZGV4ICE9PSAtMSl7XG5cdFx0XHRsaXN0W2luZGV4XS5ub3JlYWRudW0gPSAwXG5cdFx0XHRsZXQga2V5ID0gYGNoYXRsaXN0XyR7dGhpcy51c2VyLmlkfWBcblx0XHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxuXHRcdFx0dGhpcy51cGRhdGVCYWRnZSgpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0XHR9XG5cdH1cblx0Ly8g5Yig6Zmk5oyH5a6a5Lya6K+dXG5cdGFzeW5jIHJlbW92ZUNoYXRJdGVtKGlkLGNoYXRfdHlwZSl7XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmlkID09PSBpZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gY2hhdF90eXBlKVxuXHRcdGlmKGluZGV4ICE9PSAtMSl7XG5cdFx0XHRsaXN0LnNwbGljZShpbmRleCwxKVxuXHRcdFx0XG5cdFx0XHRsZXQga2V5ID0gYGNoYXRsaXN0XyR7dGhpcy51c2VyLmlkfWBcblx0XHRcdHRoaXMuc2V0U3RvcmFnZShrZXksbGlzdClcblx0XHRcdC8vIOmHjeaWsOiOt+WPluaAu+acquivu+aVsFxuXHRcdFx0dGhpcy51cGRhdGVCYWRnZSgpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0XHR9XG5cdH1cblx0Ly8g5riF56m66IGK5aSp6K6w5b2VXG5cdGFzeW5jIGNsZWFyQ2hhdERldGFpbChpZCxjaGF0X3R5cGUpe1xuXHRcdGxldCBrZXkgPSBgY2hhdERldGFpbF8ke3RoaXMudXNlci5pZH1fJHtjaGF0X3R5cGV9XyR7aWR9YFxuXHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG5cdFx0XG5cdFx0Ly8g6I635Y+W5omA5pyJ5Lya6K+d5YiX6KGoXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmdldENoYXRMaXN0KClcblx0XHQvLyDmib7liLDlvZPliY3kvJror51cblx0XHRsZXQgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpdGVtPT5pdGVtLmlkID09PSBpZCAmJiBpdGVtLmNoYXRfdHlwZSA9PT0gY2hhdF90eXBlKVxuXHRcdGlmKGluZGV4ICE9PSAtMSl7XG5cdFx0XHRsaXN0W2luZGV4XS5kYXRhID0gJydcblx0XHRcdFxuXHRcdFx0bGV0IGtleSA9IGBjaGF0bGlzdF8ke3RoaXMudXNlci5pZH1gXG5cdFx0XHR0aGlzLnNldFN0b3JhZ2Uoa2V5LGxpc3QpXG5cdFx0XHQvLyDmm7TmlrDkvJror53liJfooajnirbmgIFcblx0XHRcdHVuaS4kZW1pdCgnb25VcGRhdGVDaGF0TGlzdCcsbGlzdClcblx0XHR9XG5cdH1cblx0Ly8g6I635Y+W5pys5Zyw5a2Y5YKo5Lya6K+d5YiX6KGoXG5cdGdldENoYXRMaXN0KCl7XG5cdFx0bGV0IGtleSA9IGBjaGF0bGlzdF8ke3RoaXMudXNlci5pZH1gXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RvcmFnZShrZXkpXG5cdH1cblx0Ly8g6I635Y+W5oyH5a6a5Lya6K+dXG5cdGdldENoYXRMaXN0SXRlbShpZCxjaGF0X3R5cGUpe1xuXHRcdC8vIOiOt+WPluaJgOacieS8muivneWIl+ihqFxuXHRcdGxldCBsaXN0ID0gdGhpcy5nZXRDaGF0TGlzdCgpXG5cdFx0Ly8g5om+5Yiw5b2T5YmN5Lya6K+dXG5cdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoaXRlbT0+aXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5jaGF0X3R5cGUgPT09IGNoYXRfdHlwZSlcblx0XHRpZihpbmRleCAhPT0gLTEpe1xuXHRcdFx0cmV0dXJuIGxpc3RbaW5kZXhdXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdC8vIOiOt+WPluWtmOWCqFxuXHRnZXRTdG9yYWdlKGtleSl7XG5cdFx0bGV0IGxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoa2V5KVxuXHRcdHJldHVybiBsaXN0ID8gSlNPTi5wYXJzZShsaXN0KSA6IFtdXG5cdH1cblx0Ly8g6K6+572u5a2Y5YKoXG5cdHNldFN0b3JhZ2Uoa2V5LHZhbHVlKXtcblx0XHRyZXR1cm4gdW5pLnNldFN0b3JhZ2VTeW5jKGtleSxKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG5cdH1cblx0Ly8g5pWw57uE572u6aG2XG5cdGxpc3RUb0ZpcnN0KGFycixpbmRleCl7XG5cdFx0aWYgKGluZGV4ICE9IDApIHtcblx0XHRcdGFyci51bnNoaWZ0KGFyci5zcGxpY2UoaW5kZXgsMSlbMF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 22);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 22 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })
],[[0,"app-config"]]]);