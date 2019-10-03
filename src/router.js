import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import ForgotPasswordSuccess from './views/ForgotPasswordSuccess.vue';
import Verify from './views/Verify.vue';
import Reset from './views/Reset';
import Homepage from "./views/Homepage";
import Profile from "./views/Profile";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/login",
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },

        {
            path: '/forgotpassword',
            name: 'forgotpassword',
            component: ForgotPassword
        },

        {
            path: '/forgotpasswordsuccess',
            name: 'forgotpasswordsuccess',
            component: ForgotPasswordSuccess
        },

        {
            path: '/verify',
            name: 'verify',
            component: Verify
        },

        {
            path: '/reset',
            name: 'reset',
            component: Reset
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }

    ]
})
