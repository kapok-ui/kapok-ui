<template>
  <div :class="avatarClass" :style="{height: height + 'px', width: width + 'px', borderRadius: '4px'}">
    <el-image
      ref="avatar"
      :src="src"
      fit="fill"
      :style="{height: height + 'px', width: width + 'px', borderRadius: '4px'}"
    >
      <div slot="error">
        <img src="https://www.ouya.guolianrobot.com/Noface.jpg" alt="" :width="width" :height="height">
      </div>
    </el-image>
    <div v-if="upload && !uploading" class="kapok-avatar-upload-mask">
      <el-button v-if="preview && width >= 70" type="text" icon="el-icon-zoom-in" size="mini" style="color: white" @click="showImgViewer">查看大图</el-button>
      <i v-if="preview && width < 70" class="el-icon-zoom-in" style="font-size: 20px;cursor: pointer" @click="showImgViewer" />
      <el-upload
        :action="uploadConfig.action"
        :data="uploadConfig.data"
        :name="uploadConfig.name ? uploadConfig.name : 'file'"
        :accept="uploadConfig.accept"
        :headers="uploadConfig.headers"
        :show-file-list="false"
        :before-upload="beforeUpload"
        :on-success="onUploaded"
        :on-errot="onUploaded"
      >
        <el-button v-if="width >= 70" type="text" icon="el-icon-refresh" size="mini" style="color: white">
          {{ uploadConfig.title ? uploadConfig.title : '更换头像' }}
        </el-button>
        <i v-else class="el-icon-refresh" style="font-size: 20px;cursor: pointer" />
      </el-upload>
    </div>
    <div v-if="upload && uploading" class="kapok-avatar-uploading-mask">
      <i class="el-icon-loading" />
      <span v-if="width >= 70" style="margin-left: 2px;font-size: 12px">上传中...</span>
    </div>
    <div v-if="preview && !upload && !uploading" class="kapok-avatar-preview-mask">
      <el-button v-if="width >= 70" type="text" icon="el-icon-zoom-in" size="mini" style="color: white" @click="showImgViewer">
        {{ width > 40 ? '查看大图' : '' }}
      </el-button>
      <i v-else class="el-icon-zoom-in" style="font-size: 20px;cursor: pointer" @click="showImgViewer" />
    </div>
    <el-image-viewer
      v-if="imgViewerVisible"
      :on-close="closeImgViewer"
      :url-list="[src]"
      :z-index="3000"
    />
  </div>
</template>

<script>
import elImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: 'KapokAvatar',
  components: {
    elImageViewer
  },
  props: {
    src: {
      type: String,
      default: 'https://www.ouya.guolianrobot.com/Noface.jpg'
    },
    width: {
      type: Number,
      default: 65
    },
    height: {
      type: Number,
      default: 75
    },
    // 是否开启预览功能
    preview: {
      type: Boolean,
      default: false
    },
    // 是否开启上传功能
    upload: {
      type: Boolean,
      default: false
    },
    uploadHandler: {
      type: Function,
      default: function() {}
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
    }
  },
  data() {
    return {
      uploading: false,
      imgViewerVisible: false
    }
  },
  computed: {
    avatarClass() {
      if (this.upload) {
        if (this.uploading) {
          return 'kapok-avatar-uploading'
        } else {
          return 'kapok-avatar-with-upload-mask'
        }
      } else {
        if (this.preview) {
          return 'kapok-avatar-with-preview-mask'
        } else {
          return 'kapok-avatar'
        }
      }
    }
  },
  methods: {
    beforeUpload() {
      this.uploading = true
    },
    onUploaded(res, file) {
      this.uploading = false
      this.uploadHandler(res, file)
    },
    showImgViewer() {
      this.imgViewerVisible = true
      const m = (e) => { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', m, false) // 禁止页面滑动
    },
    closeImgViewer() {
      this.imgViewerVisible = false
      const m = (e) => { e.preventDefault() }
      document.body.style.overflow = 'auto'
      document.removeEventListener('touchmove', m, true)
    }
  }
}
</script>

<style scoped>
.kapok-avatar {
  text-align: center;
}

.kapok-avatar-with-preview-mask {
  display: block;
  position: relative;
  text-align: center;
  border-radius: 4px;
}

.kapok-avatar-with-preview-mask:hover .kapok-avatar-preview-mask {
  opacity: 1;
}

.kapok-avatar-preview-mask {
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
  border-radius: 4px;
}

.kapok-avatar-uploading {
  display: block;
  position: relative;
  text-align: center;
  border-radius: 4px;
}

.kapok-avatar-uploading-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  background: rgba(115, 112, 112, 0.5);
  color: #ffffff;
  opacity: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.kapok-avatar-with-upload-mask {
  display: block;
  position: relative;
  text-align: center;
  border-radius: 4px;
}

.kapok-avatar-with-upload-mask:hover .kapok-avatar-upload-mask {
  opacity: 1;
}

.kapok-avatar-upload-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  position: absolute;
  text-align: center;
  background: rgba(115, 112, 112, 0.5);
  color: #ffffff;
  opacity: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: .5s;
}
</style>
