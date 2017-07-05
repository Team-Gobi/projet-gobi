<template>
    <div>
        #{{ movie }} <router-link v-bind:to="{name: 'Search', params: {query: movie.title}}" {{ movie.title }}
        <img v-bind:src="movie | toFilmPoster">
        <button v-on:click="$emit('removePerson', movie)">Supprimer</button>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    filters: {
        toFilmPoster (movie) {
            return movie.poster_path;
        }
    }
};

</script>

<style>

</style>
