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
    @selection-change="handleSelectionChange"
    @row-click="rowClick"
    @sort-change="sortChange"
  >
    <el-table-column
      v-if="hasIndex"
      type="index"
      label="序号"
      width="50"
      fixed="left"
      align="center"
    />
    <el-table-column
      v-if="hasSelection"
      type="selection"
      width="55"
      fixed="left"
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
      />
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
