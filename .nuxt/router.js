import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36033df3 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _14255430 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7014a100 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7a6ea000 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _64a570ac = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2a346436 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _6138e34d = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _36033df3,
    children: [{
      path: "/",
      component: _14255430,
      name: "home"
    }, {
      path: "/login",
      component: _7014a100,
      name: "login"
    }, {
      path: "/register",
      component: _7014a100,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7a6ea000,
      name: "profile"
    }, {
      path: "/settings",
      component: _64a570ac,
      name: "settings"
    }, {
      path: "/editor",
      component: _2a346436,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6138e34d,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
