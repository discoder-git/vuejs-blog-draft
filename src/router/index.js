import Vue              from 'vue';
import Router           from 'vue-router';
import AuthGuard        from './auth-guard.js';

import PageNotFound     from '../components/page/page-404.vue';
import PageAdmin        from '../components/page/page-admin.vue';
import PageHome         from '../components/page/page-home.vue';
import PageAboutProject from '../components/page/page-about-project.vue';
import PageArticleList  from '../components/page/page-article-list.vue';
import PageArticleItem  from '../components/page/page-article-item.vue';
import PageTestimonial  from '../components/page/page-testimonial.vue';
import PageCredits      from '../components/page/page-credits.vue';
import PageChangelog    from '../components/page/page-changelog.vue';
import TestimonialItem  from '../components/testimonial/testimonial-item.vue';
import UserSignin       from '../components/user/user-signin.vue';
import UserSignup       from '../components/user/user-signup.vue';
import UserProfile      from '../components/user/user-profile.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        },
        {
            path: '/admin',
            name: 'PageAdmin',
            component: PageNotFound,
            beforeEnter: AuthGuard
        },
        {
            path: '/',
            name: 'PageHome',
            component: PageHome
        },
        {
            path: '/about-project',
            name: 'PageAboutProject',
            component: PageAboutProject
        },
        {
            path: '/blog',
            name: 'PageArticleList',
            component: PageArticleList
        },
        {
            path: '/blog/:id',
            name: 'PageArticleItem',
            props: true,
            component: PageArticleItem
        },
        {
            path: '/wall',
            name: 'PageTestimonial',
            component: PageNotFound,
            beforeEnter: AuthGuard
        },
        {
            path: '/wall/:id',
            name: 'TestimonialItem',
            props: true,
            component: PageNotFound,
            beforeEnter: AuthGuard
        },
        {
            path: '/changelog',
            name: 'PageChangelog',
            component: PageChangelog
        },
        {
            path: '/signin',
            name: 'UserSignin',
            component: PageNotFound,
            beforeEnter: AuthGuard
        },
        {
            path: '/signup',
            name: 'UserSignup',
            component: PageNotFound,
            beforeEnter: AuthGuard
        },
        {
            path: '/profile',
            name: 'UserProfile',
            component: PageNotFound,
            beforeEnter: AuthGuard
        }
    ],
    mode: 'history'
});
