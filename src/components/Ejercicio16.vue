<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{msg}}</p>
    <button @click="msg = 'Nuevo valor'">Actualizar</button>
    <button @click="destroy()">Destroy</button>
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
    // setTimeout(function () {
    //   console.log('Aplicación montada - mounted() el mensaje es ' + this.msg);
    // }, 1000);
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
    
    
  },
  methods: {
    
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