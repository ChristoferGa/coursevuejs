<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="miUsuario" />

    <nav class="light-blue lighten-1">
      <div class="container">
        <div class="nav-wrapper">
          <ul class="right hide-on-med-and-down">
            <li>
              
                {{ miUsuario }}|
              
            </li>
             <li>
              
                {{saludo}}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <button class="ligth-blue" @click="saludar">Saludo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    title: 'Este es el 18vo ejercicio',
      miUsuario: this.usuario,
      saludo: ''
    };
  },
  methods: {
      saludar() {
          this.saludo = ' Hola ' + this.miUsuario;
      }
  },
  props: {
    usuario: String,
  },
};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>