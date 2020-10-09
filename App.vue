<script>
	export default {
		onLaunch: function() {
			// 初始化录音管理器
			this.$store.commit('initRECORD')
			// 初始化登录状态
			// this.$store.dispatch('initLogin')
			console.log('App Launch')
			// 监听键盘高度变化
			uni.onNetworkStatusChange(res => {
				if(res.isConnected){
					this.$store.dispatch('reconnect')
				};
			});
		},
		onShow: function() {
			this.$store.dispatch('location')
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/fss.css";
	@import "./common/common.css";
	/* #ifndef APP-PLUS-NVUE */
	@import "./common/fss-icon.css";
	/* #endif */
	/* #ifdef MP */
	::-webkit-scrollbar{
		display: none;
	}
	/* #endif */
</style>
