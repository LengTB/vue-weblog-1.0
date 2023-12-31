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
        domain:"/api",
        login:true
    },
    mutations:{
        //设置token
        setToken(state,token){
            state.token = token;
            state.login = false;
            setInfo(token);
        },
        setLogin(state,login){
            state.login = login;
        }
    },
    modules: {
        user
    },
})

export default store;