<template>
    <div class="home">
        <input v-model="newMsg"><button @click="send()">send</button>
        <person v-for="(p, i) in messages" :key="i" :person="p" @delete="remove(p)"></person>
    </div>
</template>

<script>
import Movie from './Movie';
// import firebase from '../firebase';

export default {
    name: 'home',
    data () {
        return {
            newMsg: '',
            list: [
                { n: 'a' },
                { n: 'b' },
                { n: 'c' }
            ]
        };
    },
    /* firebase () {
        return {
            messages: {
                source: firebase.database().ref('/demo/messages')
            }
        };
    }, */
    methods: {
        /* send() {
            this.$firebaseRefs.messages.push({txt: this.newMsg});
            this.newMsg = '';
        },
        remove(p) {
            this.$firebaseRefs.messages.child(p['.key']).remove();
        } */
    },
    components: {
        movie: Movie
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
