<template>
    <div>
        <h1>df</h1>
        <h1 class="counter">{{counter}}</h1>
        <button class="btn" @click="sutractFromCounter(value)">-</button>
        <input type="number" v-model="value" />
        <button class="btn" @click="addToCounter(value)">+</button>
        <div>
            <button @click="addRandomNumber">Add By Rendom Numer</button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
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
        ...mapMutations(['addToCounter','sutractFromCounter']),
        ...mapActions(['addRandomNumber'])
    },

}
</script>
<style scoped>
.counter{
    font-size: 3rem;
}
.btn{
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