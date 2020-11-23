<template>
  <div>
      <h1>Agregar Personas</h1>
      <b-form @submit.prevent="guardarPersona">
          <Input 
            v-model="persona.nombre"
            label="Nombre" 
            placeholder="Ingrese Nombre de la persona"
            id="nombre"
          />
          <Input 
            v-model="persona.direccion"
            label="Direccion" 
            placeholder="Ingrese la direccion de la persona"
            :maxlength="150"
            id="nombre"
          />
          <Input 
            v-model="persona.telefono"
            label="Nombre" 
            placeholder="Ingrese el telefono de la persona"
            :maxlength="10"
            id="nombre"
          />
          <b-button variant="primary" type="submit" class="float-right mt-3">
              Guardar
          </b-button>
      </b-form>
  </div>
</template>

<script>
import Input from '../component/Input'
import { mapActions } from 'vuex'

export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            persona: {
                nombre: '',
                direccion: '',
                telefono: ''
            }
        }
    },
    methods: {
        ...mapActions(['crearPersona']),
        guardarPersona() {
            console.log(this.persona);
            this.crearPersona({
                params: this.persona,
                onComplete: (response) => {
                    console.log(response);
                    this.$router.push({
                        name: 'Home'
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>