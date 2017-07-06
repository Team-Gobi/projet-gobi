<template>
<md-card>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title"> {{ movieList[$route.query.index].title }} </div>
      <div class="md-subhead">Date de sortie: {{ movieList[$route.query.index].release_date}}</div>
    </md-card-header-text>
  </md-card-header>

  <md-layout md-align="center" md-gutter>
  <md-card-media>
  <router-link v-bind:to="{path: './'}"><img v-bind:src="movieList[$route.query.index] | toFilmPoster" alt="Image Film"></router-link>
  </md-card-media>
  </md-layout>

  <md-card-content>
    {{ movieList[$route.query.index].overview }}
    <div><p><strong>Popularité:</strong></p>
      <md-progress class="md-primary" :md-progress="movieList[$route.query.index].vote_average * 10"></md-progress>
    </div>
  </md-card-content>
</md-card>
</template>

<script>
const LOCALSTORAGE_KEY = 'movie-list-storage';

export default {
    name: 'movie',
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
    methods: {
        remove (movie) {
            let index = this.movieList.indexOf(movie);
            this.movieList.splice(index, 1);
        }
    },
    filters: {
        toFilmPoster (movie) {
            return `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
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

<style>
  
</style>
