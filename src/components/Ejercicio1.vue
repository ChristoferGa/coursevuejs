<template>
    <div class="ex1">
        <h1> {{title}} </h1>
        Hola {{firstName}} {{sureName}} este curso fue tomado en el año {{año}}
        <hr>
        {{meses}}
        <hr>
        {{meses[0]}},{{meses[1]}},{{meses[2]}},{{meses[3]}},{{meses[4]}},{{meses[5]}},
        {{meses[6]}},{{meses[7]}},{{meses[8]}},{{meses[9]}},{{meses[10]}},{{meses[11]}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Este es el 1er ejercicio',
            firstName: 'Christofer',
            sureName: 'Gallo',
            año: 2021,
            meses: [' Enero', ' Febrero', ' Marzo', ' Abril', ' Mayo', ' Junio',
             ' Julio', ' Agosto', ' Septiembre', ' Octubre', ' Noviembre', ' Diciembre']

        }
    }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>