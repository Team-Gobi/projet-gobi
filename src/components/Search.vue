<template>
    <div>
        <h1>{{ $route.params.query }}</h1>
        <img v-for="url in results" v-bind:src="url" v-bind:key="url">
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        axios.get(`https://www.googleapis.com/customsearch/v1?cx=011288001747608865807:a7rxzv4srri&q=${this.$route.params.query}&searchType=image&safe=high&key=AIzaSyBlh2KvC84vD0cebFOlMSnLe0-Dx1mc-2A`)
        .then((response) => {
            console.log(response);
            this.results = response.data.items.map(item => item.image.thumbnailLink);
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
