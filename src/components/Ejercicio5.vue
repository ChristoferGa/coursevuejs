<template>
  <div class="ej5">
    <h1> {{title}} </h1>
    <ul>
      <li v-for="mes in meses" v-bind:key="mes">
        {{ mes }}
      </li>
    </ul>
    <ul> 
      <li v-for="(mes, index) in meses_id" v-bind:key="mes">
        {{ index }} {{ mes.id }} - {{ mes.mes }}
      </li>
    </ul>

    <select v-model="mesesId" class="browser-default">
      <option value="" disabled selected >Selecciona el mes en que naciste</option>
      <option v-for="mes in meses_id" v-bind:key="mes" v-bind:value="mes.id">
        {{ mes.mes }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Este es el 5to ejercicio',
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      meses_id: [
        {
          id: 1,
          mes: "Enero",
        },
        {
          id: 2,
          mes: "Febrero",
        },
        {
          id: 3,
          mes: "Marzo",
        },
        {
          id: 4,
          mes: "Abril",
        },
        {
          id: 5,
          mes: "Mayo",
        },
        {
          id: 6,
          mes: "Junio",
        },
        {
          id: 7,
          mes: "Julio",
        },
        {
          id: 8,
          mes: "Agosto",
        },
        {
          id: 9,
          mes: "Septiembre",
        },
        {
          id: 10,
          mes: "Octubre",
        },
        {
          id: 11,
          mes: "Noviembre",
        },
        {
          id: 12,
          mes: "Diciembre",
        },
      ],
      mesesId: 1,
    };
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
