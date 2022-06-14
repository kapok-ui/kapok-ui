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
        <kapok-option
          :item="item"
          :column-mask="columnMask"
          :column-mask-config="columnMaskConfig"
          :avatar="avatar"
          :avatar-prop="avatarProp"
          :title-prop="titleProp"
          :more-button="moreButton"
          :more-button-props="moreButtonProps"
          :tags="tags"
          :tag-props="tagProps"
          :ellipsis-items="ellipsisItems"
          :ellipsis-item-props="ellipsisItemProps"
          :option-click-handler="optionClickHandler"
        />
      </el-card>
    </div>
  </el-scrollbar>
  <div v-else :style="noDataStyle">
    <el-empty :description="emptyText" />
  </div>
</template>

<script>
export default {
  name: 'KapokGrid',
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
