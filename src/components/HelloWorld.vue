<template>
	<div class="hello">
		<div class="main">
				<div class="mse" id="mse">
					<!-- 自定义 样式可以 用定位 -->
					<div class="btn" id="btn" @click="back">返回</div>
				</div>
			</div>
		<div style="height: 1800px;"></div>
	</div>
</template>

<script>
import Player from 'xgplayer';
import '../../.xgplayer/skin/index.js';
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},

	data() {
		let player;
		return {};
	},
	mounted() {
		this.initXgPlayer();
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		//离开该页面需要移除这个监听的事件
		window.removeEventListener('scroll', this.handleScroll);
	},

	methods: {
		handleScroll() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop <= 700) {
				if (this.player.pip) {
					this.player.exitPIP();
				}
			} else {
				if (!this.player.pip) {
					this.player.getPIP();
				}
			}
		},
		back(){
			document.body.scrollTop = 0,
			document.documentElement.scrollTop = 0
		},
		initXgPlayer() {
			let _this = this;
			this.player = new Player({
				id: 'mse',
				width: 860,
				height: 483,
				fluid: true,
				poster: 'https://open-image.ws.126.net/open-h5uploadfile/banner-1568118422908.png',
				playbackRate: [0.5, 0.75, 1, 1.5, 2],
				defaultPlaybackRate: 1.5,
				url: 'https://v-cdn.zjol.com.cn/276989.mp4',
				progressDot: [{ time: 10 }, { time: 22 }, { time: 56 }],
				lang: 'zh-cn',
				playNext: {
					urlList: [
						'http://mov.bn.netease.com/open-movie/nos/mp4/2019/09/03/SEN83A3S4_sd.mp4',
						'http://mov.bn.netease.com/open-movie/nos/mp4/2019/08/26/SEMJ637H3_shd.mp4',
						'http://mov.bn.netease.com/open-movie/nos/mp4/2019/10/23/SER87BJR4_shd.mp4',
						'http://mov.bn.netease.com/open-movie/nos/mp4/2019/10/23/SER87BJR4_shd.mp4'
					]
				}
			});
			//注册事件
			this.player.once('ready', () => {});
			this.player.on('ended', function() {
				console.log('播放完成');
			});
			this.player.on('ended', function() {
				console.log('播放完成');
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
	width: 450px;
	height: 450px;
}
.btn {
	position: absolute;
	top: 0;
	z-index: 999;
	width: 50px;
	height: 50px;
	background-color: pink;
}
</style>
