import Vue from 'vue'

import App from './components/App.vue'

Vue.config.debug = true;


Vue.use(VueRouter);

let router = new VueRouter();
router.beforeEach(function (transition) {
    let to = transition.to;
    console.log( to.path );
    
    if (transition.to.path === '/nothing') {
        transition.abort();
    } else {
        transition.next()
    }
})

router.map({
    '/': {
        component: App,
        subRoutes: {
            '/index': {
                name: 'index',
                component: null,
            },
        }
    }
})
router.redirect({
  '/': '/index',
  '/manager': '/manager/info',
})

let route_show = Vue.extend({});
router.start(route_show, '#app');