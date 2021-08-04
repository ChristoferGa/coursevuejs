<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="mes in meses_id" v-bind:key="mes">
        {{ mes.id }} - {{ mes.mes }}
        <ul>
          <li v-for="dia in mes.dias" v-bind:key="dia">
            Dias del mes {{ dia.dias }}
          </li>
        </ul>
      </li>
    </ul>
    <ul>
        <li v-for="letras in abecedario" v-bind:key="letras">{{letras}}</li>
    </ul>
    <ul>
        <li v-for="numeros in 25" v-bind:key="numeros">{{numeros}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Este es el 6to ejercicio",
      meses_id: [
        {
          id: 1,
          mes: "Enero",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 2,
          mes: "Febrero",
          dias: [
            {
              dias: 28,
            },
          ],
        },
        {
          id: 3,
          mes: "Marzo",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 4,
          mes: "Abril",
          dias: [
            {
              dias: 30,
            },
          ],
        },
        {
          id: 5,
          mes: "Mayo",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 6,
          mes: "Junio",
          dias: [
            {
              dias: 30,
            },
          ],
        },
        {
          id: 7,
          mes: "Julio",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 8,
          mes: "Agosto",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 9,
          mes: "Septiembre",
          dias: [
            {
              dias: 30,
            },
          ],
        },
        {
          id: 10,
          mes: "Octubre",
          dias: [
            {
              dias: 31,
            },
          ],
        },
        {
          id: 11,
          mes: "Noviembre",
          dias: [
            {
              dias: 30,
            },
          ],
        },
        {
          id: 12,
          mes: "Diciembre",
          dias: [
            {
              dias: 31,
            },
          ],
        },
      ],
      abecedario: 'abcdefghijklmnñopkrstuvwxyz'
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>