<template>
    <div class="movie-grid">
        <router-link :to="`/movie/${movie.imdbID}`" class="movie-item" v-for="movie in allMovies" :key="movie.imdbID">
            <img :src="movie.Poster" :alt="movie.title">
            <h3>{{ movie.title }}</h3>
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MoviesList',
    mounted() {
        this.fetchMovies('Dogs');
    },
    computed: {
        ...mapGetters(['allMovies']),
        filmsCount() {
            return 10;
        }
    },
    methods: {
        ...mapActions(['fetchMovies'])
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