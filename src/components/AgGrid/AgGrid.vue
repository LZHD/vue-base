<template>
  <ag-grid-vue style="height: 500px; width: 500px;"
               :class="theme"
               :columnDefs="columnDefs"
               :rowData="rowData"
               :rowHeight="40"
               :gridOptions="gridOptions"/>
</template>

<script>
import {AgGridVue} from 'ag-grid-vue'
import {LocaleText} from './model/LocaleText'

export default {
  name: 'AgGrid',
  data () {
    return {
      gridOptions: null
    }
  },
  props: {
    theme: {
      type: String,
      default: 'ag-theme-balham'
    },
    columnDefs: {
      type: Array,
      default: null
    },
    rowData: {
      type: Array,
      default: null
    }
  },
  components: {
    AgGridVue
  },
  beforeMount: function () {
    this.gridOptions = {
      enableColResize: true,
      enableSorting: true,
      enableFilter: true,
      suppressRowClickSelection: false, /* 禁止点击选择行 */
      rowSelection: 'multiple',
      localeText: LocaleText,
      context: {
        grid: this
      }
    }
  }
}
</script>

<style scoped>

</style>
