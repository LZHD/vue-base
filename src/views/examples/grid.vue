<template>
  <ag-grid :row-data="rowData" :column-defs="columnDefs"/>
</template>

<script>
import agGrid from '@/components/agGrid/agGrid'
export default {
  name: 'grid',
  components: {
    agGrid
  },
  data: function () {
    return {
      rowData: [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
      ],
      columnDefs: [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
