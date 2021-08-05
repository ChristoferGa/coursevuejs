<template>
    <div class="container">
        <input type="text" v-model.number="n1">
        <input type="text" v-model.number="n2">
        <br>
        <p>{{res}}</p>
        <br>
        <button class="light-blue lighten-1" @click="sumar()">Sumar</button>
        <hr>
        <input type="text" v-model="manga">
        <br>
        <button class="light-blue lighten-1" @click="agregar">Agregar manga</button>
        <!-- <label >Agregaste un total {{totalMangas}}</label> -->
        <br>
        <ul>
            <li v-for="manga in mangas" v-bind:key="manga">{{manga}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            n1: 0,
            n2: 0,
            res: 0,
            manga: '',
            mangas: [],
            // totalMangas: 0
        }
    },
    methods: {
       sumar()  {
           this.res = (this.n1 + this.n2)
       },
       agregar() {
           this.mangas.push(this.manga);
           this.manga = '';
        //    this.calcular();
       },
    //    calcular() {
    //        this.totalMangas = this.mangas.length;
    //    }
    },
    computed: {
        total: function() {
            return this.mangas.length;
        }
    }
    
}
</script>