<template>
  <el-card
    shadow="hover"
    :body-style="{padding: '0'}"
  >
    <kapok-option
      :item="item"
      :column-mask="columnMask"
      :column-mask-config="columnMaskConfig"
      :avatar="avatar"
      :avatar-prop="avatarProp"
      :title-prop="titleProp"
      :sex-prop="sexProp"
      :more-button="moreButton"
      :more-button-props="moreButtonProps"
      :tags="tags"
      :tag-props="tagProps"
      :ellipsis-items="ellipsisItems"
      :ellipsis-item-props="ellipsisItemProps"
      :option-click-handler="optionClickHandler"
      :upload="upload"
      :upload-config="uploadConfig"
      :upload-handler="uploadHandler"
      :preview="preview"
      :close-button="closeButton"
      :close-handler="closeHandler"
    />
  </el-card>
</template>

<script>
import KapokOption from '../../kapok-option/src/KapokOption'
export default {
  name: 'KapokProfileCard',
  components: { KapokOption },
  props: {
    item: {
      type: Object,
      default: null
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarProp: {
      type: String,
      default: 'avatar'
    },
    sexProp: {
      type: String,
      default: null
    },
    // 是否开启预览功能
    preview: {
      type: Boolean,
      default: true
    },
    upload: {
      type: Boolean,
      default: false
    },
    uploadConfig: {
      type: Object,
      default: function() {
        return {
          action: '', // 上传的地址
          headers: {}, // 请求头
          data: {}, // 附件参数
          name: 'file', // 上传的文件字段名
          accept: '', // 接受上传的文件类型
          icon: 'el-icon-fresh', // 上传遮罩层图标
          title: '更换头像' // 上传遮罩层标题
        }
      }
    },
    uploadHandler: {
      type: Function,
      default: function() {}
    },
    titleProp: {
      type: String,
      default: 'title'
    },
    moreButton: {
      type: Boolean,
      default: false
    },
    moreButtonProps: {
      type: Array,
      default: function() {
        return []
      }
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    closeHandler: {
      type: Function,
      default: function(data) {}
    },
    tags: {
      type: Boolean,
      default: true
    },
    tagProps: {
      type: Array,
      default: function() {
        return []
      }
    },
    ellipsisItems: {
      type: Boolean,
      default: false
    },
    ellipsisItemProps: {
      type: Array,
      default: function() {
        return []
      }
    },
    columnMask: {
      type: Boolean,
      default: false
    },
    columnMaskConfig: {
      type: Object,
      default: function() {
        return {
          icon: 'el-icon-plus',
          title: '添加'
        }
      }
    },
    optionClickHandler: {
      type: Function,
      default: function(data) {}
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
</style>
