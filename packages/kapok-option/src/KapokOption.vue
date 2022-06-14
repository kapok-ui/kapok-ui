<template>
  <div :class="columnMask ? 'kapok-option-with-mask' : 'kapok-option'" @click="optionClickHandler(item)">
    <div>
      <el-image v-if="avatar" :key="item[avatarProp]" :src="item[avatarProp]" style="width: 40px;height: 50px;float:left;margin-right: 5px" fit="fill">
        <div slot="error">
          <img src="https://www.ouya.guolianrobot.com/Noface.jpg" width="40" height="50" alt="">
        </div>
      </el-image>
      <div style="display: flex">
        <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 90%;">
          <span style="font-size: 14px;font-weight: bold;line-height: 25px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" :title="item[titleProp]">{{ item[titleProp] }}</span>
        </div>
        <div style="text-align: right;width: 10%">
          <el-dropdown v-if="moreButton">
            <span class="el-dropdown-link">
              <i class="el-icon-more" style="cursor: pointer" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(moreButtonProp, m) in moreButtonProps"
                :key="m"
              >
                <el-link
                  :type="moreButtonProp.type ? moreButtonProp.type : ''"
                  :underline="moreButtonProp.underline === true"
                  :disabled="moreButtonProp.disabled === true"
                  :icon="moreButtonProp.icon"
                  @click="moreButtonProp.handler ? moreButtonProp.handler(item) : dropdownItemOnClick(item)"
                >
                  {{ moreButtonProp.title }}
                </el-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-scrollbar v-if="tags">
        <div style="display: flex;padding-bottom: 5px;padding-top: 5px">
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
    </div>
    <el-scrollbar v-if="ellipsisItems">
      <div style="max-height: 120px">
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
    <div v-if="columnMask" class="kapok-option-mask">
      <i :class="columnMaskConfig.icon" />
      <span style="margin-left: 5px">{{ columnMaskConfig.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KapokOption',
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
      default: true
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
  data() {
    return {
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
