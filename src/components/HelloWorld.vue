<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Bienvenido a Vue.js',
      msg: 'Esta es la pagina principal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
</style>
