<template>
  <div>
    <h1>{{ title }}</h1>
    <button class="light-blue lighten-1" @click="count++">Presionar</button>
    <button class="light-blue lighten-1" @click="count = 0">
     Reiniciar
    </button>
      <label>Contador {{count}} <br /><br /></label>
    <button
      class="light-blue lighten-1"
      @mouseout="estado = false"
      @mouseover="estado = true"
    >
      Pon el cursor encima
    </button>
    {{ estado }}
    <br /><br />
    <p>Método onClick</p>
    <hr />
    <button class="light-blue lighten-1" v-on:click="Incrementar()">
      Incrementar
    </button>
    <button class="light-blue lighten-1" v-on:click="Decrementar()">
      Decrecer
    </button>
    <button class="light-blue lighten-1" v-on:click="Reiniciar()">
      Reiniciar
    </button>
      
      <label>Contador {{ contador }}</label>
    <hr />
    <select v-on:change="cambiarImagen($event)" class="browser-default">
      <option value="" disabled selected>Selecciona una imagen</option>
      <option :value="vuejs">Vuejs</option>
      <option :value="materializecss">Materializecss</option>
    </select>
    <img :src="imagen" >
  </div>
</template>

<script>
import vuejs from '../assets/logo.png'
import materializecss from '../assets/materialize.png'

export default {
  data() {
    return {
      title: "Este es el 10mo ejercicio",
      count: 0,
      estado: false,
      contador: 0,
      imagen: '',
      vuejs,
      materializecss
    };
  },
  methods: {
    Incrementar() {
      this.contador++;
    },
    Decrementar() {
      this.contador--;
    },
    Reiniciar() {
      this.contador = 0;
    },
    cambiarImagen(event) {
      this.imagen = event.target.value;
    }
  }
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