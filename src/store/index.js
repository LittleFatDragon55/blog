import Vue from "vue";
import Vuex from "vuex"

import state from "./state";
import * as getters from "./getters"
import * as mutations from  "./mutation"
import * as actions from  "./actions"

Vue.use(Vuex)
console.log(new Vuex.Store())
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store