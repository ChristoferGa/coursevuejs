<template>
  <div>
    <h1>{{ title }}</h1>

    {{usuarios}}
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 7mo ejercicio",
      usuarios: [],
    };
  },
  methods: {
    getUsuarios() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
        });
    },
  },  
  mounted() {
    this.getUsuarios();
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>