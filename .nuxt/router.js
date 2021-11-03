import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51c88c83 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _e0e08e6a = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _05a971d2 = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _c84acdbc = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _30105b7c = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _5cf4c42e = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _045b27ae = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _4c4a2b38 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _c4fcb2a8 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _ac1779dc = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _02cefe5a = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _ced8dc1a = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _5486fb50 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _432ff59a = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _ea9a51e8 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _9dfcb88e = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _06ec34b1 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _4b361b0c = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))
const _058a3ad5 = () => interopDefault(import('../pages/ResetPassword.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _51c88c83,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _e0e08e6a,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _05a971d2,
      name: "billing___en"
    }, {
      path: "payment",
      component: _c84acdbc,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _30105b7c,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _5cf4c42e,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _e0e08e6a,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _05a971d2,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _c84acdbc,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _30105b7c,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _5cf4c42e,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _045b27ae,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _4c4a2b38,
    name: "home___de"
  }, {
    path: "/Home",
    component: _4c4a2b38,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _c4fcb2a8,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _ac1779dc,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _02cefe5a,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _ced8dc1a,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _5486fb50,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _432ff59a,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _ea9a51e8,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _9dfcb88e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _06ec34b1,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _4b361b0c,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _058a3ad5,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _058a3ad5,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _51c88c83,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _e0e08e6a,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _05a971d2,
      name: "billing___de"
    }, {
      path: "payment",
      component: _c84acdbc,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _30105b7c,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _5cf4c42e,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _e0e08e6a,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _05a971d2,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _c84acdbc,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _30105b7c,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _5cf4c42e,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _045b27ae,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _4c4a2b38,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _c4fcb2a8,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _ac1779dc,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _02cefe5a,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _ced8dc1a,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _5486fb50,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _432ff59a,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _ea9a51e8,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _9dfcb88e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _06ec34b1,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _4b361b0c,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _058a3ad5,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _058a3ad5,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _c4fcb2a8,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _4b361b0c,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _51c88c83,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _c4fcb2a8,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _4b361b0c,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _51c88c83,
    name: "category___en"
  }, {
    path: "/",
    component: _4c4a2b38,
    name: "home___en"
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
