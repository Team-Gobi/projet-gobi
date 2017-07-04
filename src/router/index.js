import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import MovieList from '@/components/MovieList';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/MovieList',
            name: 'MovieList',
            component: MovieList
        },
        {
            path: '/movie',
            name: 'Movie',
            component: Movie
        }
    ]
});
