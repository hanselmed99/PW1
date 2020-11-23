<template>
  <div class="home">
    <h1>Personas</h1>
    <b-button variant="primary" class="float-right mb-4"
    to="/agregarPersonas">Agregar</b-button>
    <Table :campos="campos" :items="allPersonas"/>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapAction } from 'vuex'

export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'nombre', label: 'Nombres' },
        { key: 'direccion', label: 'Dirección' },
        { key: 'telefono', label: 'Telefono' }
      ]
    }
  },
  computed: {
    ...mapGetters(['allPersonas'])
  },
  methods: {
    ...mapAction(['setPersonas'])
  },
  created() {
    this.setPersonas();
  }
}
</script>
