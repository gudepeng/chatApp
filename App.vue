<script>
	export default {
		onLaunch: function() {
			// 初始化录音管理器
			this.$store.commit('initRECORD')
			// 初始化登录状态
			this.$store.dispatch('initLogin')
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

</style>
