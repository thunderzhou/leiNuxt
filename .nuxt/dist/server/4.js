exports.ids = [4];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=efc9e94c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<nav class=\"navbar navbar-light\">", "</nav>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("conduit")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\">", "</ul>", [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "exact": "",
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm.user ? [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/editor"
    }
  }, [_c('i', {
    staticClass: "ion-compose"
  }), _vm._v(" New Article\n                      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/settings"
    }
  }, [_c('i', {
    staticClass: "ion-gear-a"
  }), _vm._v(" Settings\n                      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/profile/123"
    }
  }, [_c('img', {
    staticClass: "user-pic"
  }), _vm._v("\n                          lpz999\n                      ")])], 1)] : [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Sign in")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "register"
    }
  }, [_vm._v("Sign up")])], 1)]], 2)], 2)]), _vm._ssrNode(" "), _c('nuxt-child'), _vm._ssrNode(" <footer><div class=\"container\"><a href=\"/\" class=\"logo-font\">conduit</a> <span class=\"attribution\">\n          An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed under MIT.\n          </span></div></footer>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=efc9e94c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&

/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: "layout",
  computed: {
    ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "068ef1c6"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map