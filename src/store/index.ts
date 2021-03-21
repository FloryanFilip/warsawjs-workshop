import Vue from 'vue'
import Vuex from 'vuex'
import { store as createUserForm } from '@/store/modules/create-user-form/index';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  modules: {
    createUserForm
  },
})
