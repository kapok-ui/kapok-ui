<template>
  <el-scrollbar
    v-if="data && data.length > 0"
    :style="scrollbarStyle"
  >
    <div :style="gridListStyle">
      <el-card
        v-for="(item,i) in data"
        :key="i"
        shadow="hover"
        :body-style="{padding: '0'}"
      >
        <slot :row="item">
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
          />
        </slot>
      </el-card>
    </div>
  </el-scrollbar>
  <div v-else :style="noDataStyle">
    <el-empty :description="emptyText" />
  </div>
</template>

<script>
import KapokOption from '../../kapok-option'
export default {
  name: 'KapokGrid',
  components: { KapokOption },
  props: {
    height: {
      type: Number,
      default: 350
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarProp: {
      type: String,
      default: 'avatar'
    },
    titleProp: {
      type: String,
      default: 'title'
    },
    sexProp: {
      type: String,
      default: null
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
    columns: {
      type: Number,
      default: 3
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
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    optionClickHandler: {
      type: Function,
      default: function(data) {}
    },
    preview: {
      type: Boolean,
      default: false
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
    }
  },
  data() {
    return {
    }
  },
  computed: {
    scrollbarStyle() {
      return {
        height: this.height + 'px'
      }
    },
    noDataStyle() {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: this.height + 'px'
      }
    },
    gridListStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + this.columns + ', 1fr)',
        gridGap: '10px',
        gridAutoFlow: 'row',
        paddingRight: '10px',
        paddingBottom: '10px'
      }
    }
  }
}
</script>

<style scoped>
</style>
