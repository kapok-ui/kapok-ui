<template>
  <el-popover
    v-model="visible"
    :placement="placement"
    :width="width"
    :trigger="trigger"
    @show="onshow"
  >
    <slot name="message" />
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" :disabled="confirmBtnDisabled" @click="handler(data);visible = false">确定</el-button>
    </div>
    <template slot="reference">
      <slot name="btn" />
    </template>
  </el-popover>
</template>

<script>

export default {
  name: 'KapokPopover',
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    width: {
      type: Number,
      default: 240
    },
    placement: {
      type: String,
      default: 'top'
    },
    data: {
      type: null,
      default: null
    },
    handler: {
      type: Function,
      default: function() {
      }
    },
    confirmBtnDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onshow() {
      this.$emit('onshow', this.data)
    }
  }
}
</script>

<style scoped>

</style>
