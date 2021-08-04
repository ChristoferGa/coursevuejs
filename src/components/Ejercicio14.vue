<template>
    <div class="container">
        <div v-bind:style=[myStyle]>{{title}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Este es el 14vo ejercicio',
            myStyle: {'font-size': '50px', 'text-align': 'center', 'margin-top': '50px'}
        }
    }
}
</script>