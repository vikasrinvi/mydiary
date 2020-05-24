(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: [{
        name: 'id',
        trans: 'table.id',
        titleClass: 'width-5-percent text-center',
        dataClass: 'text-center'
      }, {
        name: 'name',
        trans: 'table.name',
        sortField: 'name'
      }, {
        name: 'created_at',
        trans: 'table.created_at',
        titleClass: 'width-10-percent',
        sortField: 'created_at'
      }, {
        name: '__actions',
        trans: 'table.action',
        titleClass: 'text-center width-20-percent',
        dataClass: 'text-center'
      }],
      itemActions: [{
        name: 'view-item',
        icon: 'fas fa-eye',
        "class": 'btn btn-success'
      }, {
        name: 'edit-item',
        permission: 'UPDATE_SERIES',
        icon: 'fas fa-pencil-alt',
        "class": 'btn btn-info'
      }, {
        name: 'delete-item',
        permission: 'DESTROY_SERIES',
        icon: 'fas fa-trash-alt',
        "class": 'btn btn-danger'
      }]
    };
  },
  methods: {
    tableActions: function tableActions(action, data) {
      var _this = this;

      if (action == 'edit-item') {
        this.$router.push({
          name: 'dashboard.series.edit',
          params: {
            id: data.id
          }
        });
      } else if (action == 'delete-item') {
        this.$http["delete"]('series/' + data.id).then(function (response) {
          toastr.success('You delete the series!');

          _this.$emit('reload');
        })["catch"](function (_ref) {
          var response = _ref.response;

          if (typeof response.data.error !== 'string' && response.data.error) {
            toastr.error(response.data.error.message);
          } else {
            toastr.error(response.status + ' : Resource ' + response.statusText);
          }
        });
      } else if (action == 'view-item') {
        window.open('/series/' + data.id, '_blank');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vue-table",
          {
            attrs: {
              title: _vm.$t("page.series"),
              fields: _vm.fields,
              "api-url": "series",
              "item-actions": _vm.itemActions,
              "show-paginate": ""
            },
            on: { "table-action": _vm.tableActions }
          },
          [
            _c(
              "template",
              { slot: "buttons" },
              [
                _vm.checkPermission("CREATE_SERIES")
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-sm btn-success",
                        attrs: { to: { name: "dashboard.series.create" } }
                      },
                      [_vm._v(_vm._s(_vm.$t("page.create")))]
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/modules/series/Series.vue":
/*!**********************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Series.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Series.vue?vue&type=template&id=78f09544& */ "./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544&");
/* harmony import */ var _Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Series.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/series/Series.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Series.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Series.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Series.vue?vue&type=template&id=78f09544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Series.vue?vue&type=template&id=78f09544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_78f09544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);