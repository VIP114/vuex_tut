import { createApp } from 'vue'
import {createStore} from 'vuex'

import App from './App.vue'
import axios from 'axios'
const store = createStore({
    state(){
        return{
            counter:1, 
            counter2:2, 
            counter3:3, 
        }
    },
    mutations:{
        addToCounter(state,payload){
            state.counter  = state.counter + payload
        },
        sutractFromCounter(state,payload){
            state.counter =state.counter - payload
        }
    },
    actions:{
        async addRandomNumber(cotext){
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            console.log(data);
            cotext.commit('addToCounter',data.data)

        }
    }
})
const app=createApp(App)
app.use(store)
app.mount('#app')
