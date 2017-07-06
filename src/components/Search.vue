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

                    <md-button v-on:click="addMovie(result)" class="md-icon-button material-icons">
                        <md-icon>add</md-icon>
                    </md-button>
                    <md-divider class="md-inset"></md-divider>
                </md-list-item>
            </md-list>
        </div>

    </div>
</template>

<script>
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
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=44d6208f7585fb3802a31ecaec254aef&language=fr&query=${this.searchRequest}`)
                .then((response) => {
                    this.results = response.data.results.map(result => result);
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                this.searchRequest = '';
                this.results = [];
            }
        },
        addMovie (movie) {
            this.$emit('addMovie', movie);
            this.results = [];
            this.searchRequest = '';
        }
    },
    filters: {
        toFilmPoster (movie) {
            if (movie.poster_path !== null) {
                return `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
            } else {
                return 'static/logo-gobi.png';
            }
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
