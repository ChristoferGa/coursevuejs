<template>
  <div class="ex2">
    <h1 v-bind:title="msg">{{ title }}</h1>
    <!-- <button class="light-blue lighten-1" v-on:click="mostrarImagen">
      MostrarImagen
    </button>
    <button class="light-blue lighten-1" v-on:click="ocultarImagen">
      Ocultar Imagen
    </button>
    <br /><br />
    <img src="../assets/logo.png" v-if="imagen"/> -->
    <br>
    <button class="light-blue lighten-1" v-on:click="mostrarImagen(vuejs)">
      Vuejs
    </button>
    <button class="light-blue lighten-1" v-on:click="mostrarImagen(materializecss)">
      Materializecss
    </button>
    <br /><br />
    <img :src="imagen"/>
  </div>
</template>

<script>
import vuejs from '../assets/logo.png'
import materializecss from '../assets/materialize.png'

export default {
  data() {
    return {
      msg: "Este es un titulo dinamico",
      title: "Este es el 3er ejercicio",
      imagen: '',
      vuejs,
      materializecss
    };
  },
  methods: {
    mostrarImagen(imagen) {
      this.imagen = imagen;
    }
  },
};
</script>

<style>
h1 {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
  width: 200px;
}
</style>