<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{msg}}</p>
    <button @click="actualizar">Actualizar</button>
    <button @click="destroy" v-show="msg">Destroy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 16vo ejercicio",
      msg: 'Hola Vuejs'
    };
  },
  beforeCreate: function () {
    console.log('Antes de crear la aplicación - beforeCreate() el mensaje es ' + this.msg);
  },
  created() {
    console.log('Creando la aplicación - created() el mensaje es ' + this.msg);
  },
  beforeMount() {
    console.log('Antes de montar la aplicación - beforeMount() el mensaje es ' + this.msg);
  },
  mounted() {
    console.log('Aplicación montada - mounted() el mensaje es ' + this.msg);
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
    
  },
  updated() {
    console.log("updated()");
  },
  beforeDestroy()  {
    console.log("Antes de destruir la aplicación - beforeDestroy()" + this.msg);
    this.msg = null
    delete this.msg
    
  },
  destroyed() {
    console.log('Destruyendo - destroyed()' + this.msg);
    alert('Se borro el valor de msg')
    document.querySelector("p").innerHTML = '';
    
  },
  methods: {
    actualizar() {
      this.msg = 'Nuevo valor'
    },
    destroy() {
      this.$destroy();
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>