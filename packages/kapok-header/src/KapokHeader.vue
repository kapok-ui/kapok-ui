<template>
  <div class="kapok-header-bio">
    <div class="kapok-header-bio-section">
      <div class="kapok-header-bio-section-header">
        <span :class="icon" :style="iconStyle" />
        <span v-if="title" class="kapok-header-bio-section-header-title">{{ title }}</span>
        <slot />
      </div>
      <div>
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KapokHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'iconfont kapok-icon-book'
    },
    iconColor: {
      type: String,
      default: '#303133'
    }
  },
  computed: {
    iconStyle() {
      return {
        fontSize: '25px',
        color: this.iconColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.kapok-header-bio {
  color: #606266;

  span {
    padding-left: 4px;
  }

  .kapok-header-bio-section {
    font-size: 14px;
    //padding: 15px 0;

    .kapok-header-bio-section-header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      .kapok-header-bio-section-header-title {
        margin-left: 2px;
        font-weight: bold;
      }
    }
  }
}
</style>
