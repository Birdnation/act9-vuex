<template>
    <div class="container">
        <h1>Lista de estudiantes VUE.JS</h1>
        <label for="nombre">Nombre: </label>
        <input type="text" class="form-control" id="nombre" v-model="estudiante.nombre">
        <label for="apellido">Apellido: </label>
        <input type="text" class="form-control" id="apellido" v-model="estudiante.apellido">
        <button class="btn btn-success btn-block my-4" @click="addList">Agregar</button>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    computed:{
        ...mapState(['estudiantes','estudiante'])
    },
    methods:{
        ...mapMutations(['addList'])
    }
}
</script>