<template>
  <div class="home">
    <div class="mse" id="mse"></div>
    <div class="btn-box">
      <button @click="changeUrl">切换视频播放地址</button>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";
import "../../xgplayer-style/skin/index.js";
export default {
  name: "Home",
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.initXgPlayer();
  },
  methods: {
    initXgPlayer() {
      this.player = new Player({
        id: "mse",
        url: "https://mov.bn.netease.com/open-movie/nos/mp4/2021/05/30/SGA9A3CJ7_shd.mp4",
      });
      //注册事件 更多事件看官网
      this.player.once("ready", () => {
        console.log("ready");
      });
      //改变进度条
      this.player.on("seeking", () => {
        console.log("当前进度", this.player.currentTime);
        //可以调接口保存进度 注意防抖哈
      });
    },
    //切换播放地址
    async changeUrl() {
      //加个loading 优化体验
      Player.util.removeClass(this.player.root, "xgplayer-ended");
      Player.util.addClass(this.player.root, "xgplayer-loading");
      let url = await this.getUrl();
      if (!this.player.hasStart) {
        this.player.start(url);
      } else {
        this.player.src = url;
      }
      this.player.play();
    },
    //模拟 接口地址
    getUrl() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            "https://mov.bn.netease.com/open-movie/nos/mp4/2019/06/25/SEHJ25AHK_shd.mp4"
          );
        }, 3000);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: #bc763c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .mse {
    width: 576px;
    height: 324px;
    background: #895b8a;
    box-shadow: 0px 0px 16px 1px #333;
    border-radius: 6px;
    overflow: hidden;
  }

  .btn-box {
    margin-top: 20px;
  }
}
</style>