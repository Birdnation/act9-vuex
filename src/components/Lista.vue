<template>
    <div class="container">
        <table class="table p-4">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(estudiante, index) of estudiantes" v-bind:key='index'>
                    <th scope="row" >{{index + 1}}</th>
                    <td>{{estudiante.nombre}}</td>
                    <td>{{estudiante.apellido}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['estudiantes'])
    }
}
</script>