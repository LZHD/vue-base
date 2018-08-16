<template>
  <div>
      <Select v-model="theme" placeholder="主题" placement="top" @change="add()" style="width: 100px;">
        <Option v-for="item in themes" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    <Page :total="40" show-elevator show-sizer show-total placement="top"></Page>
  </div>
</template>

<script>

export default {
  name: 'GridBbar',
  data () {
    return {
      themes: [
        {
          value: 'ag-theme-balham',
          label: '111'
        },
        {
          value: 'ag-theme-balham-dark',
          label: '222'
        },
        {
          value: 'ag-theme-blue',
          label: '333'
        },
        {
          value: 'ag-theme-bootstrap',
          label: '444'
        },
        {
          value: 'ag-theme-dark',
          label: '555'
        },
        {
          value: 'ag-theme-fresh',
          label: '666'
        },
        {
          value: 'ag-theme-material',
          label: '777'
        }
      ],
      theme: 'ag-theme-balham'
    }
  },
  method: {
    add () {
      console.log(this.theme)
    }
  }
}
</script>

<style scoped>

</style>
