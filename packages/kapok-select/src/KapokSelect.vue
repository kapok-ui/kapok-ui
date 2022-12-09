<template>
  <div :class="divClass">
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
      :value-key="optionConfig.valueKey"
      :size="size"
      @mouseover.native="mouseOver"
      @mouseleave.native="mouseLeave"
      @input="change($event)"
      @focus="onFocus"
      @clear="clear"
    >
      <template slot="prefix">
        <i
          v-if="prefixLoading && valueConfig.loading"
          class="el-icon-loading"
          :style="{lineHeight: size === 'mini' ? '28px' : size === 'small' ? '32px' : '36px' }"
        />
        <slot v-else name="prefix" />
      </template>
      <el-option
        v-for="(option,i) in options"
        :key="i"
        :label="option[optionConfig.labelKey ? optionConfig.labelKey : 'text']"
        :value="selectOption ? option : option[optionConfig.valueKey ? optionConfig.valueKey : 'value']"
        :style="optionConfig.avatar || optionConfig.tags ? { height: '68px'} : null"
      >
        <kapok-option
          v-if="optionConfig.avatar || optionConfig.tags"
          :item="option"
          :avatar="optionConfig.avatar === true"
          :avatar-prop="optionConfig.avatarProp ? optionConfig.avatarProp : 'avatar'"
          :title-prop="optionConfig.labelKey ? optionConfig.labelKey : 'text'"
          :sex-prop="optionConfig.sexProp"
          :tags="optionConfig.tags === true"
          :tag-props="optionConfig.tagProps ? optionConfig.tagProps : []"
          :ellipsis-items="false"
          :preview="false"
          style="line-height: 20px"
        />
      </el-option>
    </el-select>
  </div>
</template>

<script>
import kapokOption from '../../kapok-option/src/KapokOption'
export default {
  name: 'KapokSelect',
  components: { kapokOption },
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: null
    },
    // 某些场景下可能会需要
    prop: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: function() {
        return []
      }
    },
    optionConfig: {
      type: Object,
      default: function() {
        return {
          labelKey: 'text',
          valueKey: 'value',
          avatar: false,
          avatarProp: 'avatar',
          sexProp: null,
          tags: false,
          tagProps: []
        }
      }
    },
    // 是否选择整个option作为value
    selectOption: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    border: {
      type: String,
      default: 'always'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prefixLoading: {
      type: Boolean,
      default: false
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
      valueConfig: {
        prop: '',
        value: '',
        loading: false
      },
      hover: true
    }
  },
  computed: {
    divClass() {
      if (this.readonly) {
        if (this.border === 'hover' && this.hover) {
          return 'kapok-select-hover-readonly'
        } else {
          return ''
        }
      } else {
        if (this.border === 'hover' && this.hover) {
          return 'kapok-select-hover'
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    mouseOver() {
      this.hover = false
    },
    mouseLeave() {
      this.hover = true
    },
    onFocus() {
      if (this.readonly) {
        this.$refs.select.blur()
      }
    },
    change: function(val) {
      this.$emit('input', val)
      if (this.prefixLoading) {
        this.valueConfig.loading = true
      }
      this.valueConfig.value = val
      this.valueConfig.prop = this.prop
      this.$emit('change', this.valueConfig)
    },
    clear() {
      this.$emit('clear', this.valueConfig)
    }
  }
}
</script>

<style scoped>
.kapok-select-hover >>> .el-input__inner {
  border: 1px solid #fff;
}
.kapok-select-hover-readonly >>> .el-input__inner {
  border: 1px solid #fff;
}
.kapok-select-hover-readonly >>> .el-select .el-input .el-select__caret.el-icon-arrow-up::before {
  visibility: hidden;
}
</style>
