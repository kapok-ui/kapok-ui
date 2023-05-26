<template>
  <div id="app">
    <kapok-toolbar
      ref="toolbar"
      :filter-options="filterOptions"
      @on-filter="onFilter"
    >
      <template v-slot:customFilter>
        <el-date-picker
          v-model="params.reg_time"
          type="date"
          value-format="yyyy-MM-dd"
          size="mini"
          placeholder="注册时间"
          style="width: 90%"
          @change="handleRegTimeFilterChange"
        />
      </template>
    </kapok-toolbar>
    <kapok-select
      v-model="selectValue"
      border="always"
      clearable
      :select-option="false"
      :prefix-loading="true"
      :options="[{text: '测试1',value: 'test', sex: '男'}]"
      :option-config="{avatar: false,sexProp: 'sex',tags: true,tagProps: [{titleProp: 'text'},{titleProp: 'text'},{titleProp: 'text'},{titleProp: 'text'},{titleProp: 'text'}]}"
      @change="onChange"
    />
    {{ selectValue }}
    <kapok-profile-card
      :item="{text: 'test'}"
      :tag-props="[{ titleProp: 'text' }]"
      :close-button="true"
      :avatar="true"
      :tags="true"
      :close-handler="closeCard"
      :more-button="true"
      title-prop="text"
      style="width: 300px;margin-top: 20px;"
    />
    <kapok-grid
      :data="[{name: '测试',sex: '男'}]"
      :avatar="true"
      :columns="4"
      :ellipsis-items="false"
      :more-button="true"
      :more-button-props="[{ title: '测试', handler: handleClick }]"
      :tags="true"
      :tag-props="[{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' },{ titleProp: 'name' }]"
      :ellipsis-item-props="[{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' },{ prop: 'name',title: '姓名：' }]"
      title-prop="name"
      sex-prop="sex"
      style="margin-top: 100px;"
    />
    <kapok-header style="margin-top: 10px;" />
    <kapok-app-card style="width: 150px" title="上下班签到上下班签到">
      <span>123</span>
    </kapok-app-card>
    <kapok-apps-bar :apps="apps" style="margin-top: 10px;" />
  </div>
</template>

<script>
import KapokGrid from '../packages/kapok-grid/src/KapokGrid'
import KapokSelect from '../packages/kapok-select/src/KapokSelect'
import KapokProfileCard from '../packages/kapok-profile-card/src/KapokProfileCard'
import KapokHeader from '../packages/kapok-header'
import KapokAppCard from '../packages/kapok-app-card'
import KapokAppsBar from '../packages/kapok-apps-bar'
import KapokToolbar from '../packages/kapok-toolbar'
export default {
  name: 'App',
  components: { KapokGrid, KapokSelect, KapokProfileCard, KapokHeader, KapokAppCard, KapokAppsBar, KapokToolbar },
  data() {
    return {
      params: {
        reg_time: '',
        test: ''
      },
      selectValue: 'test',
      apps: [
        { title: '测试', icon: 'https://www.ouya.guolianrobot.com/Noface.jpg' },
        { title: '测试2', icon: 'iconfont kapok-icon-book' }
      ],
      filterOptions: [
        { filterKey: 'test', filters: [{ text: '测试', value: '1' }, { text: '测试2', value: '2' }] }
      ]
    }
  },
  methods: {
    onChange(data) {
      setTimeout(() => {
        data.loading = false
      }, 3000)
    },
    closeCard(item) {
      this.selectValue = null
    },
    handleClick(row) {
      console.log(row)
    },
    handleRegTimeFilterChange(value) {
      this.$refs.toolbar.setFilters({
        reg_time: value ? { text: value, value: value } : null
      })
    },
    onFilter(filters) {
      Object.keys(filters).forEach((key, index) => {
        this.params[key] = filters[key]
      })
      console.log(this.params)
    }
  }
}
</script>
