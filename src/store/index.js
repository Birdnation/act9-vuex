import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estudiantes: [],
    estudiante: {nombre: '', apellido: ''}
  },
  mutations: {
    addList: (state) => {
      const nom = state.estudiante.nombre;
      const ape = state.estudiante.apellido;
      state.estudiantes.push({ nombre: nom, apellido: ape });
      state.estudiante.nombre = '';
      state.estudiante.apellido = '';
    },
  },
  actions: {
  },
  modules: {
  }
})
