<template>
  <el-scrollbar ref="scrollbar" wrap-class="scrollbar-wrapper">
    <div style="white-space:nowrap;padding-bottom: 10px">
      <el-button-group>
        <el-button v-if="backButton" icon="el-icon-back" size="mini" @click="back">返回</el-button>
        <slot name="startButtons" />
        <el-button v-if="multiviewButton && multiviewOptions.length > 0" :icon="multiviewOptions[currentView].icon" size="mini" @click="switchView">{{ multiviewOptions[currentView].title }}</el-button>
        <el-button v-if="refreshButton" icon="el-icon-refresh" size="mini" @click="refresh">刷新</el-button>
        <el-popover
          v-if="filterButton"
          placement="bottom"
          width="240"
          trigger="click"
        >
          <div style="text-align: center">
            <el-select
              v-for="(filterOption,i) in filterOptions"
              :key="i"
              v-model="filters[filterOption.filterKey]"
              :placeholder="filterOption.placeholder"
              :multiple="isMultiple"
              size="mini"
              value-key="value"
              clearable
              :filterable="filterOption.filterable === true"
              :remote="filterOption.remote === true"
              :remote-method="filterOption.remoteMethod"
              style="margin-bottom: 10px"
              @clear="filters[filterOption.filterKey] = null"
              @change="onFilter"
            >
              <el-option
                v-for="item in filterOption.filters"
                :key="item.value"
                :label="item.text"
                :value="item"
              >
                <div v-if="filterOption.customSelectOptions">
                  <span style="float: left">{{ item.text }}</span>
                  <span style="float: right;">
                    <el-tag
                      v-for="customSelectOption in filterOption.customSelectOptions"
                      :key="customSelectOption"
                      size="mini"
                      style="margin-right: 5px;"
                    >
                      {{ item[customSelectOption] }}
                    </el-tag>
                  </span>
                </div>
              </el-option>
            </el-select>
            <slot name="customFilter" />
          </div>
          <el-button
            slot="reference"
            icon="el-icon-s-operation"
            size="mini"
          >
            筛选
          </el-button>
        </el-popover>
      </el-button-group>
      <el-input
        v-if="searchInput"
        v-model="searchKey"
        :placeholder="searchInputPlaceholder"
        suffix-icon="el-icon-search"
        size="mini"
        style="width: 200px;"
        @input="onSearch"
      />
      <slot name="end" />
      <span
        v-for="(filter, key) in filters"
        :key="key"
      >
        <el-tag
          v-if="filter"
          closable
          effect="dark"
          size="small"
          style="margin-left: 5px;"
          @close="cancelFilter(filter, key)"
        >
          {{ filter.text }}
        </el-tag>
      </span>
    </div>
  </el-scrollbar>
</template>

<script>

export default {
  name: 'KapokToolbar',
  components: { },
  props: {
    backButton: {
      type: Boolean,
      default: true
    },
    multiviewButton: {
      type: Boolean,
      default: true
    },
    multiviewOptions: {
      type: Array,
      default: function() {
        return [
          { title: '宫格视图', icon: 'el-icon-s-grid' },
          { title: '表格视图', icon: 'el-icon-menu' }
        ]
      }
    },
    refreshButton: {
      type: Boolean,
      default: true
    },
    filterButton: {
      type: Boolean,
      default: true
    },
    searchInput: {
      type: Boolean,
      default: true
    },
    searchInputPlaceholder: {
      type: String,
      default: '搜索'
    },
    filterOptions: {
      type: Array,
      default: function() {
        return []
      }
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filters: {},
      searchKey: null,
      currentView: 0
    }
  },
  methods: {
    back() {
      this.$emit('on-back')
    },
    switchView() {
      if (this.currentView < this.multiviewOptions.length - 1) {
        this.currentView++
      } else {
        this.currentView = 0
      }
      this.$emit('on-view-change', this.multiviewOptions[this.currentView], this.currentView)
    },
    refresh() {
      this.$emit('on-refresh')
    },
    onFilter() {
      this.$nextTick(() => {
        this.$refs.scrollbar.update()
      })
      this.$emit('on-filter', this.getFilters(), this.filters)
    },
    getFilters() {
      const result = {}
      Object.keys(this.filters).forEach((key, index) => {
        if (this.filters[key]) {
          result[key] = this.filters[key].value
        } else {
          result[key] = null
        }
      })
      return result
    },
    onSearch() {
      this.$emit('on-search', this.searchKey)
    },
    setFilters(filters) {
      if (filters instanceof Object) {
        this.filters = {
          ...this.filters,
          ...filters
        }
        this.onFilter()
      }
    },
    cancelFilter(filter, key) {
      this.$nextTick(() => {
        this.$refs.scrollbar.update()
      })
      this.filters[key] = null
      this.$emit('on-filter', this.getFilters(), this.filters)
    },
    getFiltersTitle() {
      let filterTitle = ''
      Object.keys(this.filters).forEach((key, index) => {
        if (this.filters[key]) {
          filterTitle === '' ? filterTitle = this.filters[key].text : filterTitle = filterTitle + '-' + this.filters[key].text
        }
      })
      return filterTitle
    }
  }
}
</script>

<style scoped>

</style>
