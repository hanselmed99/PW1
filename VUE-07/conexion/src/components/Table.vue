<template>
  <div>
    <b-table 
        striped
        bordered 
        :items="items"
        :fields="fields"
    ></b-table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        items: Array,
        field: Array
    }
}
</script>

<style>

</style>