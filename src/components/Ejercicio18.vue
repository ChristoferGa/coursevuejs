<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="miUsuario" />

    <nav class="light-blue lighten-1">
      <div class="container">
        <div class="nav-wrapper">
          <ul class="right hide-on-med-and-down">
            <li>
              <a class="dropdown-trigger" href="https://www.nintendo.com" data-target="dropdown">
                {{ miUsuario }}
              </a>
            </li>
             <li>
              <a class="dropdown-trigger" href="https://www.nintendo.com" data-target="dropdown">
                {{ usuario1 }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    title: 'Este es el 18vo ejercicio',
      usuario1: "Christofer",
      miUsuario: this.usuario
    };
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