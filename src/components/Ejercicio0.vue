<template>
  <div>
    <p><a href="#" @click="getImage()">Get a dynamic image</a></p>
    <p v-if="userProfilePic"><img :src="userProfilePic" width="250"/></p>

    <hr>
    <select v-on:change="cambiarImagen($event)" class="browser-default">
      
      <option value="" disabled selected>
        Selecciona una imagen
      </option>
      
      <option value="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg">
        Vuejs
      </option>
      
      <option value="https://www.nicepng.com/png/detail/169-1696332_materialize-logo-materialize-css-logo.png">
        MaterializeCSS
      
      </option>
    </select>
    <br>
    <img :src="imagen" />

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProfilePic: null,
      imagen: ""
    };
  },
  methods: {
    getImage() {
      this.userProfilePic =
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg";
    },
    cambiarImagen() {
      this.imagen = event.target.value;
    },
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector("select");
      var instances = M.FormSelect.init(elems);
    });
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>