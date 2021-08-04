<template>
  <div>
    <h1>{{ title }}</h1>
    
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
        <tr v-for="usuario in usuarios" v-bind:key="usuario" v-bind:id="usuario.id">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.username }}</td>
          <td>{{ usuario.email }}</td>
          <td>
              <ul>
                  <li>{{usuario.address.city}}</li>
                  <li>{{ usuario.address.street }}</li>
                <li>{{ usuario.address.zipcode }}</li>
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
      title: "Este es el 8vo ejercicio",
      usuarios: []
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