<template>
  <div id="app">
    <Quotes/>
  </div>
</template>

<script>
import Quotes from './components/Quotes'

export default {
  name: 'app',
  components: {
    Quotes
  },
}
</script>

<style>
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
