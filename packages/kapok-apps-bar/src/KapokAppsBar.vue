<template>
  <kapok-header :icon="icon" :title="title">
    <template v-slot:body>
      <div :style="gridListStyle">
        <kapok-app-card
          v-for="(app, i) in apps"
          :key="i"
          :icon="app.icon"
          :title="app.title"
          @click.native="appClickHandler(app, i)"
        />
      </div>
    </template>
  </kapok-header>
</template>

<script>

import KapokHeader from '../../kapok-header'
import KapokAppCard from '../../kapok-app-card'

export default {
  name: 'KapokAppsBar',
  components: {
    KapokHeader, KapokAppCard
  },
  props: {
    icon: {
      type: String,
      default: 'iconfont kapok-icon-book'
    },
    title: {
      type: String,
      default: '标题'
    },
    apps: {
      type: Array,
      default: function() {
        return []
      }
    },
    columns: {
      type: Number,
      default: 8
    },
    appClickHandler: {
      type: Function,
      default: function(app, index) {
        console.log(app, index)
      }
    }
  },
  computed: {
    gridListStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + this.columns + ', 1fr)',
        gridGap: '10px',
        gridAutoFlow: 'row',
        paddingRight: '10px',
        paddingBottom: '10px'
      }
    }
  }
}
</script>

<style scoped>
</style>
