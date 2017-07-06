<template>
    <div class="home">
        <search></search>   
        <md-list>
            <md-list-item>
            <h1 class="md-title">
                <strong>
                    <md-icon>movie</md-icon>
                    Mes Films
                </strong>
            </h1>
            </md-list-item>
        </md-list>
        <md-list>
            <md-list-item>
                <md-input-container>
                    <md-icon>search</md-icon>
                    <label>Rechercher dans ma liste</label>
                    <md-input v-model="query"></md-input>
                </md-input-container>
            </md-list-item>
        </md-list>
        <md-list>
            <md-list-item v-for="(movie, index) in listFiltre" v-bind:key="index">
                <md-divider class="md-inset"></md-divider>
                <md-avatar>
                    <img v-bind:src="movie | toFilmPoster" alt="Image">
                </md-avatar>
                <md-layout class="md-list-text-container" md-flex-offset="5">
                    <router-link v-bind:to="{path: '/movie', query: {index: movieList.indexOf(movie)}}">
                     <span><b>{{ movie.title }}</b></span>
                    </router-link>
                </md-layout>
                <md-button v-on:click="remove(movie)" class="md-icon-button">
                    <md-icon>remove</md-icon>
                </md-button>
            </md-list-item>
        </md-list>
  </div>
</template>

<script>

import Search from './Search';
const LOCALSTORAGE_KEY = 'movie-list-storage';

export default {
    name: 'home',
    data () {
        let movieList;
        try {
            movieList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            if (!movieList) {
                throw new Error();
            }
        } catch (e) {
            movieList = [];
        }
        return {
            query: '',
            titreFilm: '',
            movieList
        };
    },
    components: {
        search: Search
    },
    methods: {
        addToList () {
            const movie = {
                title: this.titreFilm
            };
            this.movieList.push(movie);
        },
        remove (movie) {
            let index = this.movieList.indexOf(movie);
            this.movieList.splice(index, 1);
        }
    },
    computed: {
        listFiltre () {
            return this.movieList.filter(movie => {
                return movie.title.toLowerCase().indexOf(this.query.toLowerCase()) === 0;
            });
        }
    },
    filters: {
        toFilmPoster (movie) {
            return 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
        }
    },
    watch: {
        movieList: {
            handler: function (val, oldval) {
                const listJson = JSON.stringify(this.movieList);
                localStorage.setItem(LOCALSTORAGE_KEY, listJson);
            },
            deep: true

        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
