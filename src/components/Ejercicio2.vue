<template>
    <div class="ex2">
        <h1> {{title}} </h1>
        Contador {{count}}
        <button class="light-blue lighten-1" type="button" v-on:click="stopInterval"> {{btnMessage}} </button>
        <button class="light-blue lighten-1" type="button" v-on:click="resetInterval"> {{btnreset}} </button>
        <br>
        {{msg}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Este es el 2do ejercicio',
            count: 0,
            interval: null,
            isRunning: false,
            btnMessage: 'Detener',
            btnreset: 'Resetear',
            msg: null
        }
    },
    mounted () {
        this.interval = setInterval(() => {
            this.count++;
        }, 1000);
        this.isRunning = true;
    },
    methods: {
        stopInterval() {
            if(this.isRunning) {
                clearInterval(this.interval);
                this.isRunning = false;
                this.btnMessage = 'Continuar'
                this.msg = 'Detener'
            }
            else {
                this.interval = setInterval(() => {
                    this.count++;
                }, 1000);
                this.isRunning = true;
                this.btnMessage = 'Detener'
                this.msg = 'Continuar'
            } 
        },
        resetInterval() {
            this.count = 0
        }   
    }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>