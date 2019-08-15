<template>
  <div class="hello">
    <h2>Quote: </h2>
    <h4 v-for="quote in quotes">- "{{ quote }}"</h4>
  </div>
</template>

<script>

export default {
  name: 'Quotes',
  data () {
    return {
      quotes: [],
    }
  },
  mounted() {
    fetch("https://api.kanye.rest")
      .then(response => response.json())
      .then((data) => {
        this.quotes = data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: normal;
  font-size: 18px;
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
