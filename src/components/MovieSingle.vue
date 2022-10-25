<template>
    <div>
        <img :src="movie.Poster" :alt="movie.title">
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Genre }}</p>

        <br>
        <div class="movie-grid">
        <router-link :to="`/movie/${movie.imdbID}`" class="movie-item" v-for="movie in allMovies" :key="movie.imdbID">
            <img :src="movie.Poster" :alt="movie.title">
            <h3>{{ movie.title }}</h3>
        </router-link>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MovieSingle',
    data() {
        return {
            movie: {}
        }
    },
    mounted() {
       this.getMovie();
    },
    computed: {
        ...mapGetters(['allMovies']),
    },
    methods: {
        async getMovie() {
            const filmId = this.$route.params.id;
            const res = await fetch(`https://www.omdbapi.com/?apikey=88150c8c&i=${filmId}`);
            const movie = await res.json();
            this.movie = movie;
        }
    },
    watch: {
        $route(to, from) {
            if(to != from) {
                this.getMovie();
            }
        }
    }
}
</script>

<style scoped>
.movie-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
</style>