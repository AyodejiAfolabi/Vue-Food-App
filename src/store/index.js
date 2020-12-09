import Vue from 'vue'
import Vuex from 'vuex'
import allObj from './num'
Vue.use(Vuex);

const datas= new Vuex.Store(
    {
        modules:{
            allObj
        }
    }
)
console.log(datas)
export default datas