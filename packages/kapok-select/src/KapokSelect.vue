<template>
  <div class="kapok-select">
    <el-select
      ref="select"
      :value="value"
      :filterable="filterable"
      :clearable="clearable"
      :remote="remote"
      :reserve-keyword="reserveKeyword"
      :placeholder="placeholder"
      :remote-method="remoteMethod"
      :loading="loading"
      :value-key="valueKey"
      @mouseover.native="divClass = null"
      @mouseleave.native="mouseLeave"
      @input="change($event)"
      @focus="onFocus"
    >
      <template v-if="valueConfig.loading" slot="prefix">
        <i class="el-icon-loading" />
      </template>
      <slot name="default">
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.text"
          :value="option.value"
        />
      </slot>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'NoBorderSelect',
  props: {
    valueKey: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    options: {
      type: Array,
      default: function() {
        return []
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autoLoading: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    reserveKeyword: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    remoteMethod: {
      type: Function,
      default: function() {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      divClass: 'kapok-select',
      valueConfig: {
        prop: '',
        value: '',
        loading: false
      }
    }
  },
  methods: {
    mouseLeave() {
      this.divClass = 'kapok-select'
    },
    onFocus() {
      if (this.readonly) {
        this.$refs.select.blur()
      }
    },
    change: function(val) {
      this.$emit('input', val)
      if (this.autoLoading) {
        this.valueConfig.loading = true
      }
      this.valueConfig.value = val
      this.valueConfig.prop = this.valueKey
      this.$emit('confirm', this.valueConfig)
    }
  }
}
</script>

<style scoped>
.kapok-select >>> .el-input__inner {
  border: 1px solid #fff;
}
.el-icon-loading {
  line-height: 32px;
}
</style>
