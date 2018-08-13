<template>
  <div id="app-layout">
    <sidebar></sidebar>
    <ag-grid :row-data="rowData" :column-defs="columnDefs"></ag-grid>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar'
import AgGrid from '../../components/AgGrid'

export default {
  name: 'layout',
  components: {
    AgGrid,
    Sidebar
  },
  data () {
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

<style rel="stylesheet/scss" scoped>
  #app-layout {
    width: 100%;
    height: 100%;
  }
</style>
