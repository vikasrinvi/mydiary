(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vuedraggable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: !(function webpackMissingModule() { var e = new Error("Cannot find module 'vuedraggable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      series: undefined,
      articles: [],
      articles_available: []
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('series/edit/' + this.$route.params.id).then(function (response) {
      _this.series = response.data.series;
      _this.articles = _this.series.articles; // debugger

      _this.articles_available = response.data.articles_available;
      $('#series-name').val(_this.series.name);
      $('#series-desc').val(_this.series.description);
    });
  },
  methods: {
    addArticle: function addArticle() {
      var article_id = $('#new-art-select').val();

      if (article_id == 0) {
        return;
      }

      var article;
      this.articles_available.forEach(function (art, ind) {
        if (art.id == article_id) {
          article = art;
          return;
        }
      });
      this.articles.push(article);
      $('#option-' + article_id).css('display', 'none');
      $('#new-art-select').val(0);
    },
    deleteArticle: function deleteArticle(id) {
      var index_to_remove;
      this.articles.forEach(function (art, ind) {
        if (art.id == id) {
          index_to_remove = ind;
          return;
        }
      });
      this.articles.splice(index_to_remove, 1);
    },
    updateSeries: function updateSeries() {
      var new_articles = this.articles.map(function (_ref) {
        var id = _ref.id;
        return id;
      });
      console.log();
      this.$http.patch('series/order/' + this.$route.params.id, {
        articles: new_articles
      }).then(function (response) {
        toastr.success('Series updated!');
      });
    },
    updateInfo: function updateInfo() {
      this.$http.patch('series/' + this.$route.params.id, {
        name: $('#series-name').val(),
        description: $('#series-desc').val()
      }).then(function (response) {
        toastr.success('Series updated!');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#articles-list, #new-article-wrap {\n\twidth:80%;\n\tmargin:auto;\n}\n#articles-list .article-wrap {\n\tborder:1px solid black;\n\tbackground-color:white;\n\tbox-shadow:0px 0px 3px black;\n\tmargin:3px 0px;\n\twidth:100%;\n\tpadding:5px;\n\tfont-size:18px;\n\tborder-radius:5px;\n}\n#edit-wrap {\n\tmargin:20px 0px;\n}\n#series-name, #series-desc{\n\twidth:75%;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "edit-wrap" } }, [
    _c("div", { staticClass: "text-center" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updateInfo($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "form-group", attrs: { id: "info-form-wrap" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "name" }
                  },
                  [_vm._v(_vm._s(_vm.$t("form.title")))]
                ),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "description" }
                  },
                  [_vm._v(_vm._s(_vm.$t("form.description")))]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3 offset-6 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success form-control d-inline",
                      attrs: { type: "submit" }
                    },
                    [_vm._v(_vm._s(_vm.$t("form.edit")))]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _c("hr"),
    _c("br"),
    _vm._v(" "),
    _c("div", [
      _c("h3", { staticClass: "text-center" }, [
        _vm._v(_vm._s(_vm.$t("page.articles")) + ":")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "articles-list" } },
        [
          _c(
            "draggable",
            {
              on: {
                start: function($event) {
                  _vm.drag = true
                },
                end: function($event) {
                  _vm.drag = false
                }
              },
              model: {
                value: _vm.articles,
                callback: function($$v) {
                  _vm.articles = $$v
                },
                expression: "articles"
              }
            },
            _vm._l(_vm.articles, function(art) {
              return _c(
                "div",
                { key: art.id, staticClass: "row article-wrap" },
                [
                  _c("div", { staticClass: "col-10" }, [
                    _c("span", { staticClass: "article" }, [
                      _vm._v(_vm._s(art.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger d-inline",
                        on: {
                          click: function($event) {
                            return _vm.deleteArticle(art.id)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("form.delete")))]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.articles_available.length > 0
        ? _c("div", { attrs: { id: "new-article-wrap" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-10" }, [
                _c(
                  "select",
                  {
                    staticClass: "form-control form-control-lg",
                    attrs: { id: "new-art-select" }
                  },
                  [
                    _c(
                      "option",
                      { staticClass: "add-art-option", attrs: { value: "0" } },
                      [_vm._v(_vm._s(_vm.$t("form.none")))]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.articles_available, function(art) {
                      return _c("option", {
                        key: art.id,
                        staticClass: "add-art-option",
                        attrs: { id: "option-" + art.id },
                        domProps: {
                          value: art.id,
                          textContent: _vm._s(art.title)
                        }
                      })
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        return _vm.addArticle()
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("form.create")))]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success d-inline",
            on: { click: _vm.updateSeries }
          },
          [_vm._v(_vm._s(_vm.$t("form.submit")))]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-10" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "series-name", name: "name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-10" }, [
      _c("textarea", {
        staticClass: "form-control",
        attrs: { id: "series-desc", name: "description", rows: "2" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/modules/series/Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Edit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b5a2699e& */ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/series/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=b5a2699e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/series/Edit.vue?vue&type=template&id=b5a2699e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b5a2699e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);