<template>
    <div>
        <md-input-container>
            <label>Titre de film</label>
            <md-input v-model="searchRequest"></md-input>
        </md-input-container>
        <div class="phone-viewport">
            <md-list class="custom-list md-triple-line" v-for="result in results" v-bind:src="result" v-bind:key="result">
                <md-list-item>
                    <md-avatar>
                        <img v-bind:src="result | toFilmPoster" alt="People">
                    </md-avatar>
                    <div class="md-list-text-container">
                        <span>{{ result.title}}</span>
                        <span>{{ result.release_date }}</span>
                        <p> {{ result.overview}}</p>
                    </div>

                    <md-button v-on:click="addMovie(result)" class="md-icon-button md-raised">
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
        addMovie (p) {
            console.log(p);
            this.searchRequest = '';
            this.results = [];
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
