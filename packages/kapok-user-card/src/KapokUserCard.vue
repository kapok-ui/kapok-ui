<template>
  <el-card :body-style="{padding: '10px'}">
    <div style="float:left;height: 60px;width: 50px;margin-right: 5px">
      <el-image :src="avatar" style="width: 40px;height: 50px" fit="fill">
        <div slot="error">
          <img src="https://www.ouya.guolianrobot.com/Noface.jpg" width="40" height="50" alt="">
        </div>
      </el-image>
    </div>
    <div style="float:left;width: 300px">
      <div style="line-height: 28px">
        <span>
          {{ name }}
        </span>
        <i :class="sex === '男' ? 'el-icon-male' : 'el-icon-female'" :style="{color: sex === '男' ? '#409EFF' : '#F56C6C'}" />
      </div>
      <div style="color: #8492a6; font-size: 13px;line-height: 20px">
        <kapok-tag
          v-for="(tag,i) in tags"
          :key="i"
          :title="tag.title"
          :size="tag.size"
          :effect="tag.effect"
          :type="tag.type"
          :closable="tag.closable"
          :max-width="tag.maxWidth"
        />
      </div>
    </div>
    <i v-if="closable" class="el-icon-close" @click="close" />
  </el-card>
</template>

<script>
export default {
  name: 'KapokUserCard',
  props: {
    avatar: {
      type: String,
      default: 'https://www.ouya.guolianrobot.com/Noface.jpg'
    },
    name: {
      type: String,
      default: 'HelloKapokUi'
    },
    sex: {
      type: String,
      default: '男'
    },
    closable: {
      type: Boolean,
      default: true
    },
    tags: {
      type: Array,
      default: function() {
        return []
      }
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
i.el-icon-close {
  float:right;
  cursor: pointer
}
i.el-icon-close:hover {
  color: #F56C6C;
}
</style>
