<template>
  <el-card
    shadow="hover"
    :body-style="{padding: '0',cursor: 'pointer'}"
    :title="title"
  >
    <div class="kapok-app-card-container">
      <slot name="default">
        <el-image v-if="icon.startsWith('http') || icon.startsWith('//')" :src="icon" style="width: 25px;height: 25px;" />
        <span v-else :class="icon" :style="iconStyle" />
        <span class="kapok-app-card-title">{{ title }}</span>
      </slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'KapokAppCard',
  components: {
  },
  props: {
    icon: {
      type: String,
      default: 'iconfont kapok-icon-book'
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    iconStyle() {
      return {
        fontSize: '28px',
        color: '#303133'
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.kapok-app-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.kapok-app-card-title {
  margin-left: 5px;
  color: #303133;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
