import {createWebHistory, createRouter} from 'vue-router';
import Base from './components/Route/base.vue';
import Login from './components/Route/login.vue';
import Profile from './components/Route/profile.vue';
import pageNotFound from './components/Route/pageNotFound.vue';
const routes = [
    {
        name:'Base',
        path:'/',
        component:Base
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
    {
        name:'profile',
        path:'/profile/:name',
        component:Profile
    },
    {
        name:'pageNotFound',
        path:'/:pathMatch(.*)*',
        component:pageNotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;