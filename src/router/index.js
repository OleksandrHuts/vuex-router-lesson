import Vue from 'vue';
import VueRouter from 'vue-router';
import PageWithKittens from '../components/PageWithKittens.vue';
import PageWithPuppies from '../components/PageWithPuppies.vue';
import MoviesList from '../components/MoviesList.vue';
import MovieSingle from '../components/MovieSingle.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/cats',
        name: 'PageWithKittens',
        component: PageWithKittens
    },
    {
        path: '/dogs',
        name: 'PageWithPuppies',
        component: PageWithPuppies
    },
    {
        path: '/movies',
        name: 'MoviesList',
        component: MoviesList
    },
    {
        path: '/movie/:id',
        name: 'MovieSingle',
        component: MovieSingle
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;