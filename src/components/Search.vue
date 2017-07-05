<template>
    <div>
        <h1>{{ $route.params.query }}</h1>
        <input v-model="searchRequest">
        <button @click="displaySearch()">search</button>
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
        axios.get(`https://amc.ig.he-arc.ch/tmdb/search/movie?query=${this.$route.params.query}`)
        .then((response) => {
            console.log(response);
            this.results = response.data.results.map(result => result);
        })
        .catch(error => {
            console.log(error);
        });

        return {
            searchRequest: 'ok ',
            results: []
        };
    },
    methods: {
        displaySearch () {
        },
        addMovie (p) {
        }
    }
};
</script>

<style>

</style>
