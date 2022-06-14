<template>
  <el-drawer
    :visible.sync="visible"
    :before-close="onClose"
    :with-header="false"
    append-to-body
    direction="rtl"
    :size="size"
    :title="title"
    @open="onOpen"
  >
    <iframe :src="url" width="100%" style="height: calc(100% - 4px)" />
  </el-drawer>
</template>

<script>
export default {
  name: 'KapokDocsDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '文档'
    },
    size: {
      type: Number || String,
      default: '70%'
    },
    url: {
      type: String,
      default: 'https://www.baidu.com'
    }
  },
  methods: {
    onOpen() {
    },
    onClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped>

</style>
