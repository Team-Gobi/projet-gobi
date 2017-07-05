<template>
    <div>
        <h1>{{ $route.params.query }}</h1>
        <p v-for="result in results" v-bind:src="result" v-bind:key="result">
            {{ result.title}}
            {{ result.release_date }}
            <img href="https://amc.ig.he-arc.ch/tmdb/t/p/w500">
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
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
            results: []
        };
    }
};
</script>

<style>

</style>
