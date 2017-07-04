<template>
    <div v-bind:style="{color: person.color}">
        #{{ rank }} <router-link v-bind:to="{name: 'Search', params: {query: person.name}}" {{ person.name }}
        <img v-bind:src="person | toAvatars">
        <button v-on:click="$emit('removePerson', person)">Supprimer</button>
    </div>
</template>

<script>
export default {
    props: ['person', 'rank'],
    filters: {
        toAvatars (person) {
            return `https://robohash.org/${person.name}`;
        }
    }
};

</script>

<style>

</style>
