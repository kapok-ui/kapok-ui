<template>
  <div class="csdn-side-toolbar ">
    <!--<a class="option-box no—h">
      <img src="https://g.csdnimg.cn/side-toolbar/3.0/images/qr.png" alt="" srcset="">
      <span class="show-txt">手机看</span>
      <div class="app-qr-box">
        <div class="bg-box">
          <div class="qr-item-box">
            <img src="https://g.csdnimg.cn/side-toolbar/3.0/images/qr_wechat.png" alt="关注公众号">
            <p class="desc">关注公众号</p>
          </div>
          <div class="qr-item-box">
            <img src="https://g.csdnimg.cn/side-toolbar/3.0/images/qr_app.png" alt="下载APP">
            <p class="desc">下载APP</p>
          </div>
        </div>
      </div>
    </a>-->
    <a class="option-box" @click="goToDocs">
      <img src="https://g.csdnimg.cn/side-toolbar/3.0/images/kefu.png" alt="" srcset="">
      <span class="show-txt">使用<br>文档</span>
    </a>
    <!--<a class="option-box go-top-hide">
      <img src="https://g.csdnimg.cn/side-toolbar/3.0/images/fanhuidingbucopy.png" alt="" srcset="">
      <span class="show-txt">返回<br>顶部</span>
    </a>-->
  </div>
</template>

<script>
export default {
  name: 'KapokDocsButton',
  methods: {
    goToDocs() {
      this.$emit('docs-click')
    }
  }
}
</script>

<style scoped>
.csdn-side-toolbar {
  position: fixed;
  right: 24px;
  bottom: 160px;
  width: 44px;
  z-index: 1999
}

.csdn-side-toolbar a.option-box {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  background-color: #fff;
  text-align: center;
  height: 44px;
  cursor: pointer;
  margin-top: 8px
}

.csdn-side-toolbar a.option-box {
  font-size: 14px;
  font-family: PingFangSC-Regular,PingFang SC;
  font-weight: 400;
  color: #4d4d4d
}

.csdn-side-toolbar a.option-box:hover .app-qr-box {
  display: block
}

.csdn-side-toolbar a.option-box .app-qr-box {
  display: none;
  position: absolute;
  margin-right: 44px;
  padding-right: 4px;
  right: 0;
  top: 0;
  -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
  border-radius: 4px
}

.csdn-side-toolbar a.option-box .app-qr-box .bg-box {
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border-radius: 4px
}

.csdn-side-toolbar a.option-box .app-qr-box .bg-box .qr-item-box {
  padding: 10px 10px 6px;
  border-radius: 4px
}

.csdn-side-toolbar a.option-box .app-qr-box .bg-box .qr-item-box img {
  display: block;
  width: 96px;
  height: auto
}

.csdn-side-toolbar a.option-box .app-qr-box .bg-box .qr-item-box p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #4d4d4d
}

.csdn-side-toolbar a.option-box img {
  width: 26px
}

.csdn-side-toolbar a.option-box.go-top-hide {
  visibility: hidden
}

.csdn-side-toolbar a.option-box.active img,.csdn-side-toolbar a.option-box:hover img {
  display: none
}

.csdn-side-toolbar a.option-box.active .show-txt,.csdn-side-toolbar a.option-box:hover .show-txt {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 100
}

.csdn-side-toolbar a.option-box.no—h.active img,.csdn-side-toolbar a.option-box.no—h:hover img {
  display: block
}

.csdn-side-toolbar a.option-box.no—h.active .show-txt,.csdn-side-toolbar a.option-box.no—h:hover .show-txt {
  display: none
}

.csdn-side-toolbar a.option-box img {
  display: block;
  width: 24px
}

.csdn-side-toolbar a.option-box .show-txt {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 12px;
  line-height: 14px;
  color: #999aaa;
  background-color: #fff;
  text-align: center;
  opacity: 0;
  -webkit-transition: opacity .3s ease-in-out;
  transition: opacity .3s ease-in-out
}

.csdn-side-toolbar.black a.option-box {
  background: #444447
}

.csdn-side-toolbar.black a.option-box .show-txt {
  background: #444447
}
</style>
