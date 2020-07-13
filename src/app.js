import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue'
import router from './routes/index'
import store from '@/app/services/store/index.js'
Vue.use(BootstrapVue)
Vue.use(VueRouter);
import "bootstrap-vue/dist/bootstrap-vue.css";
const ROOT_PATH = "/";
import axios from 'axios'
import { Service } from "axios-middleware";
const service = new Service(axios);

service.register({
    async onRequest(config) {
        if (store.state.accessToken) {
            let token = store.state.accessToken
            config.headers.Authorization = `Bearer ${token.access_token}`;
        }
        return config;
    },
    onSync(promise) {
        return promise;
    },
    onResponse(response) {
        return response;
    }
});


 
let page = {
    title: "Welcome",
    subtitle: "home"
};


var app = new Vue({
    el: "#app",
    router: router,
    store,
    beforeMount() {
        if(sessionStorage.getItem('__SIGN_IN')) {
            store.commit('setProfile', JSON.parse(sessionStorage.getItem('__SIGN_IN')))
        }
        if(sessionStorage.getItem('__CSRF')) {
            store.commit('setToken', JSON.parse(sessionStorage.getItem('__CSRF')))
        }
  },
    data() {
        return {
            image_url: process.env.AVATAR_URL,
            base_url: path => ROOT_PATH + "/" + (path || ""),
            asset: path => ROOT_PATH + "assets/" + path,
            page: page,
        };
    },
    
  });
