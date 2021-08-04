<template>
  <div class="ej4">
    <h1>{{ title }}</h1>

    <label>Escribe tu nombre</label>
    <input type="text" v-model="firstName" placeholder="Ingrese el nombre">
        <label>Escribe tu nombre</label>
    <input type="text" v-model="sureName" placeholder="Ingrese el apellido">
    <p>Bienvenido {{firstName}} {{sureName}}</p>
    <select v-model="selected" class="browser-default">
      <option value="" disabled selected>Selecciona el mes en que naciste</option>
      <option value="1">Enero</option>
      <option value="2">Febrero</option>
      <option value="3">Marzo</option>
      <option value="4">Abril</option>
      <option value="5">Mayo</option>
      <option value="6">Junio</option>
      <option value="7">Julio</option>
      <option value="8">Agosto</option>
      <option value="9">Septiembre</option>
      <option value="10">Octubre</option>
      <option value="11">Noviembre</option>
      <option value="12">Diciembre</option>
    </select>
    <p>El numero de el mes seleccionado es {{ selected }}</p>
    <input type="checkbox" >
    <label>
        <input type="checkbox" class="filled-in" checked="checked" v-model="activo"/>
        <span>{{activo}}</span>
    </label>
    
    
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Este es el 4to ejercicio",
      firstName: '',
      sureName: '',
      selected: '',
      activo: false
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelector("select");
      var instances = M.FormSelect.init(elems);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
