<template>
  <Row class-name="rowitem">
    <Col span="5">
      <Select v-model="theme" placeholder="主题" placement="top" @on-change="changeTheme" style="width: 100px;">
        <Option v-for="item in themes" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Col>
    <Col span="19" class="pageItem">
      <Page :total="40" show-elevator show-sizer show-total placement="top" :page-size-opts="pageOpts" :page-size="20"></Page>
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
          value: 'ag-theme-fresh',
          label: '鲜明'
        }
      ],
      theme: 'ag-theme-balham',
      pageOpts: [20, 50, 100, 500]
    }
  },
  methods: {
    changeTheme (value) {
      this.$emit('on-changeTheme', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pageItem {
    text-align: right;
  }

  .rowitem {
    padding: 0 5px;
  }
</style>
