<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{Vif}}</h3>
    <br>
    <button class="light-blue lighten-1" v-on:click="mostrarImagen">Mostrar imagen</button>
    <button class="light-blue lighten-1" v-on:click="ocultarImagen">Ocultar imagen</button>
    <br>
    <img src="../assets/logo.png" width="200" v-if="mostrar">
    <br>
    <h3>{{Vshow}}</h3>
    <img src="../assets/materialize.png" width="200" v-show="mostrar">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 11vo ejercicio",
      Vif: 'V-if',
      Vshow: 'V-show',
      mostrar: false
    }
  },
  methods: {
    mostrarImagen() {
      this.mostrar = true;
    },
    ocultarImagen() {
      this.mostrar = false;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
h3 {
  text-align: center;
}
img {
  display: block;
  margin: auto;
}
</style>