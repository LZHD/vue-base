<template>
  <ag-grid :row-data="rowData" :column-defs="columnDefs"></ag-grid>
</template>

<script>
  import AgGrid from '../../components/AgGrid/AgGrid'
export default {
  name: "ag-grid",
  components: {
    AgGrid
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
