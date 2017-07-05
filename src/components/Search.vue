<template>
    <div>
        <h1>{{ $route.params.query }}</h1>
        <p v-for="title in results" v-bind:src="title" v-bind:key="title">
            {{ title }}
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        axios.get(`https://amc.ig.he-arc.ch/tmdb/movie/popular`)
        .then((response) => {
            console.log(response);
            this.results = response.data.results.map(result => result.title);
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
