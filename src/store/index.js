import Vue from "vue";
import Vuex from "vuex"

import state from "./state";
import * as getters from "./getters"

Vue.use(Vuex)
console.log(new Vuex.Store())
const store = new Vuex.Store({
    state,
    getters
})
export default store