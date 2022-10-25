export default {
    actions: {
        async fetchMovies(ctx, searchQuery) {
            const res = await fetch('https://www.omdbapi.com/?apikey=88150c8c&s=' + searchQuery);
            const movies = await res.json();
            
            ctx.commit('setMovies', movies.Search);
        }
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        }
    },
    state: {
        movies: []
    },
    getters: {
        allMovies(state) {
            return state.movies
        }
    },
}