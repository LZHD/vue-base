<template>
  <ag-grid :row-data="rowData" :column-defs="columnDefs" :styles="styles"/>
</template>

<script>
import agGrid from '@/components/agGrid/agGrid'
export default {
  name: 'dashboard',
  components: {
    agGrid
  },
  data: function () {
    return {
      rowData: [
        {make: '丰田', model: 'Celica', price: 35000},
        {make: '福特', model: 'Mondeo', price: 32000},
        {make: '保时捷', model: 'Boxter', price: 72000}
      ],
      columnDefs: [
        {headerName: '车型', field: 'make'},
        {headerName: '款式', field: 'model'},
        {headerName: '价格', field: 'price'}
      ],
      styles: {
        height: 'calc(100vh - 164px)'
      }
    }
  }
}
</script>

<style scoped>

</style>
