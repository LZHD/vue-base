<template>
  <div>
    <!-- table表格 -->
    <el-table
      style="width: 100%; margin-bottom: 30px"
      ref="baseTable"
      size="small"
      :border="border"
      :data="dataSource"
      v-loading="loading"
      v-bind="options"
      v-on="tableEvents"
      @selection-change="handleSelectionChange"
    >
      <!--      &lt;!&ndash; 复选框 &ndash;&gt;-->
      <!--      <el-table-column-->
      <!--        type="selection"-->
      <!--        style="width: 55px;"-->
      <!--        v-if="-->
      <!--          options && options.selection && (!options.isShow || options.isShow())-->
      <!--        "-->
      <!--      />-->
      <!--      &lt;!&ndash; 序号 &ndash;&gt;-->
      <!--      <el-table-column-->
      <!--        width="60"-->
      <!--        align="center"-->
      <!--        type="index"-->
      <!--        v-if="options && options.index"-->
      <!--        :label="options && options.labelIndex"-->
      <!--      />-->

      <!-- 表格数据 -->
      <template v-for="(column, index) in columns">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :align="column.align"
          :width="column.width"
          v-bind="column.props"
          v-if="!column.isShow || (column.isShow && column.isShow())"
        >
          <template v-slot="scope">
            <template v-if="column.slotcontent">
              <slot :data="scope" :name="column.prop"></slot>
            </template>
            <template v-else>
              <template v-if="!column.render">
                <template v-if="column.formatter">
                  <span
                    v-html="column.formatter(scope.row, column, scope.$index)"
                    @click="
                      column.click && column.click(scope.row, scope.$index)
                    "
                  ></span>
                </template>
                <template v-else-if="column.newjump">
                  <el-link
                    type="primary"
                    :underline="false"
                    v-bind="{ target: '_blank', ...column.target }"
                    @click="column.newjump(scope.row, column, scope.$index)"
                  >
                    {{ scope.row[column.prop] || column.content }}
                  </el-link>
                </template>
                <template v-else>
                  <span
                    :style="
                      column.click ? 'color: #409EFF; cursor: pointer;' : null
                    "
                    @click="
                      column.click && column.click(scope.row, scope.$index)
                    "
                  >
                    {{ scope.row[column.prop] || column.content }}
                    {{
                      `${
                        scope.row[column.prop] && column.unit ? column.unit : ''
                      }`
                    }}
                  </span>
                </template>
              </template>
              <template v-else>
                <render
                  :column="column"
                  :row="scope.row"
                  :render="column.render"
                  :index="index"
                ></render>
              </template>
              <div
                class="operate-group"
                v-if="column.operates && column.operates.length > 0"
              >
                <template v-for="(btn, key) in column.operates">
                  <span
                    :key="key"
                    v-if="
                      !btn.isShow ||
                      (btn.isShow && btn.isShow(scope.row, scope.$index))
                    "
                  >
                    <template v-if="btn.render">
                      <render
                        :column="scope.row"
                        :row="scope.row"
                        :render="btn.render"
                        :index="scope.$index"
                      ></render>
                    </template>
                    <template v-if="!btn.render">
                      <el-button
                        :size="btn.size || 'mini'"
                        :type="btn.type || `text`"
                        :icon="btn.icon"
                        :plain="btn.plain"
                        :style="
                          btn.setStyle && btn.setStyle(scope.row, scope.$index)
                        "
                        v-bind="btn.props"
                        @click.native.prevent="
                          btn.method(scope.row, scope.$index)
                        "
                        :disabled="
                          btn.disabled && btn.disabled(scope.row, scope.$index)
                        "
                      >
                        {{ btn.label
                        }}{{
                          column.operates.length >= 2 ? '&nbsp;&nbsp;' : ''
                        }}
                      </el-button>
                    </template>
                  </span>
                </template>
              </div>
            </template>
          </template>
        </el-table-column>
      </template>

      <!-- slot插槽按钮 -->
      <!--      <el-table-column label="操作" align="center" v-if="options && options.slotcontent">-->
      <!--        <template v-slot="scope">-->
      <!--          <slot :data="scope"></slot>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="showPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current"
      :page-sizes="pageSizes"
      :page-size="pagination.limit"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  components: {
    render: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, opt) => {
        const params = {
          row: opt.props.row,
          index: opt.props.index
        };
        if (opt.props.column) params.column = opt.props.column;
        return opt.props.render(h, params);
      }
    }
  },
  data() {
    return {
      selections: [],
      baseTable: null,
      pagination: {},
      options: {}
    };
  },
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    columns: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    tableEvents: Object,
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40];
      }
    },
    configOptions: {
      type: Object
    },
    initLoad: {
      type: Boolean,
      default: true
    },
    queryParams: {
      type: Object,
      default: () => ({})
    },
    total: {
      type: Number,
      default: 0
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.options = Object.assign(this.initTableOptions(), this.configOptions);
    this.pagination = this.initPagination();
    this.baseTable = this.$refs.baseTable;
  },
  mounted() {
    if (this.initLoad) {
      this.loadData(this.initPagination);
    }
  },
  methods: {
    initTableOptions() {
      return {
        index: true,
        labelIndex: '序号'
      };
    },
    initPagination() {
      return {
        current: 0,
        limit: 10
      };
    },
    // 复选框选中项
    handleSelectionChange(val) {
      this.selections = Array.from(val);
      this.$emit('handleSelectionChange', Array.from(val));
    },
    handleSizeChange(size) {
      this.pagination = Object.assign(this.pagination, {
        limit: size,
        current: 1
      });
      this.loadData(this.pagination);
      this.$emit('handleSizeChange', size);
    },
    handleCurrentChange(page) {
      this.pagination = Object.assign(this.pagination, { current: page });
      this.loadData(this.pagination);
      this.$emit('handleCurrentChange', page);
    },
    loadData(params) {
      const data = Object.assign(params, this.queryParams);
      this.$emit('loadData', data);
    },
    refresh() {
      this.loadData(...this.initPagination);
    }
  }
};
</script>

<style scoped lang="scss"></style>
