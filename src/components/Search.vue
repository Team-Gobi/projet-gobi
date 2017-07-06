<template>
    <div>
      <md-list>
        <md-list-item>
          <md-input-container>
              <md-icon>add_to_queue</md-icon>
              <label>Rechercher un film à ajouter</label>
              <md-input v-model="searchRequest"></md-input>
          </md-input-container>
        </md-list-item>
      </md-list>
        <div class="phone-viewport">
            <md-list class="custom-list md-triple-line" v-for="result in results" v-bind:src="result" v-bind:key="result">
                <md-list-item>
                    <md-avatar>
                        <img v-bind:src="result | toFilmPoster" alt="Image Film">
                    </md-avatar>
                    <div class="md-list-text-container">
                        <span>{{ result.title}}</span>
                        <span>{{ result.release_date }}</span>
                        <span> {{ result.overview }}</span>
                    </div>

                    <md-button v-on:click="addMovie(result, result.id)" class="md-icon-button material-icons">
                        <md-icon>add</md-icon>
                    </md-button>
                    <md-divider class="md-inset"></md-divider>
                </md-list-item>
            </md-list>
        </div>

    </div>
</template>

<script>
const LOCALSTORAGE_KEY = 'movie-list-storage';
import axios from 'axios';

export default {
    name: 'search',
    data () {
        return {
            searchRequest: '',
            results: []
        };
    },
    methods: {
        displaySearch () {
            if (this.searchRequest !== '') {
                axios.get(`https://amc.ig.he-arc.ch/tmdb/search/movie?query=${this.searchRequest}`)
                .then((response) => {
                    console.log(response);
                    this.results = response.data.results.map(result => result);
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                this.results = [];
            }
        },
        addMovie (movie, id) {
            let movieList;
            try {
                movieList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
                if (!movieList) {
                    throw new Error();
                }
            } catch (e) {
                movieList = [];
            }
            movieList.push(movie);
            this.searchRequest = '';
            const listJson = JSON.stringify(movieList);
            localStorage.setItem(LOCALSTORAGE_KEY, listJson);
            this.results = [];
            window.location.reload(true);
        }
    },
    filters: {
        toFilmPoster (movie) {
            return 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
        }
    },
    watch: {
        searchRequest: function () {
            this.displaySearch();
        }
    }
};
</script>

<style>

</style>
