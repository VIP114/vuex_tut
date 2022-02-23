<template>
    <div>
        <h1>df</h1>
        <h1 class="counter">{{counter}}</h1>
        <button @click="sutractFromCounter(value)">-</button>
        <input type="number" v-model="value" />
        <button @click="addToCounter(value)">+</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name:"Counter",
    data() {
        return {
            value:1,
            
        }
    },
    computed: {
        ...mapState(["counter","counter2"])
    },
    methods: {
        ...mapMutations(['addToCounter','sutractFromCounter'])
    },
}
</script>
<style scoped>
.counter{
    font-size: 3rem;
}
button{
    border-radius: 100%  ;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-color: rgb(183, 183, 238);
    margin: 2px;
}
input{
    text-align: center ;
}
</style>