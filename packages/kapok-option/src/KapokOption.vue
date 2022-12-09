<template>
  <div :class="columnMask ? 'kapok-option-with-mask' : 'kapok-option'" @click="optionClickHandler(item)">
    <div style="display: flex;">
      <kapok-avatar
        v-if="avatar"
        :preview="preview"
        :upload="upload"
        :upload-config="uploadConfig"
        :upload-handler="uploadHandler"
        :src="item[avatarProp]"
        :width="avatarWidth"
        :height="avatarHeight"
        style="margin-right: 10px;"
      />
      <div :style="{width: avatar ? 'calc(100% - ' + (avatarWidth + 10) + 'px)' : '100%'}">
        <div style="display: flex">
          <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 90%;">
            <span style="font-size: 15px;font-weight: bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="item[titleProp]">{{ item[titleProp] }}</span>
            <i v-if="sexProp" :class="item[sexProp] === '男' ? 'el-icon-male' : 'el-icon-female'" :style="{color: item[sexProp] === '男' ? '#409EFF' : '#F56C6C'}" />
          </div>
          <div v-if="closeButton" style="margin-top: -8px;text-align: right;width: 10%">
            <i class="el-icon-close" title="关闭" style="cursor: pointer;color: #F56C6C" @click="closeHandler(item)" />
          </div>
          <div v-else style="margin-top: -8px;text-align: right;width: 10%">
            <el-dropdown v-if="moreButton">
              <span class="el-dropdown-link">
                <i class="el-icon-more" style="cursor: pointer" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(moreButtonProp, m) in moreButtonProps"
                  :key="m"
                  @click.native="moreButtonProp.handler ? moreButtonProp.handler(item) : dropdownItemOnClick(item)"
                >
                  <el-link
                    :type="moreButtonProp.type ? moreButtonProp.type : ''"
                    :underline="moreButtonProp.underline === true"
                    :disabled="moreButtonProp.disabled === true"
                    :icon="moreButtonProp.icon"
                  >
                    {{ moreButtonProp.title }}
                  </el-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <el-scrollbar v-if="tags">
          <div style="display: flex;padding-bottom: 5px;padding-top: 5px;">
            <slot name="tags" />
            <kapok-tag
              v-for="(tagProp,t) in tagProps"
              :key="t"
              :max-width="tagProp.maxWidth ? tagProp.maxWidth : 100"
              :closable="tagProp.closable === true"
              :title="item[tagProp.titleProp] ? item[tagProp.titleProp].toString() : ''"
              :type="tagProp.type"
              :effect="tagProp.effect ? tagProp.effect : 'dark'"
              :size="tagProp.size ? tagProp.size : 'mini'"
              style="margin-right: 5px;"
            />
          </div>
        </el-scrollbar>
        <el-scrollbar>
          <slot name="ellipsisItems" />
          <div v-if="ellipsisItems" style="max-height: 60px">
            <div
              v-for="(ellipsisItemProp, e) in ellipsisItemProps"
              :key="e"
              :title="item[ellipsisItemProp.prop]"
              class="kapok-option-ellipsis"
            >
              <span style="font-size: 12px">{{ ellipsisItemProp.title }}{{ item[ellipsisItemProp.prop] }}</span>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div v-if="columnMask" class="kapok-option-mask">
      <i :class="columnMaskConfig.icon" />
      <span style="margin-left: 5px">{{ columnMaskConfig.title }}</span>
    </div>
  </div>
</template>

<script>
import KapokAvatar from '../../kapok-avatar'
import KapokTag from '../../kapok-tag'
export default {
  name: 'KapokOption',
  components: { KapokAvatar, KapokTag },
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
    },
    closeHandler: {
      type: Function,
      default: function(data) {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
    avatarWidth() {
      return this.tags && this.ellipsisItems ? 90 : this.tags && !this.ellipsisItems ? 40 : !this.tags && this.ellipsisItems ? 70 : 40
    },
    avatarHeight() {
      return this.tags && this.ellipsisItems ? 112 : this.tags && !this.ellipsisItems ? 48 : !this.tags && this.ellipsisItems ? 85 : 50
    }
  },
  methods: {
    dropdownItemOnClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
.kapok-option {
  padding: 10px;
}

.kapok-option-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  background: rgba(115, 112, 112, 0.5);
  color: #ffffff;
  opacity: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: .5s;
}

.kapok-option-with-mask {
  cursor: pointer;
  display: block;
  position: relative;
  padding: 10px;
}

.kapok-option-with-mask:hover .kapok-option-mask {
  opacity: 1;
}

.kapok-option-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
