<template>
  <el-table
    v-if="data && data.length > 0"
    ref="table"
    :size="size"
    :data="data"
    :height="height"
    :lazy="lazy"
    :empty-text="emptyText"
    :default-expand-all="defaultExpandAll"
    :border="border"
    :stripe="stripe"
    :row-key="rowKey"
    :show-summary="showSummary"
    :sum-text="sumText"
    :summary-method="summaryMethod"
    @selection-change="handleSelectionChange"
    @row-click="rowClick"
    @sort-change="sortChange"
  >
    <el-table-column
      v-if="hasSelection"
      type="selection"
      width="55"
      fixed="left"
      :reserve-selection="reserveSelection"
    />
    <el-table-column
      v-if="hasIndex"
      type="index"
      label="序号"
      width="50"
      fixed="left"
      align="center"
    />
    <slot name="start" />
    <slot name="columns">
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :align="column.align ? column.align : 'center'"
        :fixed="column.fixed"
        :sortable="column.sortable"
        :show-overflow-tooltip="column.tooltip ? column.tooltip : true"
      >
        <template v-if="column.slot" #default="data">
          <slot :name="column.slot && column.slot.name" v-bind="data" />
        </template>
      </el-table-column>
    </slot>
    <slot name="end" />
  </el-table>
  <div v-else :style="noDataStyle">
    <el-empty :description="emptyText" />
  </div>
</template>

<script>
export default {
  name: 'KapokTable',
  props: {
    rowKey: {
      type: String,
      default: 'id'
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    sumText: {
      type: String,
      default: '合计'
    },
    summaryMethod: {
      type: Function,
      default: undefined
    },
    reserveSelection: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    height: {
      type: Number || String,
      default: 350
    },
    lazy: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    hasIndex: {
      type: Boolean,
      default: true
    },
    hasSelection: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    noDataStyle() {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: this.height + 'px'
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit('selection-change', val)
    },
    rowClick(row, column, event) {
      this.$emit('row-click', row, column, event)
    },
    sortChange(data) {
      this.$emit('sort-change', data)
    }
  }
}
</script>

<style scoped>

</style>
