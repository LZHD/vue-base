<template>
  <Row>
    <Col span="5">
      <Select v-model="theme" placeholder="主题" placement="top" @on-change="changeTheme" style="width: 100px;">
        <Option v-for="item in themes" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col span="19" class="">
      <Page :total="40" show-elevator show-sizer show-total placement="top"></Page>
    </Col>
  </Row>
</template>

<script>

export default {
  name: 'gridBbar',
  data () {
    return {
      themes: [
        {
          value: 'ag-theme-balham',
          label: '默认'
        },
        {
          value: 'ag-theme-balham-dark',
          label: '简约黑'
        },
        {
          value: 'ag-theme-blue',
          label: '天空蓝'
        },
        {
          value: 'ag-theme-dark',
          label: '酷炫黑'
        },
        {
          value: 'ag-theme-fresh',
          label: '鲜明'
        }
      ],
      theme: 'ag-theme-balham'
    }
  },
  methods: {
    changeTheme (value) {
      this.$emit('on-changeTheme', value)
    }
  }
}
</script>

<style scoped>

</style>
