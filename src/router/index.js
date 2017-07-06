import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Movie from '@/components/Movie';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/movie',
            name: 'Movie',
            component: Movie
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
});
