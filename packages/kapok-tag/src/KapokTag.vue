<template>
  <el-tag
    v-if="title"
    :size="size"
    :effect="effect"
    :closable="closable"
    :type="type"
  >
    <div :title="title" class="kapok-omit-display">
      {{ title }}
    </div>
  </el-tag>
</template>

<script>
export default {
  name: 'KapokTag',
  props: {
    type: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    title: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'dark'
    },
    maxWidth: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    if (this.title) {
      this.$el.style.setProperty('--max-width', this.maxWidth + 'px')
    }
  }
}
</script>

<style scoped>
.kapok-omit-display {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: var(--max-width)
}
</style>
