<template>
  <div>
      <h1>Agregar Personas</h1>
      <b-form @submit.prevent="guardarPersona">
          <Input 
            v-model="persona.nombre"
            label="Nombre" 
            placeholder="Ingrese Nombre de la persona"
            id="nombre"
            class="mb-2"
            :error="validacionNombre && !erroresValidacion"
            mensajeError="El nombre es obligatorio"
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
            },
            erroresValidacion: true
        }
    },
    methods: {
        ...mapActions(['crearPersona']),
        guardarPersona() {
            if(this.validacionNombre) {
                this.erroresValidacion = false;
                    console.log(this.persona);
                    this.crearPersona({
                    params: this.persona,
                    onComplete: (response) => {
                        console.log(response);
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        });
                        this.$router.push({
                            name: 'Home'
                        })
                    },
                    onError: () => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje
                        });
                    }
                }) 
            } else {
                this.erroresValidacion = true;
            }
        }
    },
    computed: {
        validacionNombre() {
            return(
                this.persona.nombre !== undefined &&
                this.persona.nombre.trim() !== ''
            )
        }
    }
}
</script>

<style>

</style>