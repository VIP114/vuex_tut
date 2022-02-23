import { createApp } from 'vue'
import {createStore} from 'vuex'

import App from './App.vue'
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
    }
})
const app=createApp(App)
app.use(store)
app.mount('#app')
