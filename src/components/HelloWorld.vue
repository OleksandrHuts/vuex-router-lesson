<template>
  <div>
    <router-link to="/dogs">Hochu sobachki!!</router-link> |
    <router-link to="/cats">Hochu kotiki!!</router-link> |
    <router-link to="/movies">Movies</router-link> |
    

    <router-view/>
  </div>
</template>

<script>
import PageWithKittens from './PageWithKittens.vue';
import PageWithPuppies from './PageWithPuppies.vue';

const componentsToRender = {
  cats: PageWithKittens,
  dogs: PageWithPuppies
}

export default {
    name: "HelloWorld",
    data() {
        return {
            currentUrl: ''
        };
    },
    computed: {
      currentComponent() {
        return componentsToRender[this.currentUrl.slice(1)]
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentUrl = window.location.hash;
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
