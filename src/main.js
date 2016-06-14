import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Index from './components/Index.vue'
import Info from './components/Info.vue'
import Hoppies from './components/Hoppies.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

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
                component: Index,
            },
            '/info': {
                name: 'info',
                component: Info,
            },
            '/hoppies': {
                name: 'hoppies',
                component: Hoppies,
            },
            '/skills': {
                name: 'skills',
                component: Skills,
            },
            '/contact': {
                name: 'contact',
                component: Contact,
            },

        }
    }
})
router.redirect({
  '/': '/index',
  //'/manager': '/manager/info',
})

let route_show = Vue.extend({});
router.start(route_show, '#app');