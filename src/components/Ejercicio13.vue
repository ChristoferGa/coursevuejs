<template>
    <div>
        <br>
        <div class="square light-blue" v-bind:class="{roundedClass}"></div>
        <br>
        <button class="light-blue lighten-1" @click="(roundedClass = !roundedClass)">Cambiar forma</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            roundedClass: false
        }
    }
}
</script>

<style>
.square {
    width: 200px;
    height: 200px;
}
.roundedClass {
    color:  lightblue;
    border-radius: 200px;
}
</style>