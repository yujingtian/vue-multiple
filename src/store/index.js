import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);

const state = {}

const mutations = {}

const store = new Vuex.Store({
    state,
    mutations,
    getters
})

export default store;