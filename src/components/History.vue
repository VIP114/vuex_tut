<template>
    <div class="container mt-4 flex-wrap">
        <h1>History</h1>
        <div class=" d-flex m-2 p-4">
            <p v-for="(number,index) in history" 
            :key="index" class="m-2" 
            :class="activeIndexes(value).includes(index) && 'bold'">
                {{number}}
            </p>
        </div>

    </div>
    <!-- {{activeIndexes(value)}} -->
    <input type="number" v-model="value"/>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:"History",
    computed: {
        ...mapState(['history']),
        ...mapGetters(['activeIndexes'])
    },

}
</script>
<style scoped>
.bold{
    font-weight: 900;
}
</style>