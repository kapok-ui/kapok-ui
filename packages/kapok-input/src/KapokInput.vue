<template>
  <div :class="divClass">
    <el-input
      ref="input"
      size="small"
      :value="value"
      :readonly="readonly"
      :suffix-icon="readonly ? '' : config.loading ? 'el-icon-loading' : 'el-icon-edit'"
      @mouseover.native="divClass = null"
      @mouseleave.native="mouseLeave"
      @change="confirm"
      @blur="onBlur"
      @input="inputChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'KapokInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autoLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      originValue: '',
      config: {
        value: '',
        prop: '',
        loading: false
      },
      divClass: 'kapok-input'
    }
  },
  methods: {
    inputChange(val) {
      this.$emit('input', val)
    },
    confirm() {
      this.divClass = 'kapok-input'
      if (this.readonly) {
        return
      }
      if (this.autoLoading) {
        this.config.loading = true
      }
      this.config.value = this.value
      this.config.prop = this.prop
      this.$emit('confirm', this.config)
    },
    mouseLeave() {
      if (!this.$refs.input.focused) {
        this.divClass = 'kapok-input'
      }
    },
    onBlur() {
      this.divClass = 'kapok-input'
    }
  }
}
</script>

<style scoped>
.kapok-input >>> .el-input__inner {
  border: 1px solid #fff;
}
</style>
