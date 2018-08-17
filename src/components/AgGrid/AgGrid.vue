<template>
  <Card>
    <ag-grid-vue
      style="height: 500px;"
      :class="theme"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :rowHeight="40"
      :gridOptions="gridOptions"
      :toolPanelSuppressSideButtons="true"
    />
    <grid-bbar/>
  </Card>
</template>

<script>
import {AgGridVue} from 'ag-grid-vue'
import {LocaleText} from './model/LocaleText'
import GridBbar from './components/GridBbar'

export default {
  name: 'AgGrid',
  components: {
    GridBbar,
    AgGridVue
  },
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
