<template>
  <div>
    <h1>{{ title }}</h1>
     
     <select class="browser-default">
         <option v-for="mes in meses" v-bind:key="mes.id" :selected="mes.selected">
             {{mes.id}} - {{mes.mes}}
         </option>
     </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 12vo ejercicio",
      meses: [
          {
              id: 1,
              mes: 'Enero',
              selected: false
          },
          {
              id: 2,
              mes: 'Febrero',
              selected: false
          },
          {
              id: 3,
              mes: 'Marzo',
              selected: false
          },
          {
              id: 4,
              mes: 'Abril',
              selected: false
          },
          {
              id: 5,
              mes: 'Mayo',
              selected: false
          },
          {
              id: 6,
              mes: 'Junio',
              selected: false
          },
          {
              id: 7,
              mes: 'Julio',
              selected: false
          },
          {
              id: 8,
              mes: 'Agosto',
              selected: false
          },
          {
              id: 9,
              mes: 'Septiembre',
              selected: false
          },
          {
              id: 10,
              mes: 'Octubre',
              selected: false
          },
          {
              id: 11,
              mes: 'Noviembre',
              selected: false
          },
          {
              id: 12,
              mes: 'Diciembre',
              selected: false
          }
      ]
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
  margin: auto;
}
</style>