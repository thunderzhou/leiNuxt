exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=b162d6a2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth-page"
  }, [_vm._ssrNode("<div class=\"container page\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">", "</div>", [_vm._ssrNode("<h1 class=\"text-xs-center\">" + _vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')) + "</h1> "), _vm._ssrNode("<p class=\"text-xs-center\">", "</p>", [_vm.isLogin ? _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Need an account?")]) : _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Have an account?")])], 1), _vm._ssrNode(" <ul class=\"error-messages\">" + _vm._ssrList(_vm.errors, function (messages, field) {
    return _vm._ssrList(messages, function (message, index) {
      return "<li>" + _vm._ssrEscape(_vm._s(field) + " " + _vm._s(message)) + "</li>";
    });
  }) + "</ul> <form>" + (!_vm.isLogin ? "<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\"></fieldset>" : "<!---->") + " <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">" + _vm._ssrEscape("\n                        " + _vm._s(_vm.isLogin ? 'Sign in' : 'Sign up') + "\n                    ") + "</button></form>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=b162d6a2&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js


//登录接口
const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};

//注册接口
const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&

// 仅在客户端加载 js-cookie 包
const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "login",
  middleware: 'notAuthenticated',
  // 在路由匹配组件渲染之前会先执行中间件处理，直接写文件名字，如果有多个中间件处理，就写成数组，里面写所有需要的中间件文件名
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }
  },
  data() {
    return {
      user: {
        username: '',
        email: '2416652979@qq.com',
        password: 'lei123yun'
      },
      errors: {} // 错误信息
    };
  },

  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user);
        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', JSON.stringify(data.user));
        // 跳转到首页
        this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "492b4669"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map