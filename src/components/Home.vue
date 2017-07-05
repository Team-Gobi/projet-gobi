<template>
  <div class="home">

    <md-input-container>
        <label>Nom</label>
        <md-input v-model="uneAutreVar"></md-input>
        <md-button v-on:click="addToList" class="md-raised md-primary">Ajouter</md-button>
    </md-input-container>
    <md-input-container>    
        <label>Filtre</label>
        <md-input v-model="query"></md-input>
    </md-input-container>
    <h1 class="md-title" style="flex: 1" v-if="on">
      {{ message }}
    </h1>
  
    <h1 v-show="on">
      {{ uneAutreVar }}
    </h1>
      <md-list>
        <md-list-item v-for="(movie, index) in movieList" v-bind:key="index">
          <md-avatar>
            <img v-bind:src="movie.poster">
          </md-avatar>
          <span>#{{ index + 1 }} {{ movie.title }}</span>
          <md-button v-on:click="remove(movie)" class="md-raised md-accent">Supprimer</md-button>
        </md-list-item>
      </md-list>
  </md-layout>
  </div>

</template>

<script>

const LOCALSTORAGE_KEY = 'vuedemo-malist';

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
            on: true,
            query: '',
            uneAutreVar: 'Bibi',
            message: 'Hello vue.js',
            movieList
        };
    },
    filters: {
        toFilmPoster (movie) {
            return movie.poster;
        }
    },
    methods: {
        addToList () {
            const movie = {
                title: this.uneAutreVar
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
                return movie.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            });
        }
    },
    watch: {
        movieList: {
            handler: function (val, oldval) {
                console.log('qqch a changé');
                const listJson = JSON.stringify(this.movieList);
                localStorage.setItem(LOCALSTORAGE_KEY, listJson);
            },
            deep: true
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
