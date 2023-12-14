import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import {setInfo, getInfo} from '@/utils/storage';
Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced: true,
    state: {
        //细节，这里必须要带括号，我试了getInfo 会拿不到参数
        token: getInfo(),
        qq: '1187520285',
        domain:"http://192.168.31.231:8888"
    },
    mutations:{
        //设置token
        setToken(state,token){
            state.token = token;
            setInfo(token);
        }
    },
    modules: {
        user
    },
})

export default store;