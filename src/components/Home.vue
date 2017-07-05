<template>
 
  <div class="home">
  <md-list>
    <md-list-item>
      <md-input-container>
        <label>Nom</label>
        <md-input v-model="titreFilm"></md-input>
        <md-button v-on:click="addToList" class="md-raised md-primary">Ajouter</md-button>
      </md-input-container>
    </md-list-item>
  </md-list>

<search></search>

   <md-list>
    <md-list-item>
      <md-input-container>
        <label>Filtre</label>
        <md-input v-model="query"></md-input>
      </md-input-container>
    </md-list-item>
  </md-list>
  
    <md-list>
      <md-list-item v-for="(movie, index) in listFiltre" v-bind:key="index">
        <md-avatar>
          <img v-bind:src="movie.poster">
        </md-avatar>
        <span>#{{ index + 1 }} {{ movie.title }}</span>
        <md-button v-on:click="remove(movie)" class="md-raised md-accent">Supprimer</md-button>
      </md-list-item>
    </md-list>

  </div>


</template>

<script>

import Search from './Search';
const LOCALSTORAGE_KEY = 'movie-list-storage';

export default {
    name: 'home',
    data () {
        let movieList;
        try {
            movieList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            if (!movieList) {
                throw new Error();
            }
        } catch (e) {
            movieList = [
                {
                    title: 'Drive',
                    overview: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
                    poster: 'http://image.tmdb.org/t/p/w185/nu7XIa67cXc2t7frXCE5voXUJcN.jpg'
                },
                {
                    title: 'Only God Forgives',
                    overview: 'Julian, who runs a Thai boxing club as a front organization for his family s drug smuggling operation, is forced by his mother Jenna to find and kill the individual responsible for his brother s recent death.',
                    poster: 'http://image.tmdb.org/t/p/w185/8KUPbn7gBm5o4cHM1K8SFfCpxOg.jpg'
                }
            ];
        }
        return {
            query: '',
            titreFilm: '',
            movieList
        };
    },
    components: {
        search: Search
    },
    methods: {
        addToList () {
            const movie = {
                title: this.titreFilm
            };
            this.movieList.push(movie);
        },
        remove (movie) {
            let index = this.movieList.indexOf(movie);
            this.movieList.splice(index, 1);
        }
    },
    computed: {
        listFiltre () {
            return this.movieList.filter(movie => {
                return movie.title.toLowerCase().indexOf(this.query.toLowerCase()) === 0;
            });
        }
    },
    watch: {
        movieList: {
            handler: function (val, oldval) {
                const listJson = JSON.stringify(this.movieList);
                localStorage.setItem(LOCALSTORAGE_KEY, listJson);
            },
            deep: true
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
