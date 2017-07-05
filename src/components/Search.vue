<template>
    <div>
        <md-input-container>
            <label>Titre de film</label>
            <md-input v-model="searchRequest"></md-input>
        </md-input-container>
        <p v-for="result in results" v-bind:src="result" v-bind:key="result">
            {{ result.title}}
            {{ result.release_date }}
        </p>
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
            axios.get(`https://amc.ig.he-arc.ch/tmdb/search/movie?query=${this.searchRequest}`)
            .then((response) => {
                console.log(response);
                this.results = response.data.results.map(result => result);
            })
            .catch(error => {
                console.log(error);
            });
        },
        addMovie (p) {
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
