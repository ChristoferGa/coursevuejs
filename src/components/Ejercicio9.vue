<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="numero1 > numero2">El {{numero1}} es mayor que  {{numero2}}</p>
    <p v-else-if="numero1 < numero2">El {{numero1}} es menor que {{numero2}}</p>
    <p v-else>El {{numero1}} es igual que {{numero2}}</p>
    <hr>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nick</th>
          <th>Correo</th>
          <th>Direccion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios_pares" v-bind:key="usuario" v-bind:id="usuario.id">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.username }}</td>
          <td>{{ usuario.email }}</td>
          <td>
            <ul>
              <li>{{usuario.address.city}}</li>
              <li>{{usuario.address.street}}</li>
              <li>{{usuario.address.zipcode}}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 9no ejercicio",
      numero1: 3,
      numero2: 9,
      usuarios: [],
      usuarios_pares: []
    };
  },
  methods: {
    getUsuarios() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
          this.usuarios_pares = data.filter(x => (x.id % 2 == 0))
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