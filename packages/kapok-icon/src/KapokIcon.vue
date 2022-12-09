<template>
  <div :style="iconContainer">
    <span :class="icon" :style="iconStyle" />
    <span v-if="title" class="kapok-icon-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'KapokIcon',
  props: {
    icon: {
      type: String,
      default: 'iconfont kapok-icon-book'
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle() {
      return {
        fontSize: '28px',
        color: '#303133'
      }
    },
    iconContainer() {
      return this.title ? {
        display: 'flex',
        alignItems: 'center'
      } : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}
</script>

<style scoped>
.kapok-icon-title {
  margin-left: 5px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
